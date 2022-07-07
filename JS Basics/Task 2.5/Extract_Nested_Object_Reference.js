//http://www.codewars.com/kata/extract-nested-object-reference

Object.prototype.hash = function (string) {
    let ar = string.split('.');
    return ar.reduce((prev,cur) => (prev ? prev[cur] : prev),this);
}

