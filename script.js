// var array = []

// var obj = {
//     name: "Muzammil-Husnain",
//     rollNo: 569453,
//     degree: "bscs"
// }
// array.push(obj)


//  obj = {
//     name: "Shehraz-Hassam",
//     rollNo: 569453,
//     degree: "bscs"
// }
// array.push(obj)

//  obj = {
//     name: "Imran-Khan",
//     rollNo: 569453,
//     degree: "bscs"
// }

// array.push(obj)

// var name = "ali";
// var rollNo = 569454

// obj.name = name
// obj.rollNo = rollNo

// console.log(array);


// var fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// var slicedFruits = fruits.slice(1, 4);
// console.log(slicedFruits);
// // Output: ['banana', 'orange', 'mango']

// var slicedFruitsFromStart = fruits.slice(2);
// console.log(slicedFruitsFromStart);
// // Output: ['orange', 'mango', 'grape']


// var fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// var slicedFruits = fruits.slice(0 , 3)

// console.log(slicedFruits);


// var numbers = [1, 2, 3, 4, 5];

// var doubledNumbers = numbers.map(function(element) {
//   return element * 2;
// });

// console.log(doubledNumbers);
// // Output: [2, 4, 6, 8, 10]



// var numbers = [1, 2, 3, 4, 5];

// function mapped(element) {
//    var check = element % 2;
//    if (check == 0) {
//       return "even";
//    } else {
//       return "odd";
//    }
// }

// var newMappedArray = numbers.map(mapped);

// console.log(newMappedArray);



// var fruits = ['apple', 'banana', 'orange', 'mango', 'grape']

// fruits.splice(1 , 1 , 'Muzammil')

// console.log(fruits);



// var fruits = ['apple', 'banana', 'orange', 'mango', 'grape']


// fruits.forEach((element , index) => {
//     console.log(element + ' Fruits ' + 'is on index ' + index);
// })



// var numbers = [1, 2, 3, 4, 5]

// function doubleNumbers(element){
//     return element + ' Muzammil is the name of unforgettable'
// }

// var doubleNumber = numbers.map(doubleNumbers)
// console.log(doubleNumber);


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

var number = 5;
var result = factorial(number);
console.log("The factorial of " + number + " is: " + result);
