// slice returns a shallow copy of a portion of an array - ( doesn't modify the original array )
const numbers = [1, 2, 3, 4, 5];

// in the below example slice(1, 3), these are actually the indexes of the array that we want to apply the method on
// note that the last index mentioned is ignored / not included, for instance on index 1 we have 2 and on index 3 we have 4 but it is ignored and index 1 and index 2 values are returned
const newNumbers = numbers.slice(1, 3);
console.log(newNumbers); // output: [ 2, 3 ]
// -------------------------------------------------------

const newNumbers2 = numbers.slice(-3);
console.log(newNumbers2); // output: [ 3, 4, 5 ]
// -------------------------------------------------------

const participants = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
const winners = participants.slice(0, 3);
console.log(winners); // output: [ 'user1', 'user2', 'user3' ]
// -------------------------------------------------------
