// 1

// function reverseString() {
     // Получаем строку
//     var inputString = document.getElementById('inputString').value;

//     var result = inputString.split('').reverse().join('');
//     console.log (result);
// }


// 2

// function countVowels() {
    // Получаем значения
//     var word = document.getElementById('inputString').value;
     // Строка, содержащая все гласные буквы
//     var letters = "aeiouаеёиоуыэюяАЕЁИОУЫЭЮЯAEIOU";
//     var count=0;

    // Проверяем, является ли символ гласной буквой
//     for (let i=0; i < word.length; i++){
//         if (letters.indexOf(word[i]) !== -1){
//             count++;
//         }
//     }
//     alert (`Гласных букв: ${count}`);
//     }


// 3

// let numbers = [5, 8, 3, 12, 6];
// let numbers2 = [-5, 5, 8, 3, 12, 6, 1];

// let array = numbers.concat(numbers2);
// let max = array[0];

 // Находим максимальное значение в массиве
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//     }
// }
// console.log("Максимальное значение в массиве:", max);

//4
// let arr =  [5, 8, 3, 12, 6];
// function arraySum(array){
// let sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
//     }
// console.log(sum);
// }
// arraySum(arr);

// let arr2 =  [-5, 5, 8, 3, 12, 6, 1];
// function arraySum(array){
// let sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
//     }
// console.log(sum);
// }
// arraySum(arr2);


 //5
// const numbers = [5, 8, 3, 12, 6]; 


// let minimum = numbers[0];
// for (const item of numbers) {
//   if(item < minimum) {
//     minimum = item; 
//   }
// }
// console.log(minimum);
 

// const numbers2 = [-5, 5, 8, 3, 12, 6, 1];
// const min = (values) => values.reduce((x, y) => Math.min(x, y));
// console.log(min(numbers2)); 


// 6

 // Получаем значение счетчика из локального хранилища или 0, если оно отсутствует
// let visitCount = localStorage.getItem('visitCount') || 0;

 // Увеличиваем счетчик на 1
// visitCount++;
 // Сохраняем обновленное значение в локальном хранилище
// localStorage.setItem('visitCount', visitCount);

 // Получаем элемент, куда будем выводить счетчик    
// let countElem = document.getElementById('visitCount');
/// Обновляем значение элемента
// countElem.textContent = visitCount;


 // 7

// let numbers = [5, 8, 3, 12, 6];
// let numbers2 = [-5, 5, 8, 3, 12, 6, 1];
// let targetNumber = 12;

// Функция, которая принимает массив и целевое число, находит число в массиве и выводит его индекс
// function findNumberIndex(num, target) {
 // Находим индекс числа в массиве
//     let index = num.indexOf(target);
 // Проверяем, найдено ли число в массиве
//         if (index !== -1) {
//             console.log(`Число ${target} найдено в массиве. Индекс: ${index}.`);
//         } else {
//             console.log(`Число ${target} не найдено.`);
//         }
//     }
 // Выводим индекс заданного числа из 2 массива (можно numbers2 поменять на numbers и тогда найдем заданное число из 1 массива)
// findNumberIndex(numbers2, targetNumber);



// 8

// class User {
//     constructor(name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     getInfo() {
//         return `Имя: ${this.name}, Возраст: ${this.age}, Email: ${this.email}`;
//     }
// }

// Создаем объекты класса User 
// let user1 = new User("Виталия", 27, "semxy@mail.ru");
// let user2 = new User("Евгений", 30, "ev@mail.ru");

 // Выводим информацию о пользователях с помощью метода getInfo()
// console.log(user1.getInfo());
// console.log(user2.getInfo());