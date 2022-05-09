//http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
  var leftPartition = items.filter(ele => !pred(ele));
  var rightPartition = items.filter(ele => pred(ele));
  
  items.length = 0;
  
  items.push(...leftPartition);

  items.push(...rightPartition);
  
  return leftPartition.length;
}