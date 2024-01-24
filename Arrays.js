// 1st way to create array
var arr = [10, 20, 30, 40, 50];
arr[5] = 60;
arr[9] = 90;

console.log(arr);

// 2nd way to create an array is using new 

var arr1 = new Array();

arr1[0] = 50;
arr1[1] = 80;
arr1[2] = 70;
arr1[3] = 60;

console.log(arr1)

arr1.push(100);
console.log(arr1);

arr1.pop();
console.log(arr1);

console.log(arr1.at(2));


//  Concatenation of two arrays

var arr4 = [1,2,3,4,9];
var arr5 = [11,21,31,44,98];
console.log(arr4 + "," + arr5);
console.log(arr4.concat(arr5));

var arr6 = [58,21,11,94,38];
console.log(arr6.sort()); 
console.log(arr6.reverse()); 


console.log(arr6.copyWithin(2,0));



