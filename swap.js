// var a = 5;
// var b = 10;
// a = a + b;   //a = 15
// b = a - b;   //b = 5
// a = a - b;
// console.log(a,b);
console.log("scope")
{
    var a = 100;
}
console.log(a);

function myfunction(x,y)
{
    // let x;
    // let y;   //local variable
    var x ;     //global variable
    var y ;
    var z = x+y;
    return z;

}
console.log(myfunction(7,4));
