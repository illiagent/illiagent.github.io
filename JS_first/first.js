/* // ДЗ по JS  channnnggreeeeeee
var stringText = "eto text stroki";
alert(stringText);
stringText = 555;
alert(stringText);
//тип строка
var stroka = "eto stroka";
alert(stroka);
console.log(typeof(stroka));
//тип  числовой
var number = 5;
alert(number);
console.log(typeof(number));
//тип boolean
var bool = true;
alert(bool);
console.log(typeof(bool));
//тип объект
var mass = [1, 3, 7];
alert(mass);
console.log(typeof(mass));
//тип undefined
var a;
alert(typeof(a));
console.log(typeof(a));
//тип null
var nul = null;
alert(nul);
console.log(typeof(nul));
//возраст
// модификация кода final!
var age = prompt('Сколько Вам лет?');
while (isNaN(age) || (age <= 0)) {
    alert("Если Вы не робот, введите КОРРЕКТНЫЙ возраст!!!");
    age = prompt('Сколько Вам лет?');
}
alert("возраст принят");
if (age >= 18) { alert('Congratulations! Вы совершеннолетний!') } else { alert('Немедленно закройте эту вкладку, Вы недостаточно взрослый!') };
*/

//ДЗ 22_01_2020
var data = [
  {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age:40
  },
  {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age:54
  },
  {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age:24
  }
]
let b;
let name = prompt('Введите имя пользователя:');
name = name.toUpperCase(); 
if (name === '') {
    alert('строка пустая!');
    b = 2
}
for (var i=0; i < data.length; i++){
if (data[i].firstName.toUpperCase() === name){
    b = 1; console.log('yes');
    break
} else {
    console.log('no')
}
}
if (b === 1) {
    alert('approved  '+'name:'+ data[i].firstName + ' '+ data[i].lastName + '   age:'+data[i].age)
} else if (b === 2) {
    alert('Введите строку, отличную от пустой')
} else alert('Такого пользователя не существует')

