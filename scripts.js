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
