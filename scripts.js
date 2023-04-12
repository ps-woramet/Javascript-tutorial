// JS สามารถจัดการกับเหตุการณ์ที่เกิดขึ้นบนหน้าเว็บ
// การส่งข้อมูลผ่านแบบอัพเดตแล้วไม่ต้องรีโหลดหน้าเว็บ (AJAX), การให้ผู้ใช้กรอกข้อมูลเข้ามาในฟอร์ม, การทำการตรวจสอบและตรวจสอบข้อมูล, และอื่น ๆ
// การทำงานกับ API
// การทำงานกับฐานข้อมูล
// การสร้างและควบคุมองค์ประกอบของเว็บ


console.log("hello world");

document.getElementById("name").innerHTML = "Woramet Tompudsa";

document.write("hello document write");

window.alert("hello alert");

var x = 5;
var y = 6;
var z = x + y;

// Arithmetic operators
// + - * / ** % ++
// x++ ค่า x ก่อนบวก
// ++x ค่า x หลังบวก

// Comparison operators
//  == ===
// != !==
// > < >= <=


// Assignment operators
// x = y   x = y
// x += y  x = x + y
// x -= y  x = x - y
// x *= y  x = x * y
// x /= y  x = x / y

// Logical operators
// &&  (and)
// ||  (or)

console.log(z);

var FirstName = "Woramet";
var LastName = "Tompudsa";
var FullName = FirstName + LastName;

console.log(FullName);

var x = "Woramet Tompudsa";

console.log(x.length)

// Object 
// [] เข้าถึงตัวแปร 
// .  เข้าถึงfunction
var myCar = {
    brand: "Ford",
    model: "1",
    color: "black"
};

console.log(myCar["brand"])


var person = {
    firstName: "Woramet",
    lastName: "Tompudsa",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    fullName2: function(){
        return person.firstName + " " + person.lastName;
    }
}

console.log(person.fullName());
console.log(person.fullName2());


// Function
function myFunction(value1, value2){
    return value1 * value2
}

console.log(myFunction(2, 3));

function changeBg(){
    document.body.style.backgroundColor = "gray";
}

function changeBg2(color){
    document.body.style.backgroundColor = color;
}

function displayDate(){
    document.getElementById("date").innerHTML = Date();
}

// Array Literal
var myArr = [
    "BMW", "Ford", "Honda"
];

var myArr2 = ["BMW", "Ford", "Honda"];

console.log(myArr);
console.log(myArr[0]);
console.log(myArr.length);
console.log(myArr2);

var fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
document.getElementById("fruit").innerHTML = fruits;
document.getElementById("fruit").innerHTML = fruits.join("-");

fruits.pop(); 
// remove value and return
console.log(fruits);

fruits.push("Orange");
// add value
console.log(fruits);

fruits.shift();
// remove first value
console.log(fruits);

fruits.unshift("Lemon");
// add first value
console.log(fruits);

fruits[0] = "Kiwi";
console.log(fruits)

delete fruits[1];
console.log(fruits)
// empty in array


// Splice vs Slice
fruits.splice(2, 0, "Watermelon", "Cherry");
// start, deleteCount, item1, item2, ...
// ( choose index 2 ) ( remove 0 item ) (add "Lemon", "Kiwi")
console.log(fruits)

fruits.slice(1,3)
// choose index 1 to index 3
console.log(fruits)

var arr1 = ["value1", "value2"];
var arr2 = ["value3", "value4", "value5"];
var arr3 = ["value6", "value7"];
console.log(arr1.concat(arr2))
console.log(arr1.concat(arr2, arr3))

// Data Type
var myNum = 10; // Number
var myString = "woramet"; // String
var myTrue = true; // Boolean
var myFalse = false; // Boolean
var myNull = null; // Null
var myUndefined; // Undefined

// Object
var myObject = {};

// Array
var myArr = [];

var time = 20;

if (time < 12){
    console.log("Good morning");
} else if (time < 10){
    console.log("Good afternoon");
} else{
    console.log("Good evening");
}

// Switch Case

// switch(expression){
//     case x:
//          // code block
//         break;
//     case y:
//          // code block
//         break;
//     default:
//         // code block
// }

var myPhone = "OPPO";

switch(myPhone){
    case "iPhone":
        console.log("30000");
        break;
    case "Sumsung":
        console.log("20000");
        break;
    default:
        console.log("we don't have phone")
}

for (var i = 0; i <= 3; i++){
    console.log(i)
}

var myNames = ["woramet", "game", "tompudsa"]

for (var i =0; i < myNames.length; i++){
    console.log(myNames[i])
}

var person = {
    fname: "Woramet",
    lname: "Tompudsa",
    nname: "game"
};
var i;
for (i in person){
    console.log(person[x]);
}

var myString = "woramet Tompudsa"
var x;
for (x of myString){
    console.log(x)
}

function myFunc(){
    myNamefunc = "woramet404";
}
myFunc();
console.log(myNamefunc)


// Javascript Hoisting
x = 5;
console.log(x);

var x; // declaration // Hoisting

var y = 10; // Initialzation // Not Hoisting



// "use strict";
// "use strict" เป็นคำสั่งใน JavaScript ที่ใช้เปิดใช้งานโหมด strict mode ซึ่งเป็นโหมดที่เข้มงวดของ JavaScript ที่ช่วยป้องกันข้อผิดพลาดบางประการและเพิ่มความเข้มงวดในการเขียนโค้ด JavaScript

// โหมด strict mode มาพร้อมกับกฎและข้อจำกัดที่เข้มงวดมากขึ้นเมื่อเปิดใช้งาน ตัวอย่างเช่น:

// ต้องประกาศตัวแปรก่อนใช้งาน
// ไม่อนุญาตให้ใช้ตัวแปรที่ไม่ได้ประกาศไว้
// ไม่อนุญาตให้ใช้คำสงวน (reserved) ในภายในตัวแปรหรือชื่อฟังก์ชัน
// การใช้งาน "this" ในฟังก์ชันที่ไม่ได้ถูกเรียกในรูปแบบของ Object

function myFunc2(){
    return this;
}

console.log(myFunc2());

// ES6 let & const

var x = 1;
var x = 2;
console.log(x);

let v = 6;
v = 7;
console.log(v);

const z1 = 9;
// เปลี่ยนค่าไม่ได้
console.log(z1);

{
    var myValue = 18;
}

console.log(myValue);

// error

// {
//    let myPoint = 20;
// }

// console.log(myPoint);

// {
//     const myScore = 20;
//  }
 
//  console.log(myScore);

var myV = 1;
{
    var myV = 2;
}
console.log("my var");
console.log(myV);

let myPoint = 8;
{
    let myPoint = 9;
}
console.log("my let");
console.log(myPoint);

const myScore = 11;
{
    const myScore = 12;
}
console.log("my const");
console.log(myScore);

var myName = "Woramet";
//  `` 
console.log(`Hi my name is ${myName}`);

function myNameis(name){
    console.log(`hi my name is ${name}`)
}
myNameis("Game");

// ES 6 Arrow function

// Function Expreesion

var hello1 = function(){
    return "hello world 1"
}

var hello2 = () => {
    return "hello world 2"
}

var hello3 = () => "hello world 3"

var hello4 = (name) => `hello world ${name}`;

console.log(hello1());
console.log(hello2());
console.log(hello3());
console.log(hello4("game woramet"));

// Class

class myClass{
    constructor(name){
        this.myname = name;
    }

    fullname(greeting){
        return greeting + " my name is " + this.myname;
    }

    // static method
    static hello(){
        return "hello";
    }

    // static method
    static hello(name){
        return "hello " + name;
    }
}

var person = new myClass("woramet");

console.log(person.fullname("Hello"));

// error
// console.log(person.hello());
console.log(myClass.hello());
console.log(myClass.hello("woramet game"));

// Class Inheritance
class Car{
    constructor(brand){
        this.carname = brand;
    }

    present(){
        return "I have a " + this.carname;
    }
}

class Model extends Car{
    constructor(brand, model){
        // send brand to constructor class Car
        super(brand);
        this.model = model;
    }

    show(){
        return this.present() + ", it's a " + this.model;
    }
}

var myCar = new Model("Ford", "Mustang");

console.log(myCar.show());


// about array
Array.prototype.myUcase = function(){
    for (i = 0; i<this.length;i++){
        this[i] = this[i].toUpperCase();
    }
}

let persons = ['woramet', 'tompudsa', 'game'];
console.log(persons.constractor);
persons.myUcase();
console.log(persons);
console.log(persons.length);

let info1 = ['v1', 'v2'];
let info2 = ['v3', 'v4'];

let joinTwo = info1.concat(info2);
console.log(joinTwo);

let persons1 = ['woramet', 'tompudsa', 'game'];
persons1.copyWithin(2, 0);
console.log(persons1);
// ใช้สำหรับคัดลอกส่วนหนึ่งของอาร์เรย์ไปยังตำแหน่งอื่นภายในอาร์เรย์เดียวกัน
// array.copyWithin(target, start, end)
// let array = [1, 2, 3, 4, 5];
// Copy elements from index 2 to index 0
// array.copyWithin(0, 2, 4);
// console.log(array); // Output: [3, 4, 3, 4, 5]

let fruits1 = ['banana', 'apple', 'kiwi', 'orange'];
let f = fruits1.entries();
for (x of f){
    document.getElementById('fruits').innerHTML += x;
}
// เป็นเมธอดใน JavaScript ที่ใช้สำหรับสร้าง Iterator ที่คืนคู่ค่าแบบ key-value จาก properties
// const obj = { foo: 'bar', baz: 'qux' };

// // ใช้ entries เพื่อเข้าถึงคู่ค่า key-value ของ properties ในออบเจกต์
// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key}: ${value}`);
// }
// // Output:
// // foo: bar
// // baz: qux

// const arr = [10, 20, 30];

// // ใช้ entries เพื่อเข้าถึงคู่ค่า key-value ของ elements ในอาร์เรย์
// for (const [index, value] of arr.entries()) {
//   console.log(`Index: ${index}, Value: ${value}`);
// }
// // Output:
// // Index: 0, Value: 10
// // Index: 1, Value: 20
// // Index: 2, Value: 30

let ages = [30, 20, 10];
function checkAdult(ages){
    return ages <= 10;
}

function myFunctionage(){
    document.getElementById('age').innerHTML = ages.every(checkAdult);
};

myFunctionage();
// ใช้สำหรับตรวจสอบว่าทุกๆ สมาชิกในอาร์เรย์ผ่านเงื่อนไขที่กำหนดให้เป็นจริงหรือไม่
// array.every(callback[, thisArg])
// array: เป็นอาร์เรย์ที่ต้องการทำการตรวจสอบ
// callback: เป็นฟังก์ชันที่ใช้ในการตรวจสอบเงื่อนไขของสมาชิกแต่ละตัวในอาร์เรย์ ฟังก์ชันนี้ต้องรับค่าพารามิเตอร์ที่แทนสำหรับสมาชิกแต่ละตัวในอาร์เรย์ และต้องคืนค่าเป็น true หรือ false ซึ่งหากคืนค่า false ที่บางครั้งจะหยุดการทำงานของ every
// thisArg (ไม่บังคับ): เป็นค่า this ที่ใช้ในฟังก์ชัน callback ซึ่งถ้าไม่ระบุ thisArg จะใช้ค่า undefined เป็นค่าเริ่มต้น

let animal = ['dog', 'cat', 'fish'];
document.getElementById('animal').innerHTML = animal;

function fillFunction(){
    document.getElementById('animal').innerHTML = animal.fill('woramet');
}
// เปลี่ยนค่าสมาชิก
// let numbers = [1, 2, 3, 4, 5];
// // เปลี่ยนค่าสมาชิกทุกตัวในอาร์เรย์เป็น 0
// numbers.fill(0);
// console.log(numbers); // [0, 0, 0, 0, 0]
// // เปลี่ยนค่าสมาชิกตั้งแต่ตำแหน่งที่ 2 ถึง 4 เป็น 9
// numbers.fill(9, 2, 5);
// console.log(numbers); // [0, 0, 9, 9, 9]

let num = [8, 9, 10, 11, 12];
function checkNum(num){
    return num < 10;
}

// filter คัดกรอง
function filterFunction(){
    document.getElementById('numfilter').innerHTML = num.filter(checkNum);
}

// find ใช้ในการค้นหาสมาชิกที่เป็นเสมือนเงื่อนไขที่กำหนดให้เป็นจริง และคืนค่าของสมาชิกแรกที่พบ
function findFunction(){
    document.getElementById('numfind').innerHTML = num.find(checkNum);
}

// findindex ใช้ในการค้นหาIndexที่เป็นเสมือนเงื่อนไขที่กำหนดให้เป็นจริง และคืนค่าของสมาชิกแรกที่พบ
function findIndexFunction(){
    document.getElementById('numfindindex').innerHTML = num.findIndex(checkNum);
}

let lang = ['css', 'html', 'js'];
// forEach เป็นฟังก์ชันของอาร์เรย์ใน JavaScript ที่ใช้ในการวนลูปผ่านสมาชิกทั้งหมดในอาร์เรย์และทำงานกับแต่ละสมาชิก โดยไม่สนใจผลลัพธ์ที่ส่งคืน
lang.forEach(myLangFunction);

function myLangFunction(item, index){
    document.getElementById('lang').innerHTML += index + ": " + item;
}

// from เป็นเมธอดหรือฟังก์ชันที่ใช้ใน JavaScript เพื่อสร้างอ็อบเจกต์หรืออาร์เรย์ใหม่จากคอลเลกชันของค่าที่กำหนดมา
let myArray = Array.from('ABCDE');
document.getElementById('abc').innerHTML = myArray;

// includes เป็นเมธอดหรือฟังก์ชันใน JavaScript ที่ใช้สำหรับตรวจสอบว่าอาร์เรย์หรือสตริง (String) มีค่าที่กำหนดหรือไม่
let color1 = ['red', 'green', 'blue'];
let includescolor1 = color1.includes('green');
console.log(includescolor1);

// indexOf เป็นเมธอดหรือฟังก์ชันใน JavaScript ที่ใช้สำหรับตรวจสอบ index ของสตริง  
let country= ["thai", "eng", "japan"];
let indexcountry = country.indexOf('thai');
console.log(indexcountry);

// isArray เป็นฟังก์ชันที่ใช้ใน JavaScript เพื่อตรวจสอบว่าค่าที่กำหนดเป็นอาร์เรย์หรือไม่
function mySocialFunction(){
    let social = ['line', 'facebook', 'ig'];
    let socialtag = document.getElementById('socialtag');
    socialtag.innerHTML = Array.isArray(social);
}

// join() เป็นฟังก์ชันใน JavaScript ที่ใช้ในการรวมสมาชิกของอาร์เรย์เป็นสตริง (string) โดยใช้ตัวคั่นที่กำหนดไว้ และส่งคืนสตริงใหม่ที่ได้รวมกันแล้ว
let social2 = ['line', 'facebook', 'ig'];
social2join= social2.join();
console.log(social2join);

// keys() เป็นฟังก์ชันใน JavaScript ที่ใช้ในการดึงคีย์ (property names) ของออบเจกต์ (object) และส่งคืนอาร์เรย์ที่มีคีย์เหล่านั้นเป็นสมาชิก
let grade = ['a', 'b', 'c'];
let grade_keys = grade.keys();
// let obj = { a: 1, b: 2, c: 3 };
// let keys = Object.keys(obj); // ดึงคีย์ของออบเจกต์ obj
// console.log(keys); // แสดงผล ["a", "b", "c"]
for (x of grade_keys){
    console.log(x)
}

// lastindexof เป็นฟังก์ชันใน JavaScript ที่ใช้ในการค้นหาตำแหน่งของค่าที่กำหนดในอาร์เรย์ (array) ตั้งแต่ตำแหน่งสุดท้ายของอาร์เรย์
let yourname = ['woramet', 'game', 'tompudsa'];
let last_index = yourname.lastIndexOf('tompudsa');
console.log(last_index);

// map เป็นฟังก์ชันใน JavaScript ที่ใช้ในการสร้างอาร์เรย์ใหม่ (หรือแมพค่า) โดยใช้ฟังก์ชัน callback ที่กำหนดให้กับแต่ละสมาชิกในอาร์เรย์เดิม และส่งคืนอาร์เรย์ใหม่ที่มีค่าที่ถูกแมพจากแต่ละสมาชิกตามผลลัพธ์ที่ได้จากการเรียกใช้ฟังก์ชัน callback นั้น
let myNum1 = [4, 16, 9, 25];
let myNum2 = myNum1.map(Math.sqrt);
console.log(myNum2);

let himname = ['woramet', 'tompudsa', 'game'];
let info = himname.map(info => console.log(info));

// push add value 
// pop remove value

// reduce เป็นฟังก์ชันใน JavaScript ที่ใช้ในการลด (reduce) อาร์เรย์หรือคอลเลกชันของค่าให้เป็นค่าเดียว โดยใช้ฟังก์ชัน callback
// reduce = left to right
// reduceright = right to left
let yournumber = [150, 100, 20];
let yournumber2 = yournumber.reduce(myReduceFunction);
function myReduceFunction(total, num){
    return total - num
}
console.log(yournumber2)


// reverse เป็นฟังก์ชันใน JavaScript ที่ใช้สำหรับการสลับลำดับของสมาชิกในอาร์เรย์ (array) ให้กลับหลังหน้า กลับหลังหน้า 
let menumber = ['1', '2', '3'];
let menumber2 = menumber.reverse(menumber);
console.log(menumber2);


// shift เป็นฟังก์ชันใน JavaScript ที่ใช้สำหรับการลบสมาชิกแรกของอาร์เรย์ (array) และคืนค่าสมาชิกแรกนั้นกลับมาเป็นผลลัพธ์ 
let shiftnum = ['1', '2', '3'];
let shiftnum2 = shiftnum.shift();
console.log(shiftnum);

// unshift เป็นฟังก์ชันใน JavaScript ที่ใช้สำหรับการเพิ่มสมาชิกใหม่เข้าไปในตำแหน่งแรกของอาร์เรย์
let unshiftfruits = ['banana', 'cherry'];
let unshiftfruits2 = unshiftfruits.unshift('apple');
console.log(unshiftfruits);

// Splice เลือกตำแหน่งแล้วแทนที่ vs Slice เลือกช่วง
let splicefruits = ["apple", "watermelon", "banana"]
let splicefruits2 = splicefruits.splice(2, 0, "Watermelon", "Cherry");
// start, deleteCount, item1, item2, ...
// ( choose index 2 ) ( remove 0 item ) (add "Lemon", "Kiwi")
console.log(splicefruits)

let slicefruits = ["apple", "watermelon", "banana", 'kiwi', 'orange']
let slicefruits2 = slicefruits.slice(1,3)
// choose index 1 to index 3
console.log(slicefruits2)


// some เป็นฟังก์ชันใน JavaScript ที่ใช้สำหรับการตรวจสอบว่าอย่างน้อยหนึ่งสมาชิกในอาร์เรย์ (array) ตรงตามเงื่อนไขที่กำหนดหรือไม่
// ถ้ามีอย่างน้อย1สมาชิกเป็นจริงจะได้ค่าเป็น true
let yourages = [30, 20, 10];

function checkAdult(yourage){
    return yourage >= 18;
}

let result = yourages.some(checkAdult);

console.log(result); // แสดงผล true

// sort จัดเรียง
let mynameis = ['woramet', 'tompudsa', 'game'];
let mynameis2 = mynameis.sort();
console.log(mynameis2);

// toString เปลี่ยนเป็น string
let mycountry = ['thai', 'eng', 'japan'];
let mycountry2 = mycountry.toString();
console.log(mycountry2)

// valueof เป็นเมธอด (method) ใน JavaScript ที่ใช้สำหรับการส่งค่าแทนตัวอ็อบเจ็กต์ (object) ในรูปแบบของค่าพื้นฐาน (primitive value) ของอ็อบเจ็กต์นั้น ๆ โดยทั่วไปแล้ว JavaScript จะเรียกใช้เมธอด valueOf() โดยอัตโนมัติเมื่อต้องการแปลงอ็อบเจ็กต์เป็นค่าพื้นฐาน 
let mecountry = ['thai', 'eng', 'japan'];
let mecountry2 = mecountry.valueOf();
console.log(mecountry2)

// Synchrounous การทำงานแบบเป็นลำดับขั้นตอน
// Asynchrounous การทำงานแบบไม่เป็นลำดับขั้นตอน

// Synchronous
console.log("Plant corn");
console.log('Water plant');
console.log('Add fertilizer');

// Asynchronous
console.log("Plant corn");
setTimeout(function() {
    console.log('Water plant');
}, 3000);
console.log('Add fertilizer');

// Callback
function greeting(name){
    console.log(`hello my name is ${name}`);
}

function introduction(firstName, lastName, callback){
    const fullName = `${firstName} ${lastName}`;
    callback(fullName);
}

introduction('woramet', 'tompudsa', greeting);

// Callback hell การเรียก callback ไปเรื่อยๆ แก้โดยใช้ promise
// function logHomeroomTeacher(studentName){
//     getStudentIdByName(studentName, id => {
//         getRoomByStudentId(id, room => {
//             getTeacherByRoom(room, console.log('done'));
//         });
//     });
// }

// Promise
const weather = true;
// new Promise(callbackfunc(resolve, reject){ condition })
// resolve แก้ไข
// reject ปฏิเสธ
const date = new Promise(function(resolve, reject){
    if (weather) {
        const dateDetails = {
            name : 'woramet',
            location: '123st, Bangkok',
            table: 5
        }
        resolve(dateDetails);
    }
    else{
        // when error show message (weather = false)
        reject(new Error('Bad weather, can not go to dinner.'));
    };
    console.log(date);
});

// วิธี 1
// const orderUber = function(dateDetails){
//     return new Promise(function(resolve, reject){
//         const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going to a dinner`;
//         return resolve(message);
//     })
// }
// const myDate = function(){
//     //date.then(callbackfunc(donedata){condition})
//     date
//         .then(orderUber)
//         .then(function(done){
//             console.log('We are going on a dinner');
//             console.log(done);
//         })
//         .catch(function(error){
//             console.log(error.message);
//         });
// };
// myDate();

// วิธี 2
// const orderUber = function(dateDetails){
//     return new Promise(function(resolve, reject){
//         const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going to a dinner`;
//         return resolve(message);
//     })
// }
// async function myDate(){
//     try{
//         let dateDetails = await date;
//         let message = await orderUber(dateDetails);
//         console.log(message);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
// (async () => {
//     await myDate();
// })();

async function fetchUsers(endpoint){
    const res = await fetch(endpoint);

    if (!res.ok){
        throw new Error(res.status); //404
    }

    let data = await res.json();
    return data
}

fetchUsers('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data.map(user => user.username)))
    .catch(err => console.log('Oops, error', err.message));


// DOM
document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;

const x_p = document.querySelectorAll("p");
const x_p1 = document.querySelector("p");
const x_id06 = document.querySelector("#id06");
const x_c03 = document.getElementsByClassName("class03");
x_c03.innerHTML = "getclass03";
const x_id05 = document.getElementById("id05");
x_id05.innerHTML = "getid05";
document.getElementById("id04").innerHTML = "New text!";

// DOM CSS
document.getElementById("id06").style.color = "blue";

// Create element DOM
const e = document.createElement("p");
e.className += " otherclass";
e.classList.add("newclass");
e.classList.toggle("toggle");
e.setAttribute("id", "new id" + 1);
e.innerHTML = "create new tag1";

// AppendChild element DOM
// Domcontentloaded เมื่อ dom โหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    const e1 = document.createElement("p");
    e1.className += " otherclass";
    e1.classList.add("newclass");
    e1.classList.toggle("toggle");
    e1.setAttribute("id", "new id" + 1);
    e1.innerHTML = "create new tag2";
    const sce = document.querySelector('.show_create_element');
    sce.appendChild(e1);
});

// Romove element DOM
document.addEventListener('DOMContentLoaded', function() {
    const child = document.getElementById("removeelement");
    child.remove();
});

// Add class
document.addEventListener('DOMContentLoaded', function() {
    const e3 = document.querySelector('.addclass');
    e3.classList.add("addclass2");// .addclass addclass2
});

// Repaze class
document.addEventListener('DOMContentLoaded', function() {
    const e4 = document.querySelector('.primary1');
    e4.classList.replace('primary1', 'secondary1');
});

// Contains class
document.addEventListener('DOMContentLoaded', function() {
    const e5 = document.querySelector('.secondary1');
    const findclassprimary1 = e5.classList.contains("primary1");
    const findclasssecondary1 = e5.classList.contains("secondary1");
    console.log(findclassprimary1);
    console.log(findclasssecondary1);
});

// toggle class
document.addEventListener('DOMContentLoaded', function() {
    const e6 = document.querySelector('.t1');
    e6.classList.toggle("toggle"); // .t1 toggle
    e6.classList.toggle("toggle"); // .t1
    e6.classList.toggle("toggle"); // .t1 toggle
});

// การเรียกใช้ API
// วิธี 1
let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();
request.onload = () =>{
    console.log(request);
    if (request.status === 200){
        console.log('call api')
        console.log(JSON.parse(request.response))
    }else {
        console.log(`error ${request.status} ${request.statusText}`);
    };
};

// การเรียกใช้ API
// วิธี 2 jquery
$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        type : 'GET',
        success: function(result){
            console.log('jquery');
            console.log(result);
        },
        error: function(error){
            console.log(error);
        }
        
    })
})

// การเรียกใช้ API
// วิธี 3
async function getUser(){
    let response3 = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('fetch');
    console.log(response3);
    let data = await response3.json();
    return data
};

getUser();


// การเรียกใช้ Axios
// วิธี 4
const url = 'https://jsonplaceholder.typicode.com/users';

axios.get(url).then((response) => {
  // handle success
  console.log('axios');
  console.log(response);
})
.catch((error) => {
  // handle errors
});
