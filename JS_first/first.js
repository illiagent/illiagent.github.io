// ДЗ по JS
var stringText = "eto text stroki";
alert(stringText);
stringText = 555;
alert(stringText);

var stroka = "eto stroka";
alert(stroka);
console.log(typeof(stroka));


var number = 5;
alert(number);
console.log(typeof(number));

var bool = true;
alert(bool);
console.log(typeof(bool));


var mass = [1, 3, 7];
alert(mass);
console.log(typeof(mass));

var a;
alert(typeof(a));
console.log(typeof(a));


var nul = null;
alert(nul);
console.log(typeof(nul));






// модификация кода final!
var age = prompt('Сколько Вам лет?');
while (isNaN(age) || (age<=0)){
    alert(  "Если Вы не робот, введите КОРРЕКТНЫЙ возраст!!!");
age = prompt('Сколько Вам лет?'); 

 }
    alert( "возраст принят");
if (age >= 18) {alert( 'Congratulations! Вы совершеннолетний!' )} else {alert('Немедленно закройте эту вкладку, Вы недостаточно взрослый!')};



