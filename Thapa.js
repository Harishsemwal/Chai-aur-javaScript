// var myName = 'Harish Prasad Semwal';
// console.log(myName);
 
// var myName = "Harish Prasad Semwal";
// console.log(myName);
// var myAge = 21;
// console.log(myAge);

// var $age = 16;
// var age = 15;
// right ||

// var 15a wrong
// var _myage = "Rohan";
// console.log(_myage);

//no lenght limit for variable lenght.....

// DataTypes in JavaScript

// 1- undefined
// 2- Boolean
// 3- Number
// 4- String
// 5- Symbol
// 6- BigInt

// var myName = "Harish Semwal";
// console.log(typeof(myName));    // string

// var number = 451;
// console.log(typeof(number));

// var iamHarish = true;
// console.log(iamHarish);

// var notdefined = null
// console.log(notdefined);
// console.log(typeof(notdefined));   //object //bug how null value will be object

// console.log(4 + "20");
// console.log(40 - "20");         //bug
// console.log("Java" + "Script");

// console.log(true + false);
// console.log(true - false);
// console.log(false - false);

// var value;
// console.log(typeof(value));     //undefined

//NaN : NaN is property of the global object. In Other words, it is a variable in global scope. the initial value of NaN is not a number...

// var isnumber = 5864;
// var isstring = "Harish";
// console.log(isNaN(isnumber));   // false
// console.log(isNaN(isstring));   // true

// NaN Practice :

// if(isNaN(isstring)){
//     console.log("Please enter valid contact number...");
// }

// challange

// console.log(NaN === NaN);
// console.log(Number.Nan === NaN);

// console.log(isNaN(NaN === NaN));
// console.log(isNaN(Number.NaN === NaN));

// Operators: 

// 1-Assignment Operator =

// int a = 4;
// int b = 8;
// console.log(`is Both value is not same...:  ${a = b}`);
// console.log("is Both value is same...: "+ a == b);

// 2- Airthmatic Operator

// console.log(4 + 1);
// console.log(6 - 5);
// console.log(2 * 5);
// console.log(7 / 2);
//console.log(80 % 8);

// Increment & Decrement Operator: 
// X++, ++X, X--, --X;

// Comparison Operator
// Comparison Operator
// Logical Operator

//String Operator
// console.log("Hello" + "World");

// console.log(3**3);    // pow function...

// swap two number without using thrid variable...
// int a = a + b;
// int b = b - a;
// a = a - b;

// diff B/W (== || ===)
// var a = 5;
// var b = '5';
// console.log(a == b); var & var : true
// console.log(a === b); number & string : false

// If / Else

// Year is Leap Year or not...

// 2 : 24 : 56 Timeing....

// Ternary Operator...: it takes 3 Operands...

// Loop
// 1->While Loop
// var num = 10;
// while(num--){
//     console.log("Jay Bajrang Bali...");
// }

// var num = 5;
// for(var i = 0; i < 5; i++){
//     console.log("Jay Boliyaraja...");
// }

// do{
//     console.log("Jay Bajrang Bali....");
// }while(num-- > 5);

// print the table using for loop

// Functions

// function sum(){
//     var a = 40, b = 80;
//     var total = a + b;
//     console.log(total);
// }
// sum();

// Function Parameter vs Function arrgument

// function sum(a, b)
// {
//     var total = a + b;
//     console.log(total);
// }
// sum(10,54);

// function sum(a, b){
//     var total = a + b; 
//     return total;
// }
// var ans  = sum(1, 5);
// console.log("the answer is: "+ans);

// Anonymous function:

// var ans = function(a, b){
//     return a+b;
// }
// console.log(ans(4,6));
// console.log(ans); <-----


// EcmaScritp 

// 1996 -> JavaScript
// 1997 -> EcmaScript ---> EcmaInternational
// add feature in EcmaScript then its called EcmaScript 2015(ES6), 2014.

// 2015 EcmaScript Feature:
// let and Const
// Distructing



// let vs const vs var:

// let myName = "Harish Semwal";
// console.log(myName);
// myName = "CoderDude";
// console.log(myName);


// var myName = "Harish Semwal";
// console.log(myName);
// myName = "CoderDude";
// console.log(myName);


// const myName = "Harish Semwal";
// console.log(myName);
// myName = "CoderDude";
// console.log(myName);

// const can not change...

// var: Function scope
// let & const : Block scope

// Function Scope

// function biodata(){
//     var myname = "Harish";
//     if(true){
//         var myrule = "Semwal";
//     }
//     console.log(myrule);
// }
// biodata();


// Template Literals (template strings)
// for(let i = 0; i <= 10; i++){
//     console.log(`${num} * ${i}  = ${num * i}` );
// }


// default Parameter
// function mult(a, b = 6){
//     return a * b;
// }
// console.log(mult(3));


// Fat Arrow Function
// const sum = () => {
//     let a = 5;
//     let b = 6;
//     let sum = a + b;
//     return `the sum is: ${sum}`;
// }
// console.log(sum());

// const sum = () => `the sum is: ${(a = 5) + (b = 3)}`;
// console.log(sum());

// Arrays in JavaScript---------------------------------->

// var myFriends = ['Harish', 'Prasad', 'Semwal','Ajay','Rohan'];
// var companies = ['Microsoft', 'TCS', 'HSBC', 'Cognigant'];
// var school = ["SGRR", "SNM", "DVP", "DPS", "ICSNA"];
// let falsetrue = [45, false, true, 43,'*'];

// console.log("names: ");
// for(let a = 0; a < myFriends.length; a++){
//     console.log(myFriends[a]);
// }

// console.log("company: ");
// for(let a = 0; a < companies.length; a++){
//     console.log(companies[a]);
// }

// console.log("Schools: ");
// for(let a = 0; a < school.length; a++){
//     console.log(school[a]);
// }

// console.log("Bakwass: ");
// for(let a = 0; a < falsetrue.length; a++){
//     console.log(falsetrue[a]);
// }

// #) -> Here 0 base indexing is allowed 

// for in Loop -------------------------------> ES6
// for of Loop -------------------------------> ES6

// 1-> for in Loop : provide index of filled element.

// for(let elements in companies){
//     console.log(elements);
// } //in means : index

// // 2-> for of loop: provide value in sort way

// for(let element of companies){
//     console.log(element);
// } // of means: value


// for Each Loop ----------------------------------->

// myFriends.forEach(function(element, index, array){
//     console.log(element);
// });

// companies.forEach(function(element, index, array){
//         console.log(element);
//     }
// );
// school.forEach(function(element, index, array){
//     console.log(element + " index " + index);
// });

// # we can not use break keyword in forEach Loop

// Using FatArrow Function
// school.forEach((Element, index, array) =>{
//     console.log(Element);
// });

// Searching and Filter in an  array ---------------------->

// Array.prototype.indexof() ->

// var myFriends = ['Harish', 'Prasad', 'Semwal','Ajay','Rohan'];
// console.log(myFriends.indexOf('0')); -> X

// 4:56:00 - 5:25:00 ----> DeadState....

// How to insert, add, delete , element in array --->>

// Array Subsection->: Perform CURD

// const animals = ['Pigs', 'goats', 'Sheep'];

// Push() -> : add element in end of the array.

// animals.push('Hen');
// console.log(animals);

// unshift() -> : add element in beginning of the array and return of the 
// new lenght of the array

// const count = animals.unshift('Dog');
// console.log(animals);
// console.log(animals.length); 
// count.log(count);

// animals.unshift('chiken', 'cat', 'Tiger');
// console.log(animals);

// 2nd Example -> :

// const myNumber = [1,2,3,5];
// console.log(myNumber.unshift(4,6)); // it return length...
// console.log(myNumber);

// pop() ->: remove the last element from an array and return that element..
// this method change the length of the original array...

// const plants = ['Flower', 'GreenVeg', 'Couliflower', 'tomoto'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);


// shift() -> remove the element from the front of the Array
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


// challenge Time: 

// const myNumber = [1,2,3,5];
// Only One method to perform Push(), pop():  

// 1: add dec at the end of the array
// 2: what is the return value of splice method. 
// 3: update march to march (update). 
// 4: delete June from an array. 

// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const newmonth1 = months.splice(4,0,"Dec");
// console.log(months);

// const newmonth2 = months.splice(months.length, 2, "Dec");
// console.log(months);
// console.log(newmonth2);

// const update = months.splice(1, 1, 'March');
// console.log(months);

// const indexofMonth = months.indexOf('June');
// if(indexofMonth != -1){
//     months.splice(indexofMonth, 1, 'june');
// }else{
//     console.log("not Found....");
// }
// console.log(months);

// Map(), Reduce(), Filter() method() 



// Map() : 
// return a new array containg the result of the function on every element 
// in this array 
// const array1 = [1, 2, 3, 7, 8];
// // num > 5;
// let newArray = array1.map((currentElement, index, arr) =>{
//     return currentElement > 3;
// })
// console.log(array1);
// console.log(newArray);

 

// const array1 = [1, 2, 3, 7, 8];
// let newarr  = array1.map((currentElement, index, arr) => {
//     return `Index no = ${index} and the value is ${currentElement} belong to ${arr}`
// })
// console.log(newarr); // it return the array

// // here the difference between the foreach and map method.

// let newarrs  = array1.forEach((currentElement, index, arr) => {
//     return `Index no = ${index} and the value is ${currentElement} belong to ${arr}`    
// })
// console.log(newarrs);  // it return undefinded...

// 1 - > map method have ability to change in map method but in foreach it can not use 




// # ->: Find the Square root of each element in an array: 
// # ->: Multiplay each element by 2 and return only those element which are greater then 10 ?.

// let nums = [2, 3, 4, 6, 8];

// # -> Square Root -> : 

// let nums = [2, 3, 4, 6, 8]; 
// let arrSquare = nums.map((num) => {
//     return `the square root of ${num} is : ${Math.sqrt(num)}`
// })
// console.log(nums);
// console.log(arrSquare); 

// # -> Multiplication: 

// let element = nums.map((num) => {
//     return num * 2;
// }).filter((num) =>{
//     return num > 10;
// })
// console.log(element);

// oneline code: 
// let element = nums.map((num) => num * 2 ).filter((num) => num > 10 );
// console.log(element) 



// # - Reduce Method -> : 
// flattan an array means to convert the 3rd or 2nd array into a single diamentional array

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value. 

// The reducer Function Takes Four arrgument: 
// Accumulator
// Current value
// Current Index
// Source Array

// let nums = [5, 7, 9, 6];
// let sum = nums.reduce((accumulator, num, index, arr) => {
//     debugger;
//     return accumulator += num;
// })
// console.log(sum);

// let element = nums.map((num) => {
//     return num * 2;
// }).filter((num) =>{
//     return num > 10;
// }).reduce((accum, num, index, arr) => {
//     return accum += num;
// })
// console.log(element);


// let number = 4;
// let nums = [7, 9, 6, 2];
// let ans = nums.reduce((accum, num) => {
//     return accum += num;
// }, number);
// console.log(ans);


// How to Flatten array
// convert 2D and 3D array into single diamentional array.

// const arr = [
//     ['zone1', 'zone2'],
//     ['zone3', 'zone4'],
//     ['zone5', 'zone6'],
//     ['zone7', 'zone8'],
//     ['zone9', 'zone10']
// ];

// let flatarray = arr.reduce((accum, element, ) =>{
//     return  accum.concat(element);
// })
// console.log(flatarray);


// const arr1 = [
//     ['zone1', 'zone2'],
//     ['zone3', 'zone4'],
//     ['zone5', 'zone6'],
//     ['zone7', 'zone8'],
//     ['zone9', ['zone10', 'zone11']]
// ];

// let flatarray1 = arr1.reduce((accum, element) =>{
//     return  accum.concat(element);
// })
// console.log(flatarray1); // not make flatarray1.


// Strings in JavaScript : 

// # Escape Chrachter.
// # Finding a string in a String.
// # Searching a string in a String.
// # Extracting String Parts
// # Replacing String Content.
// # Extracting String Character.
// # Other Usefull Method.


// # Escape Chrachter.
// JavaScript string is zero or more characters written inside qoutes. 
// JavaScript string are used for storeing and manipulating Text. 
// you can use single and double qoutes. 
// string can be created as primitives. 
// from string literals, or as object, using the String() constructor. 

// let myName = "Harish Semwal";
// let mychennelName = 'GlobalWander360'

// let ytname = new String("GlobalWander360"); // do not use use direct way
// let ytname = "GlobalWander360" use this....
// console.log(myName);
// console.log(mychennelName);
// console.log(ytname); // do not use




// # How to find the length of the String
// String.prototype.length 
// Reflect the length of the string 
// let myName = "Harish Semwal";
// console.log(myName.length)



// // # Escape Character 
// let anySentences = "We are \"Hiring\" a Software Engineer";
// console.log(anySentences);
// // if you want to miss, simply use the altrnate qoutes
// let anySentences = 'We are "Hiring" a Software Engineer';
// console.log(anySentences);
// let anySentences = "We are 'Hiring' a Software Engineer";
// console.log(anySentences);


// Finding the string in string
// String.prototype.indexOf(SearchValue, [, fromIndex])
// the indexOf() Method return the index of ( the position of ) the first occurrence of a specified text in a String

// const myBioData = 'I am Harish Semwal';
// console.log(myBioData.indexOf("Semwal"));
// console.log(myBioData.indexOf('a', 7));

// console.log(myBioData.lastIndexOf('a', 3));


// Searching for an string in a string
// String.prototype.search(ragexp);
// The search method searches a string for a specified
// value and  returns the postion of the match

// const myBioData = "I am Harish Semwal";
// let searchData = myBioData.search("Semwal");
// console.log(searchData);
//there is not any index to search anything....



// # Extracting string parts
// There are three methods for extracting a part from substring

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 
// Slice() Method extract the part of string and returns the extracted part in new string 

// The Method Takes Two methods

// var str = "Apple, Banana, Kiwi";
// let res =  str.slice(0, 4);
// let ans = str.slice(7, -2); // Banana ki
// let an = str.slice(7); // Complete start from 7
// console.log(res);

// The slice() Method selects the elements starting at the given argument, and ends at, but not include the given end argument.Method

// Note: The Original Array will not change...months


// #----------------------Challenge Time------------------------------#

// Display Only 280 characters of a string like the one used in Twitter...
// let myTwitte = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A eveniet ullam quis eligendi ut. Error quaerat laborum non esse ad mollitia sunt possimus minus consequuntur deleniti asperiores."
// let ActualText = myTwitte.slice(0, 280);
// console.log(ActualText);






// ------------------Substring-------------------------


// The substring() method
// substring() is similar to slice()
// the difference is that substring() can not accept negative indexes.

// var str = "Apple, Banana, Mango";
// let ans = str.substring(0, 4);
// console.log(ans);
// 7:13:00

// if we give negative value then the charcter is count from 0th postion


// #----------------------------------------------------------------# 
// The substr() Method 
// substr() is similar to slice() 
// The diff is that the second parameter spacifies the length of the extracted part.

// var str = "Apple, Banana, Mango";
// let ans = str.substr(3, -2);
// let rev = str.substr(-3);
// console.log(ans);
// console.log(rev);

// #----------------------------------------------------------------------# 

// Replacing String Content()

// String.prototype.replace(searchFor, replaceWith)
// The replace() Method replace a spacified value with another value in string. 

// let myBioData = `I am Harish Prasad Semwal foused on Data Structure`
// let replaceData = myBioData.replace('Data Structure', 'DS');
// console.log(replaceData);

// Points to remember
// 1 -> The replace method does not change the string it is called on. it returns a new string.
// 2 -> by default, the replace method replaces only the first match.
// 3 -> by default, the replace() method is case sensitive.
// Writing VINOD (with upper-case ) will not work. 


// #--------------------------------------------------------------------# 
// Extracting String Character ->-> 

// There are 3 method for extracting string charchters

// charAt(position)
// charCodeAt(position)
// Property Access [ ]


// The charAt Method :-> 
// The charAt Method returns the charcter at spacified index (position) in a string

// let str = "HELLO WORLD"
// console.log(str.charAt(0));



// #--------------------------------Challenge Time-------------------------#

// Q-> Return the Unicode of the last character in a string. 

// let str = "HELLO WORLD";
// console.log(str);
// let len = str.length;
// console.log(str[len-1]);
// console.log(str.charCodeAt(len-1));


// Property Access:
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "Hello, World";
// console.log(str[0]);

// // Other usefull Methods
// let myName = "Harish Semwal";
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());

// let name1 = "Harish";
// let name2 = "Semwal";

// console.log(name1.concat(name2));
// console.log(name1.concat(" ", name2));
// console.log(name1 + name2);
// console.log(`${name1} ${name2}`);



// #-----------------------------------------------------------------------# 
// String.trim()
// The trim() method method removes whitespace from both sides of a string

// let name = "              Hello     World !                 ";
// console.log(name.trim());


// Converting String into an array :->->-> 
// A string can be converted to an array with the split() method.

// var txt = "a, b, c, d, e"; // String
// console.log(txt.split(","));        //Split on Commans
// console.log(txt.split(" "));        //Split on Spaces
// console.log(txt.split("|"));        //Split on pipe





//#-------------------Date & Time in JavaScript--------------------------

// Date Methods:
// Time Methods:

// JavaScript Date objects represent a single moment in time in a platform-independent Format. date contain a number that reprasent milliseconds since 1 January 1970 UTC. 

// Creating Date Objects: 
// There are 4 ways to create a new date Objects: 

// new Date() new Date(year, month, day, hours, minutes, seconds, milliseconds)

// // it takes 7 arrguments
// new Date(milliseconds)

// // we can not avoid month section
// new Date(date string)

//  new Date()
//  Date object are created with the new Date Constructor()


// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());

// console.log(new Date().toLocaleString()); // 9/11/2019, 1:25:01 PM
// console.log(new Date.toString()); // Wed Sep 11 2019  13:25:01 GMT+7030
// // GMT: Greenwich Mean Time

// Date.now()
// returns the numeric value corresponding to the current time-the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC 
// console.log(Date.now());


// Gyan: AM-> Ante Meridiem, PM-> Post Meridiem


// new Date(year, months, .....)
// 7 number Specify year, month, day, hour, minute, seconds, milliseconds (in that order)
// Note: JavaScript Counts month from 0 to 11 
// January is 0. December is 11.

// var d = new Date(2024, 11, 24, 10, 33, 30, 0);
// console.log(d.toLocaleDateString());

// new Date(dateString);
// new Date(dateString) creates a new date object from a date string


// new Date(dateString)
// new Date(dateString) create new date object from a date String

// let d = new Date("October 13, 2023 11:13:00");
// console.log(d.toLocaleDateString());


// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds


// let d = new Date(0);
// var d = new Date(1609578664863);
// var d = new Date(8600000*2);
// console.log(d.toLocaleDateString());



// Dates Methods: ->: 

// const currDate = new Date();


// //how to get the individual date
// console.log(currDate.toLocaleTimeString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth()); // 0 - 11 jan to dec
// console.log(currDate.getDate());
// console.log(currDate.getDay());


// 8:00:00