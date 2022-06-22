//http://www.codewars.com/kata/a-chain-adding-function

function add(n) {
  const f = x => add(n + x)
  f.valueOf = () => n
  return f;
}
