// var a = 10.23456;
// console.log(typeof a);
// //Range of number data type: -2^53-1 to 2^53-1
// var b = 1234n;
// console.log(typeof a);

// var c = BigInt(0xffff);
// console.log(typeof c);

// var d = "String";
// console.log(typeof d);

// var e = null;
// console.log(typeof e);

// var f;
// console.log(typeof f);

// // var g = Symbol();
// // console.log(typeof g);

// var g = Symbol("H"); 
// var h = Symbol("H"); 
// console.log(g==h);

// var x = Symbol("Vinay");
// var y = Symbol("Joshi");
// myobj={};
// console.log(myobj);
// myobj[x] = "First Name";
// myobj[y] = "Last Name";
// console.log(myobj);
// console.log(myobj.x);
// console.log(myobj.y);
// myobj["x"]="Vinay"
// console.log(myobj.x);
// myobj["y"]="Joshi"
// console.log(myobj.y);

// 1st way to Create an object

// var obj ={firstname:'Vinay', lastname:'Joshi'}
// console.log(obj.firstname);

// var obj1 = {firstname:"Vinay", lastname:"Joshi", course:"CSE", section:"K22MR"}     // format to create an object: here firstname, lastname, course, section are the keys and Vinay, Joshi, CSE, K22MR are the values;
// console.log(obj1.firstname);   //calling the object
// console.log(obj1.lastname);
// console.log(obj1.course);
// console.log(obj1.section);

// var obj2 = {firstname:"Vinay", lastname:"Joshi"}
// console.log(obj2.lastname);

// obj2["marks"] = 100;
//   //Adding another parameter
// console.log(obj2.marks);

// 2nd way to create a object using new Object:

// var obj3 = new Object();
// obj3["fruit1"]="Apple";
// obj3["fruit2"]="Orange";
// obj3["fruit3"]="Banana";
// obj3["fruit4"]="Kiwi";

// console.log(obj3); //Printing object
// console.log(obj3.fruit1);
// console.log(obj3.fruit2);
// console.log(obj3.fruit3);
// console.log(obj3.fruit4);

// 3rd way to create an object is using functions

// function Person(name, age, place, gender){
//     this.name = name;
//     this.age = age;
//     this.place = place;
//     this.gender = gender;
// }

// // Creating object for the function

// const obj = new Person("Vinay", "19", "Uttarakhand", "Male");
// console.log(obj);
// console.log(obj.place);

// obj["weight"] = 57;
// console.log(obj.weight);

// obj.height = 175;
// console.log(obj.height);

// 4th way to create an object is using class constructor:

// only difference is here we have created the object for class name whereas in the previous method we have created object for function name..

class Book
{
    constructor(bookname, publisher, numberOfCopies){
        this.bookname = bookname;
        this.publisher = publisher;
        this.numberOfCopies = numberOfCopies;
    }
    // Creating object for the Class
}
   const book = new Book("Harry Potter", "Bloomberry", 1000);
    console.log(book);



