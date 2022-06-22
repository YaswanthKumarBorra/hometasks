const ar = require("minimist")(process.argv.slice(2));
//console.log(ar);

const operator = ar.operation;
//console.log(operator);

const numbers = ar._;
//console.log(numbers);

switch(operator){
    case "addition": const sum = numbers.reduce((start,end) => start + end); 
                console.log(sum);
                break;
    case "subtraction": if(numbers.length>2) { console.log("Subtraction takes only 2 inputs"); }
                    else { const diff = numbers.reduce((prev,cur) => prev - cur); console.log(diff); } 
                    break;
    case "multiply": const product = numbers.reduce((prev,cur) => prev * cur); 
                    console.log(product);
                    break;
    case "division": if(numbers.length>2) { console.log("Division takes only 2 inputs"); }
                    else if(numbers[1] == 0) { console.log("Cannot divide with 0"); }
                    else { const quotient = numbers.reduce((prev,cur) => prev / cur); console.log(quotient); } 
                    break;
    default : console.log("Invalid Operation"); break;
}