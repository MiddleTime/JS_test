"use strict";

//методы перебора массивов

//filter

const names =['Vasya', 'Voldemart', 'Igor', 'Ksenia'];

// const shotNames = names.filter(name=>{
//     return name.length <= 5;
// })


//const shotNames = names.filter(name=> name.length <= 5); //короткий вариант

console.log(shotNames);

//map

const answers = ['IvAn', 'AnnA', 'HeLlo'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

//без создания нового массива
let answers = ['IvAn', 'AnnA', 'HeLlo'];

answers = answers.map(item => item.toLowerCase());

console.log(answers);

//some  every
const some = [5, 'one', 'get', 'aswefw'];
console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

//reduce
const arr3 = [5, 7, 4, 8, 11];
const res = arr3.reduce((sum, current) => sum + current);
console.log(res);

const arr4 = ['apple', 'google', 'facebook', 'youtube'];
//const res2 = arr4.reduce((sum, current) => sum + ', ' + current); //старый способ
const res2 = arr4.reduce((sum, current) => `${sum},  ${current}`);  
console.log(res2);
const res3 = arr4.reduce((sum, current) => `${sum},  ${current}`, 'VK');  //пример с начальным значением
console.log(res3);

//entries
const myObj = {
    john: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr2 = Object.entries(myObj);
console.log(newArr2);

//получаем только элементы person
const newArr3 = Object.entries(myObj)
.filter(item => item[1] === 'person');
console.log(newArr3);

//получаем только имена
const newArr4 = Object.entries(myObj)
.filter(item => item[1] === 'person')
.map(item => item[0]);
console.log(newArr4);