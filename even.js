// evenOddChecker.js

// Function to check if a number is even or odd
// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// Export the function to make it accessible from other files
// module.exports = checkEvenOrOdd;


exports.tocheck = function(x){
    if (x % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}