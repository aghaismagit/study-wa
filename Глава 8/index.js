// function doIntersectionArray(arr1, arr2) {
//   const hashTable = {};
//   let largerArray = [];
//   let smallerArray = [];
//   const result = [];

//   if (arr1.length > arr2.length) {
//     largerArray = arr1;
//     smallerArray = arr2;
//   } else {
//     largerArray = arr2;
//     smallerArray = arr1;
//   }

//   console.log(largerArray);

//   for (const value of largerArray) {
//     hashTable[value] = 1;
//   }

//   console.log(hashTable);

//   for (const value of smallerArray) {
//     if (hashTable[value]) {
//       result.push(value);
//     }
//   }

//   return result;
// }

// console.log(doIntersectionArray([1, 2, 3, 4, 5], [0, 2, 4, 6, 8, 1]));

// -----------------------------------------------------------------------------------

// function findDuplicates(arr) {
//     const hashTable = {}
//     for (const value of arr) {
//         hashTable[value] ? hashTable[value] = 2 : hashTable[value] = 1
//     }
//     for (const value of arr) {
//         if (hashTable[value] == 2)
//         return value
//     }
// }


// console.log(findDuplicates(['y', 'b', 'c', 'z', 'c', 'd', 'z']))

// ----------------------------------------------------------------------------------------

// function searchInAlphabet(str) {
//     const hashTable = {}
//     const formattigStr = str.replaceAll(' ', '')
//     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

//     for (const value of formattigStr) {
//         hashTable[value] = 1
//     }

//     for (const value of alphabet) {
//         if (!hashTable[value]) {
//             return value
//         }
//     }
// }

// console.log(searchInAlphabet("the quick brown box jumps over a lazy dog")) 

// -------------------------------------------------------------------------------------------

// function findFirstNotDuplicate(str) {
//     const hashTable = {}
//     const formattigStr = str.replaceAll(' ', '')

//     for (const value of formattigStr) {
//         hashTable[value] ? hashTable[value] = 2 : hashTable[value] = 1
//     }

//     for (const value in hashTable) {
//         if (hashTable[value] == 1) {
//             return value
//         }
//     }


// }

// console.log(findFirstNotDuplicate('minimum'))