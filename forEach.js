//executes the given fucntion on every from an array

// const numbers = [1, 2, 3, 4, 5]

// numbers.forEach(consoleNumber) // forEach expects a callback function with max upto 3 params

// function consoleNumber(item, index, arr) {
//     //  console.log(item) // output : 1 2 3 4 5 
//     //  console.log(arr) // output : [1, 2, 3, 4, 5] ( 5 times )
//     console.log('a[' + index + '] = ' + item) //output a[0] = 1 -  a[1] = 2 -  a[2] = 3 -  a[3] = 4 -  a[4] = 5
// }

// --- other way to perform the forEach is by using the arrow function

// numbers.forEach((item, index, arr) => {
//     console.log('a[' + index + '] = ' + item) //output a[0] = 1 -  a[1] = 2 -  a[2] = 3 -  a[3] = 4 -  a[4] = 5
// })

// --- eg : finding sum of the elements of the array

// let sum = 0

// numbers.forEach(item => {
//     sum += item
// })
// console.log(sum) // output : 15

// --- eg : finding the count of the items in the array

const alphabets = ['a', 'b', 'a', 'a', 'c', 'd', 'd']

let count = {}
alphabets.forEach(item => {
    if (count[item]) {
        count[item]++;
    } else
        count[item] = 1
})
console.log(count) //output : { a: 3, b: 1, c: 1, d: 2 }
