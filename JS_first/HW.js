//task_0: поиск по фамилии в массиве объектов
var data = [
   {
       firstName: 'Ashton',
       lastName: 'Kutcher',
       age: 40
   }, {
       firstName: 'Bradley',
       lastName: 'Pitt',
       age: 54
   }, {
       firstName: 'Hannah',
       lastName: 'Dakota',
       age: 24
   }
];
//запрашиваем ввод фамилии
let surname = prompt('введите фамилию');
//присваиваем переменной результата значение null
let result = null;
//проверка на пустую строку
if (surname) {
//перебираем элементы массива
for (var i = 0; i < data.length; i++){
  if (surname.toUpperCase()===data[i].lastName.toUpperCase()){
  result = data[i];
  break;
}  
}
//если отобранное из массива значение отличное от null,  то
  if (result !== null){
  console.log( пользователь найден : \n ${result.lastName} ${result.firstName} \n возраст ${result.age});
}else {
  console.log('такого пользователя нет в базе');
} 
} 
else {
  console.log('вы ввели пустую строку')
}
//-------------------------------------------------------


//task_1: проверка на палиндром
  //вариант 1
let word = prompt('please, enter the word');
let wordReverse = "";
wordReverse = word.split("").reverse().join("");
if (word === wordReverse) {
  console.log(это палиндром!)
} else {
  console.log('это обычное слово')
}
  //----------
  
  //вариант 2
let word = "шалаш";
let wordReverse = [];
for (i = 0; i < word.length; i++){
  wordReverse.unshift(word[i]);
}
let stringReverse = wordReverse.join("");
if (word === stringReverse) {
  console.log(это палиндром!)
} else {
  console.log('это обычное слово')
}
  //----------
//-------------------------------------------------------


//task_2: уникальные радомные числа в массиве (упорядоченные)

const arr = [];
var randomNumber;
while (arr.length <= 7){
randomNumb = Math.floor(Math.random()*10);
//проверка рандомного числа в массиве
if (arr.indexOf(randomNumb)== -1){
  arr.push(randomNumb)
}
}
console.log(arr);
arr.sort();
console.log(arr);
//-------------------------------------------------------


//task_3: изменение "0" на "zero" в массиве

const arr = [];
var arrZero = [];
var stringZero = "";
var randomNumber;
var result = [];
while (arr.length <= 10){
  randomNumb = Math.floor(Math.random()*100);
  arr.push(randomNumb)
}
console.log(arr);
arrZero = arr.join(" ");
for (var i = 0; i < arrZero.length; i++){
if (arrZero[i] === "0"){
  stringZero += "zero" 
} else {
  stringZero += arrZero[i];
}
}
//-------------------------------------------------------
result = stringZero.split("  ");

console.log(result);
