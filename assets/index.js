'use strict';
// 1) Для решения задач данного блока вам понадобятся следующие методы: concat.
//	Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatedArr = arr1.concat(arr2);

// 2) Работа с reverse
// Для решения задач данного блока вам понадобятся следующие методы: reverse.
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const arr_2 = [1, 2, 3];
arr_2.reverse();

// 3) Работа с push, unshift
// Для решения задач данного блока вам понадобятся следующие методы: push, unshift.
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);

// 4) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);

// 5) Работа с shift, pop
// Для решения задач данного блока вам понадобятся следующие методы: shift, pop.

const arr5 = ["js", "css", "jq"];
console.log(arr5.shift());

// 6) Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его

const arr6 = ["js", "css", "jq"];
console.log(arr6.pop());

/* Работа с slice
Для решения задач данного блока вам понадобятся следующие методы: slice 
7) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. */

const arr7 = [1, 2, 3, 4, 5];
const copyArr7 = arr7.slice(0, 3);

// 8) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const arr8 = [1, 2, 3, 4, 5];
const copyArr8 = arr8.slice(-2, 10);

/*Работа с splice
Для решения задач данного блока вам понадобятся следующие методы: splice.
9) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. */

const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);

// 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const arr10 = [1, 2, 3, 4, 5];
const modifiedArr10 = arr10.splice(1, 3);

// 11) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, "a", "b", "c");

// 12) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, "a", "b");
arr12.splice(6, 0, "c");
arr12.splice(8, 0, "e");

/* Работа с sort
Для решения задач данного блока вам понадобятся следующие методы: sort.
13)	 Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. */

const arr13 = [3, 4, 1, 2, 7];
arr13.sort(function (a, b) {
  return a - b;
});

/* Работа с forEach
Для решения задач данного блока вам понадобятся следующие методы: forEach
14)	Дан массив со следующими объектами внутри:  					
{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”  */

const arr14 = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  {
    firstName: "Test`ya",
    lastName: "Testovna",
    age: 16,
    gender: "female",
  },
  {
    firstName: "Logina",
    lastName: "Consol`evna",
    age: 42,
    gender: "female",
  },
];

const info = arr14.forEach (function (obj) {
  console.log(
    `Пользователь ${obj.firstName} ${obj.lastName} является ${obj.gender} и ему сейчас ${obj.age} лет`
  );
});


/* Работа с map
Для решения задач данного блока вам понадобятся следующие методы: map
15.	Дан массив со следующими объектами внутри:  
{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}		Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение). */

const arr15 = [
  { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
  { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
  { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
  { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
];

const addInfo = arr15.map (function (info, i) {
  return {
    firstName: info.firstName,
    lastName: info.lastName,
    age: info.age,
    gender: info.gender,
    telephoneNumber: info.telephoneNumber = 3802233445 + i,
  }
});

/*Работа с filter
Для решения задач данного блока вам понадобятся следующие методы: filter
16.	Дан массив со следующими объектами внутри:
{firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,},		{firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99},			
{firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’}				
Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.*/

const arr16 = [
  {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',}, 			{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
  {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',},		{firstName: 'Undefined', lastName: 'Undefinovich', age: 99},			
  {firstName: 'Null', lastName: 'Nullovich', gender: 'male',},
];

const adultSelect = arr16.filter (function (adult) {
  return adult.age >= 18;
});

const adultGenderSelect = adultSelect.filter (function (genderSelect) {
  return genderSelect.gender === 'male';
});

/*Работа с flat
Для решения задач данного блока вам понадобятся следующие методы: flat
17.	Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.*/

const arr17 = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];

const flatedArr = arr17.flat(Infinity);
