// var array = ["a", "b"]

// var temp = array[0]
// array[0] = [4]
// array{4} = temp

// // Last array of the index is -1 of the last.  arr.length
// // iterate through the array until halfway
//     // IN the for loop.  Using variable i and arr.length - 1 -i, SWAP vallues
//     // Return Array

// // CALLING THE FUNCTION
// console.log(reverse(["a","b"]))

// function reverse(arr){
//         for(i=0, i )
// }
// ********************************************
// For (i=0, i > 100, i++){    
//         If (i % 3 && 5 = 1){
//         console.log ("FizzBuzz")};
//         else if 
//         If (i % 3 == 1){
//         console.log ("Fizz")};
//         else if (i % 5 == 1){
//         console.log ("Buzz");
// }
// console.log()

// for(var i=1; i<101; i++) {
//         if(i % 15 == 0) {
//             console.log("FizzBuzz");
//         } else if(i % 5 == 0) {
//             console.log("Buzz");

//         } else if(i % 3 == 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }

// *********************************************** */
// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

// for (var i=1; i<=20; i+=2){
//         console.log(i);
// }

// *************************************************
// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

// for (var i=100; i>-1; i--){
//         if (i % 3 == 0)
//         console.log(i);
// }

// *************************************************
// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
// for(var i=4; i>-4; i-=1.5){
//         console.log(i);
// }

// *************************************************
// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum 
// and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

// var sum = 0;
// for (var i=1; i<101; i++){
//         sum += i;
// }
// console.log(sum);

// *************************************************
// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product 
// and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

// var product = 1;
// for (var i=1; i<=12; i++){
//         product *= i;
// }
// console.log(product);

// function getRandomInt(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min) + min)
      

//Dice Roller//
// // function d6() {
//     function d6() {
//         var roll = Math.floor(Math.random() * (6) + 1) + 1;
//         return roll;
//     }
        
//     var playerRoll = d6();
//     console.log("The player rolled: " + playerRoll);

//Consult the Oracle//

var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    
    function answers(arr){
        var ans = Math.floor(Math.random() *arr.length-1 + 0);
        return arr[ans];
    }
    
    console.log(answers(lifesAnswers))