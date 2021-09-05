"use strict";

//const obj = new Object();  //один из вариантов создания объектов

//самый частый вариант создания объекта
const option = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(option.name);
console.log(option['name']); //реже используемый вариант нотации

//delete option.name; //удаление какого-либо свойства из объекта

console.log(option);  

//перебрать все элементы объекта
for (let key in option){
    console.log(`Свойство ${key} имеет значение ${option[key]}`);
}

//перебрать все элементы объекта
let counter = 0;
for (let key in option){
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]){
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`); 
            counter++;     
        }

    }else{
       console.log(`Свойство ${key} имеет значение ${option[key]}`); 
       counter++;
    }
}
//количество свойств в объекте
console.log(counter);

console.log(Object.keys(option));
console.log(Object.keys(option).length);

//добавим поведение для объекта
const option2 = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){  //метод объекта
        console.log("Yes!");  
    }
};

option2.makeTest();

//деструктуризация объекта (вытаскиваем нужные нам свойства)
const {border, bg} = option2.colors;
console.log(border);


/*Задание
Создайте объект game
в нем 7 свойств
и для одного из свойств - сделайте свойство в виде объект, состоящего из трех свойств
Добавьте два метода и вызовите их.
С помощью деструктуризации выведете два любых свойства в консоль
*/

