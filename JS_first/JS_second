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
