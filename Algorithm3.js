// 3. FizzBuzz

// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are 
// divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers
// that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

let x = []
for (let i =1 ; i <= 135 ; i++){
   if(i % 3 === 0){
   x.push('Fizz')
   } else if(i % 5 === 0){
     x.push('Buzz')
   } else if (i % 3 === 0 && i % 5 === 0){
   x.push('FizzBuzz')
   } else {
      x.push(i)
   }
}console.log(x)


// Pseudocode
// 1- declare an empty array 
// 2- we use for loop to iterate from 1 to 135
// 3- if statment to check the conditions that we want to log

// coding

// let x = [];
// for (let i = 0; i<= 135; i++){
//  if(i % 3 === 0){
//     x.push('fizz') ;
//  } else if( i%5 === 0){
//     x.push('Buzz');
//  }else if (i % 3 === 0 && i%5 === 0){
//     x.push('FizzBuzz' )
//  }else {
//     x.push(i)
//  }
// }
// console.log(x)

// Diagram
// if statment checks wether the number is divisible by 3 we push 'Fizz' to the x array
// else if the number is divisible by 5 we push 'Bizz' to the x array
// else if the number is divisible by both 3 and 5 we push 'FizzBuzz' to the x array
// otherwise we push the value of i to the x array