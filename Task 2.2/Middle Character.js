//http://www.codewars.com/kata/get-the-middle-character


function getMiddle(s)
{
  var position;
  var length;
  position = (s.length % 2) ? s.length / 2 : s.length / 2 - 1;
  length = (s.length % 2) ? 1 : 2;
  return s.substring(position, position + length)
}