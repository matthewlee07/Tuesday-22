// function max(numbers) {
//   let currentMax = 0;
//   let i=0;
//   while(numbers.length>i){
//     if (numbers[i]>currentMax){
//       currentMax=numbers[i];
//     }
//     i++;
//   }

//   // for(let i=0; i<numbers.length; i++){
//   //   if (numbers[i]>currentMax){
//   //     currentMax=numbers[i];
//   //   }
//   // }
//   return currentMax;
//  }


//  function min(numbers) {
//   let currentMin = 0;
//   let i=0;
//   while(numbers.length>i){
//     if (numbers[i]<currentMin){
//       currentMin=numbers[i];
//     }
//     i++;
//   }
//   return currentMin
//  }



//  /* From here down, you are not expected to 
//     understand.... for now :)  


//     Nothing to see here!

//  */


//  // tests

//  function testFunctionWorks(fn, input, expected) {
//    if (fn(input) === expected) {
//      console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//      return true;
//    }
//    else {
//      console.log(
//        'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
//        ' but was ' + fn(input)
//      );
//      return false;
//    }
//  }


//  (function runTests() {
//    // we'll use the variables in our test cases
//    const numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
//    const realMin1 = numList1[3];
//    const realMax1 = numList1[6];
//    const numList2 = [0, 1, 2, 3, 4];
//    const realMin2 = numList2[0];
//    const realMax2 = numList2[4];

//    const testResults = [
//      testFunctionWorks(max, numList1, realMax1),
//      testFunctionWorks(max, numList2, realMax2),
//      testFunctionWorks(min, numList1, realMin1),
//      testFunctionWorks(min, numList2, realMin2),
//    ];

//    const numPassing = testResults.filter(function(result){ return result; }).length;
//    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
//  })();


// function hello(){
//   console.log('Hello world'); 
// }

// function goodbye(){
//   console.log("Goodbye world"); 
// }

// function repeat(n, fn){
//   for(let i = 0; i < n; i++){
//     fn(); 
//   }
// }

// repeat(5, hello); 
// repeat(5, goodbye); 

// function average(numbers) {
//   // forEach method
//   let total=0; 
//   numbers.forEach(el => total+=el)
//   return total/numbers.length;
// }

// /* From here down, you are not expected to 
//    understand.... for now :)  


//    Nothing to see here!

// */


// // tests

// function testFunctionWorks(fn, input, expected) {
//   if (fn(input) === expected) {
//     console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
//     return true;
//   }
//   else {
//     console.log(
//       'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
//       ' but was ' + fn(input)
//     );
//     return false;
//   }
// }

// (function runTests() {
//   const numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const correctAns1 = 5.5;
//   const numList2 = [0, -1, 1];
//   const correctAns2 = 0;

//   const testResults = [
//     testFunctionWorks(average, numList1, correctAns1),
//     testFunctionWorks(average, numList2, correctAns2)
//   ];
//   const numPassing = testResults.filter(function(result){ return result; }).length;
//   console.log(numPassing + ' out of ' + testResults.length + ' tests passing.')
// })();


// function fizzBuzz(countTo) {
//   let result = [];
//   for (let i = 1; i <= countTo; i++) {
//     //let fizzbuzz = 
    
//     switch (i%15) {
//       case (0):
//         result.push("fizzbuzz");
//         break;
//       case (3):
//       case (6):
//       case (9):
//       case (12):
//         result.push("fizz");
//         break;
//       case (5):
//       case (10):
//         result.push("buzz");
//         break;
//       default:
//         result.push(i);
//         break;
//     }
//   }
//   return result;
// }

// console.log(fizzBuzz(50));


// /* From here down, you are not expected to 
//    understand.... for now :)  
   
   
//    Nothing to see here!
   
// */



// // tests
// (function testFizzBuzz() {
//   // we'll use the variables in our test cases
//   const countTo = 16;
//   const expected = [
//     1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
//     'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
//   ];

//   const actual = fizzBuzz(countTo) || [];

//   if (
//     expected.length === actual.length &&
//     expected.every(function (item, index) {
//       return actual[index] === item;
//     })) {

//     console.log('SUCCESS: fizzBuzz is working');
//   }
//   else {
//     console.log('FAILURE: fizzBuzz is not working');
//   }
// })();


// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function (name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']

// // TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
//   const newArray = [];
//   arr.forEach(function (el) {
//     if (el[0] === "R") {
//       newArray.push(el);
//     }
//   });
//   return newArray;

// }

// filter(myNames);
let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function turtleMovements(){
  //filter out negative steps
  movements = movements.filter(movement=>movement[0]>=0 && movement[1]>=0);
 
  //use map to add new steps
  let distances = movements.map(movement=> movement[0]+movement[1]);

  //use forEach
  distances.forEach(distance=> console.log(distance));

}

console.log(turtleMovements(movements));