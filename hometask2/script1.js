let total_videos = 50;
let videos_per_page = 15;
let no_of_pages = Math.ceil(total_videos / videos_per_page);

let search=document.querySelector('.search-btn');
search.addEventListener("click", searchResults)

function searchResults() {
    let input=document.querySelector('.search-input').value;
    if(input === ""){
        alert("Enter the search input");
        return;
    }

    fetchResults(input).then((res) => {
        const ids = res.items.map(item => item.id.videoId)
        //console.log(ids);
        fetchResultsWithVideoDetails(ids).then((data) => {
            renderVideos(data.items)
        })
    })
};

function fetchResults(input) {
   return fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAeqK9LJ8vty7DVuIr1apMV2k_iLxVqmCs&type=video&part=snippet&maxResults=${total_videos}&q=${input}`)
    .then(res => res.json())
};

function fetchResultsWithVideoDetails(ids) {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAeqK9LJ8vty7DVuIr1apMV2k_iLxVqmCs&id=${ids.join(',')}&part=snippet,statistics`)
    .then(data => data.json())
};

function renderVideos(videoData) {
    renderPagination(no_of_pages);
    videosPerPage(videoData, 1);
    let pages = document.querySelector("#pages-container");
    //console.log(pages);
    
    pages.addEventListener("click",function(e){
        if(e.target !== e.currentTarget) {
            let pageNo = e.target.innerHTML;
            videosPerPage(videoData, pageNo)
        }
    });
}

function renderPagination(no_of_pages){
    let pageHTML = '';
    for (let i = 1; i <= no_of_pages; i++) {
        pageHTML += `<button class="page-btn" id="btn${i}">${i}</button>`;
    }
    document.getElementById('pages-container').innerHTML = pageHTML;
}

function videosPerPage(videoData, pageNo) {
    let start = (pageNo - 1) * videos_per_page;
    let end = start + videos_per_page;
    let videos = videoData.slice(start,end);
    document.querySelector(".videos-listing").innerHTML = '';
    videos.forEach(videoDetails);
}

function videoDetails(video) {
    //console.log(video);
    var id = video.id;
    var thumbnail = video.snippet.thumbnails.high.url;
    var title = video.snippet.title;
    var desc = video.snippet.description.substring(0, 100);
    var author = video.snippet.channelTitle;
    var views = video.statistics.viewCount
    var published = video.snippet.publishedAt.substring(0, 10).split("-").join("/");
    document.getElementById('videos-list').innerHTML += 
        `<div class="video">
            <a href="https:youtube.com/watch?v=${id}">
                <img src="${thumbnail}" alt="thumb" align="center" class="thumbnail" id="img${id}">
            <div class = "details">
                <h4>${title}</h4></a>
                <div class="metaData">
                <div class="views">Views: ${views}</div>
                <div class="published">Uploaded on: ${published}</div>
            </div>
            <div class="author">Channel: ${author}</div>
                <p class="desc">${desc}</p>
            </div>
        </div>`;
}