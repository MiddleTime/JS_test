"use strict";

//https://jsonplaceholder.typicode.com/  - для тестирования 

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

  