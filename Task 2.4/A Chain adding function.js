//http://www.codewars.com/kata/a-chain-adding-function

var add = function(n) {
  const f = x => add(n + x)
  f.valueOf = () => n
  return f;
}
