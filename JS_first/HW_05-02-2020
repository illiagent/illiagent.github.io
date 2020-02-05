//task1: buzzfizz

let numbersArr = [];

function change(n) {
    if (Number.isInteger(n)) {
        for (let k = 1; k <= n; k++) {
            numbersArr.push(k)
        };
        for (let i = 0; i < numbersArr.length; i++) {
            if (numbersArr[i] % 3 === 0 && numbersArr[i] % 5 === 0) {
                numbersArr[i] = "fizzbuzz"
            } else if (numbersArr[i] % 5 === 0) {
                numbersArr[i] = "buzz"
            } else if (numbersArr[i] % 3 === 0) {
                numbersArr[i] = "fizz"
            }
        }
    } else console.log("ошибка. введите целое число")
}
change(45);
console.log(numbersArr);

//----------------------------------

//task2:  anagramms

let rez = 0;
let d;
let e;
function anagram(a, b) {
    d = a.toUpperCase();
    e = b.toUpperCase(
        if (a.length === b.length) {
            for (let i = 0; i < a.length; i++) {
                if (d.indexOf(e[i]) !== -1) {
                    rez += 1;
                }
            }
            if (rez === a.length) {
                console.log('words are anagramms')
            } else {
                console.log('words are not anagramms')
            };
        } else {
            console.log('words have different amount of letters')
        }
    }
    anagram("abc", "AcB")

//----------------------------------

//task3:  fibonacci

//a
function fibonacci (n){
  if (n <= 1){
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

//b
function fibonacci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonacci(3);
console.log(fibonacci(4); 
console.log(fibonacci(7);
//----------------------------------

//task4:  sum letters on pages

//a
let arr = [];
const pages = 500;
let sum = 0;
for (let i = 0; i <= pages; i++) {
    arr.push(i);
}
console.log(arr)
let result = arr.reduce(function(acc, curr) {
    let str = curr.toString();
    for (let k = 0; k < str.toString().length; k++) {
        acc += parseInt(str[k]);
    }
    return acc
});
console.log(result)

//b
let arr = [];
let result = 0;
const pages = 500;
for (let i = 0; i <= pages; i++){
  arr.push(i);
  str = arr[i].toString()
    for(k = 0; k < str.length;k++){
      result+=parseInt(str[k])
    }
}
console.log(result)

//----------------------------------
