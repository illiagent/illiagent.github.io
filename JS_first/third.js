//task 0_1 object.values in massive -> sum elements in massive

let salaries = {  
  John: 100,  
  Ann: 160, 
  Pete: 130,
};
var salariesValues = Object.values(salaries);
console.log(salariesValues);
var salariesSum = null;
console.log(salariesValues.length);
for (var i = 0; i < salariesValues.length; i++){
    salariesSum += salariesValues[i];
}
console.log(salariesSum);

//

//task 0_2 object.entries in massive -> functions sum elements by index

let salaries = {  
  John: 100,  
  Ann: 160, 
  Pete: 130,
};
var salariesEntries = Object.entries(salaries);
var salary = null;
var sum = function(){
  for (var i = 0; i < salariesEntries.length; i++){
  salary += salariesEntries[i][1];
  }
};
sum();
console.log(salary)

//

//task 0_3 .this

var rez = 0;
let salaries = {  
  John: 100,  
  Ann: 160, 
  Pete: 130,
  sum: function() {
  for (var i = 1 ; i < Object.values(this).length; i++){
  rez += Object.values(this)[i - 1];
  }
  return rez;
  }
};
salaries.sum();
console.log(rez);

//

//task 0_4 for..of

let salaries = {  
  John: 100,  
  Ann: 160, 
  Pete: 130,
};
function sumSalary (salaries){
let sum = 0;
for (let pay of Object.values(salaries)){
  sum += pay;
}
  return sum;
}
console.log(sumSalary(salaries))

//

//task 0_5 reduce

let salaries = {  
  John: 100,  
  Ann: 160, 
  Pete: 130,
};
function sumSalaries(salaries) {
return Object.values(salaries).reduce((a, b) => a + b, 0)
}
console.log(sumSalaries(salaries))

//-------------------------------------------------------

//task 1 flats in the house 

let stairsInHouse = prompt("введите количество подъездов в доме");
let floorsInHouse =prompt("введите количество этажей в доме");
let flatsArea =prompt("сколько квартир на площадке?");
var flatNumber = prompt("номер квартиры, координаты которой хотите узнать");

var flatsInStair = floorsInHouse * flatsArea;
var flatsInHouse = flatsInStair * stairsInHouse;
var searchStair = parseInt((flatNumber - 1) / flatsInStair + 1);
var searchFloor = parseInt(((flatNumber - 1) % flatsInStair)/flatNumber +1);

if (flatNumber <= flatsInHouse){
  alert(`квартира №${flatNumber} \n подъезд: ${searchStair} \n этаж: ${searchFloor}` )
} else {
  alert(`в доме только ${flatsInHouse} квартир!`)
}

//-------------------------------------------------------

//task 2 sequensor

function sequence(start = 0, step = 1) {
  let counter = start;
  return function() {
    var returnCounter = counter; 
    counter += step; 
    return returnCounter;
}
}
var result = sequence();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
 
//-------------------------------------------------------



