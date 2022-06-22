//http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
  // Your solution here
  let discount = (d<3)?0:(d>=3 && d<7)?20:50;
  return (d*40)-discount;
}