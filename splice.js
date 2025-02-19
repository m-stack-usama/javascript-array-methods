// changes the original array by removing / replacing existing elements from it.
// it also returns an array with the removed items

// Example 1: Removing elements from an array
// In the below, the 1st parameter is the starting index and the 2nd parameter is the count of elements to remove.
// Here, starting at index 1, 2 elements (values 2 and 3) are removed.
const numbers1 = [1, 2, 3, 4, 5];
numbers1.splice(1, 2);
console.log(numbers1); // output: [ 1, 4, 5 ]
// -------------------------------------------------------

// Example 2: Capturing the removed elements from an array
// This example shows how to capture and log the deleted items.
const numbers2 = [1, 2, 3, 4, 5];
const deletedNumbers = numbers2.splice(1, 2);
console.log(numbers2);       // output: [ 1, 4, 5 ]
console.log(deletedNumbers); // output: [ 2, 3 ]
// -------------------------------------------------------

// Example 3: Removing elements and adding new ones to the array
// In this example, starting at index 1, 2 elements are removed and replaced with 10, 20, and 30.
const numbers3 = [1, 2, 3, 4, 5];
numbers3.splice(1, 2, 10, 20, 30);
console.log(numbers3); // output: [ 1, 10, 20, 30, 4, 5 ]
// -------------------------------------------------------

// Example 4: Adding new numbers to the array without removing any existing elements
// Here, setting the 2nd parameter to 0 means no elements are removed; new numbers are simply inserted starting at index 1.
const numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(1, 0, 10, 20, 30);
console.log(numbers4); // output: [ 1, 10, 20, 30, 2, 3, 4, 5 ]
// -------------------------------------------------------
