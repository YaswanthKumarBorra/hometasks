//http://www.codewars.com/kata/function-composition-1

const compose = (...functions) => args => 
	functions.reduceRight((arg, fn) => fn(arg), args);