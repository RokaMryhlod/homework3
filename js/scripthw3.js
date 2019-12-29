// 1. Написати функцію, яка буде приймати як параметр 2 числа. Порівняти ці числа і вивести в консоль більше.

// function comparenum(num1, num2){
// 	if(num2>num1){
// 		console.log(num2);
// 	}
// 	else {
// 		console.log(num1);
// 	}
// }
// comparenum(3, 4);



// 2. Написати функцію, яка приймає параметром число і визначає його парність чи непарність.

// function iseval(num){
// 	if(num%2 === 0){
// 		console.log("eval");
// 	}
// 	else("not eval");
// }
// iseval(42);



// 3. Написати функцію, яка приймає параметром число. В залежності від числа зробити наступне: 
// Якщо число  5 виводимо ‘Tiny’
// Якщо число 10 виводимо ‘Small’
// Якщо число  15 виводимо ‘Medium’
// Якщо число  20 виводимо ‘Large’
// Якщо число 30 виводимо ‘Huge’
// Зробити через Switch case


// function dimensions(num1){
// 	switch(num1){
// 	case 5:
// 	  console.log("Tiny");
// 	  break;
// 	case 10:
// 	  console.log("Small");
// 	  break;
// 	case 15:
// 	  console.log("Medium");
// 	  break;
// 	case 20:
// 	  console.log("Large");
// 	  break;
// 	case 30:
// 	  console.log("Huge");
// 	  break;
// 	default:
// 	  console.log("default");
// }}

// dimensions(30);


// 4. Напишіть функцію, яка приймає параметром букву. Пізніше переведіть бали з буквенного представлення в цифрове за допомогою Switch case. Наприклад, якщо студент отримав бал А, то виводимо ‘Ваш бал більше 90’ Умова
// Якщо бал = “A” виводимо ‘Ваш бал більше 90’
// Якщо бал = “B” виводимо ‘Ваш бал більше 80’
// Якщо бал = “C” виводимо ‘Ваш бал більше 70’
// Якщо бал = “D” виводимо ‘Ваш бал більше 65’
// Якщо жодна умова не справдилась (в іншому випадку) виводимо “Незадовільно”


// function mark(mark1){
// 	switch(mark1){
// 	case "A":
// 	  console.log("Ваш бал більше 90");
// 	  break;
// 	case "B":
// 	  console.log("Ваш бал більше 80");
// 	  break;
// 	case "C":
// 	  console.log("Ваш бал більше 70");
// 	  break;
// 	case "D":
// 	  console.log("Ваш бал більше 65");
// 	  break;	
// 	default:
// 	  console.log("Незадовільно");
// }}

// mark("A");


// 5. Написати функцію, яка приймає параметром ім’я і за допомогою Switch case виводить в консоль наступне
// Якщо ім’я дорівнює Назар або Андрій або Сергій, виводимо “чоловіче ім’я”
// Якщо ім’я дорівнює Настя або Оля або Юля, виводимо “жіноче ім’я”
// Якщо умова не справдилась, то виводимо “Такого імені не знаю”

// function humanname(name){
// 	switch(name){
// 	case "Назар":
// 	case "Андрій":
// 	case "Сергій":
// 	  console.log("чоловіче ім’я");
// 	  break;
// 	case "Настя":
// 	case "Оля":
// 	case "Юля":
// 	  console.log("жіноче ім’я");
// 	  break;	
// 	default:
// 	  console.log("Такого імені не знаю");
// }}

// humanname("Оля");




// 6. Написати функцію, яка за допомогою циклу for виводить в консоль всі числа  в проміжку від 10 до 20; 

// function num1(a, b){
// for(i = a; i <= b; i++){
// 	console.log(i);
// }
// }

// num1(10, 20);


// 7. В діапазоні від 1 до 50 вивести всі числа кратні 3 за допомогою while i for. 


// for(let i= 1; i <= 50; i++){
// if(i%3===0){
//   console.log(i);
// }}

// за допомогою while:

// let i = 1;
//   while(i < 50){
//   i++
//      if(i%3===0){
//         console.log(i);
//      }
//   }



// 8.  ********* Написати функцію, яка за допомогою циклу for виводить в консоль
//  всі парні числа в проміжку від 1 до 20, а після того всі непарні числа на тому ж проміжку;


// function eval2 (a, b){
// 	let par = " ";
// 	let nepar = " ";
// 	for (i = a; i <= b; i++){
// 		if(i%2 === 0){
// 			par += i + ", ";
// 		}
// 		else if (i%2 === 1){
// 			nepar += i + ", ";
// 		}	

// 	}
// 	console.log(par);
// 	console.log(nepar);
// }
// eval2 (1, 20);



// 9. ******* Написати функцію, яка приймає стрічку і виводить довжину цієї стрічки.

// function checklength(str){
// 	let n = str.length;
// 	console.log(n);
// } 
// checklength("roka");


// 10. ********** Написати функцію, яка приймає 2 стрічки і виводить true, 
// якщо довжини стічок рівні або false в іншому випадку.


// function equals(str1, str2){

// if (str1.length === str2.length) {
// 	console.log(0<1); // or console.log("true");
// }
// else{
// 	console.log(0>1); // or console.log("false");
// }
// }
// equals("mama", "tato");  


// 11. ****** Написати функцію, яка виведе в консоль суму всі чисел на проміжку від 0 до 20

// function addnumbers(num){
//    let sum = 0;
//    for(let i = 0; i < num; i++){
// 	 sum += i;
//    }
//  console.log(sum);
// }

// addnumbers(20);


// 12. *********  Нехай функція приймає 2 параметри ( число і 1 букву!) 
// і виводить в консоль кількість цих букв, яка відповідає значенню числа. 
// наприклад func(3,”a”) виведе “aaa”, func(4, ‘b’) виведе “bbbb”

// function bbbb(num, letter){
// let res = " ";
// 	for(i = 0; i <= num; i++){
// 	res += letter;	
// }
// console.log(res);
// }
// bbbb(5, "c");



// 13. Написати функцію, яка приймає два параметри: проміжок на якому буде працювати цикл. 
// Приклад:	function test(start, end, step) {	тут цикл	}

// 13.1 Третім параметром вам треба передати крок з яким ми будемо виводити значення в консоль.
//  Наприклад: test(10, 20, 2). Значить ми маємо отримати в консолі 10, 12, 14, 16, 18, 20;


// function test(start, end, step) {
//   for (i = start; i <= end; i += step){
// 	console.log(i);
//    }
// }

// test(1, 20, 3);

// 13.0
 // Вам треба вивести в консоль значення з даного проміжку. Наприклад, test(10, 20).
//  Отже в консолі ми маємо побачити 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.

// function test2(start, end){
// 	for (i = start; i <= end; i++){
// 	console.log(i);
//    }
// }
// test2(10, 20);


// 14. Написати функцію, яка приймає стрічку і за допомогою циклу for 
// виводить кожну букву в консоль.

// function test3(str1){
// 	for (i = 0; i <= str1.length-1; i++){
// 	  console.log(str1[i]);
//     }
// }
// test3("this is from matilda!");


// 14.1 Ускладнена умова. Функція приймає другим параметром Boolean(true/false). Якщо другий параметр true,
//  то треба зробити перевірку. Якщо в згаданій стрічці є хоча би одна буква ‘a’, то ми виходимо з циклу.
// to be cont : https://docs.google.com/document/d/15fCRVoclCImf3ffw7L2qje813N0fwXxH/edit

// 16.  ************8 Напишіть функцію, яка просить користувача ввести довільне позитивне число і виведіть в консоль таблицю множення з цим числом. Наприклад:
// Я ввів 5, а значить в консолі маю побачити наступне:
// 1 * 5 = 5;
// 2 * 5 = 10;
// 3 * 5 = 15;
// І так до 10. 


// let a = prompt("enter any number");
// function powertable(a){

// 		for (var i = 0; i < 10; i++) {
// 		 console.log( a + " * " + i + " = "  + a * i);

// 		}
// }
// powertable(a);

// Наступною умовою буде попросити користувача ввести число до якого би він хотів бачити цю таблицю множення.


// let a = +prompt("enter any number");
// let end = +prompt("enter any second number");
// i = 0;
// // let result = a * i;
// function powertable(a, end){
//         for (var i = 0; i < 10; i++) {
//         	do{
// 			   result = i * a; 		       
// 		    }
// 		    while(result >= end)
// 		 console.log( a + " * " + i + " = " + result);

// 		}
// }
// powertable(a, end);

// 17. Напишіть функцію, яка буде просити користувача ввести довільні числа, а також значення 
// (odd or even). Вам потрібно визначити в залежності від того що ввів користувач (odd or even)
//  всі парні або непарні числа, а також порахувати суму парних або непраних. 
//  В результаті вивести це в консоль наступним чином:
// Нехай я ввів 123456, а потім odd. В консолі маю побачити
// 1. Непарні — 1, 3, 5
// 2. Сума непарних — 9.
// Добре би було використати 2 функції. Перша має питати користувача числа і визначати парні 
// чи непрарні, а друга має рахувати їхню суму.



// Добре би було використати 2 функції. Перша має питати користувача числа і визначати парні 
// чи непрарні, а друга має рахувати їхню суму.

// let a = prompt("enter any numbers");
// let b = prompt("enter odd or even");
// let par = "";
// let nepar = "";
// function oddnum(a, b){
// 	for (var i = 0; i <= a.length-1; i++) {	
// 		if (i%2 === 0) { 
// 			par += a[i] + ",";
// 		}
// 		else if (i%2 === 1){
// 			nepar += a[i] + ",";
// 		}

		
// 		}	
// 		if(b === "even"){
// 			console.log("1. парні —" + par);
// 		}
// 		else if (b === "odd"){
// 			console.log("1. непарні —" + nepar);
// 		}	
// 	}



// function sum_digits_from_string(dstr) {
//   var dsum = 0;

//   for (var i = 0; i < dstr.length; i++)
//   {

//     if (/[0-9]/.test(dstr[i])) dsum += parseInt(dstr[i])
//   }
//   return dsum;
// }

// oddnum(a, b);
// console.log("сума парних " + sum_digits_from_string(par));
// console.log("сума непарних " + sum_digits_from_string(nepar));






// 18. *********** Напишіть функцію, яка буде приймати 2 параметри: стрінг і число(індекс).
//  Потрібно вибирати зі стрінги вказані символи. Наприклад:
// перший параметр = “Hello world”, а другий 4
// В консолі маємо побачити “Hell”. Якщо другого параметру нема, тоді виводимо весь стрінг

// let str = prompt("enter the word"); 
// let num = prompt("enter the num"); 
// function myFunction(word, num) {

//   let res = str.slice(0, num);
//   console.log(res);
//   if (num === null){
//   	console.log(str);
//   }
// }
// myFunction(str, num);


// 19. ************ Написати функцію, яка прийматиме стірнг у формі імені і прізвища. 
// Наприклад “John Doe”. Функція повинна вивести скорочену форму - ‘John D.’. 
// Якщо ввели тільки 1 слово, то виводимо в консоль, що прізвище не вказано.

// let str = prompt("enter name "); 
// let str2 = prompt("enter 2nd name "); 

// function myFunction(str, str2) {	
// 	if (str2 === null){
// 	  	console.log("прізвище не вказано");
// 	 }
// 	else{
// 		console.log(str, str2.slice(0, 1));
// 	}
// } 
// myFunction(str, str2);


// 20. ************* Напишіть функцію, яка прийматиме стрінг і перетворюватиме перший 
// символ у велику літеру. Наприклад, “hello world” -> “Hello world”

// let str = prompt("hello world"); 
// alert("check console");

// function mif(str){
// 	console.log(str.slice(0, 1).toUpperCase() + str.substr(1, str.length-1));
// }
// mif(str);


// 21. ********** Написати функцію, яка приймає стрінг і число. Функція має конкатинувати стрінг в залежності 
// від другого параметру. Наприклад:
// перший параметр1 = “Hello”, другий — 3. 
// В консолі ми маємо побачити “HelloHelloHello”.

// let str = "hello";
// let num12 = 3;

// function conct(str, num){
// 	let result = "";
// 	for (let i = 0; i < num12; i++) {
// 		result = result + str;
// 	}
// 	console.log(result);
// }

// conct(str, num12);


// 22. **************** Написати функцію, яка прийматиме параметром стрінг з чисел і виводитиме його 
// з коректним суфіксом. Якщо стірнг закінчується на 1st, 2nd, 3rd або 4,5,6,7,8,9th.
// Приклад: “301” -> “301st”, “502” -> “502nd”, “603” -> “603rd”, “704” -> “704th” , 
// “705” -> “705th, “706” -> “706th”, “707” -> “707th”, “8” -> “8th”, “9” -> “9th”.

// check last letter 

// let str = "50260"
// function su(srt){
// let a = str.slice(-1);
// switch (a) {
// 	case "1":
// 	console.log( str + 'st');
// 	break;
// 	case "2":
// 	console.log( str + 'nd');
// 	break;
// 	case "3":
// 	console.log( str + 'rd');
// 	break;
// 	default:
// 	console.log( str + 'th');
// }}

// su(str);



// 23.  ********Написати функцію, яка буде приймати 2 параметри(стрінг). 
// Функція має порівняти чи значення тих параметрів рівні незалежно від регістру. 
// Наприклад, “QwerTY” i “qwerty” -> true
// “QwerTy” i “aSDWERT” -> false.

// function comp(a, b){
// 	a = a.toUpperCase();
//  b = b.toUpperCase();
//  console.log(a === b);

// }

// comp("QwerTY", "qwerty")

