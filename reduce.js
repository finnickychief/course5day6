/*
  Array Reduce
    Like map and filter, it is an array method. Instead of returning a copy of the array, it returns a single item. 
    This item is the result of a reduction function

    Examples of reduce:
      array.join(' ');
      Sum a few numbers

    Reduce takes a callback, with 2-4 parameters
      1: Accumulator - This keeps track of the current value of your reduction method so far
      2: Item you're currently at
      3: Index you're currently at
      4: The entire array

      The value returned by your callback will be the value of the accumulator at the NEXT item you're going to look at

      The reduce method itself also takes 1 addition parameter
      This will be the initial value of the accumulator

    Again, when reduce is finished just one value will be returned

*/

// Sum an array of numbers
let numAry = [10, 25, 32, 47];
let startingValue = 0;
let sum = numAry.reduce((accumulator, num) => {
  return accumulator + num;
}, startingValue);
// Execution for our example:
/*
  Item 1: Accumulator = 0, item 1 = 10. Return result will be 0 + 10
  Item 2: Accumulator = 10, item = 25. Return result will be 10 + 25
  Item 3: Accumulator = 35, item = 32. Return result will be 35 + 32
  Item 4: Accumulator = 67, item = 47. Return result will be 67 + 47
  Final value: 114
*/

// Recreate the join method
// Convert a split string into a joined string using reduce
let wordAry = ['Sentence', 'for', 'testing', 'purposes', 'only'];
// We want to generate 'Sentence for testing purposes only'

let combinedWords = wordAry.reduce((acc, word) => {
  if (acc === '') {
    return word;
  } else {
    return `${acc} ${word}`;
  }
}, '');
/*
  Execution for join
  Item 1: Accumulator: '', item 'Sentence', Return result = 'Sentence'
  Item 2: Accumulator: 'Sentence', item 'for', Return result = 'Sentence for'
  Item 3: Accumulator: 'Sentence for', item 'testing', Return result = 'Sentence for testing'
  Item 4: Accumulator: 'Sentence for testing', item 'purposes', Return result = 'Sentence for testing purposes' 
  Item 5: Accumulator: 'Sentence for testing purposes', item 'only', Return result =
  'Sentence for testing purposes only' 
  Final value: 'Sentence for testing purposes only
*/

// Recreate max using reduce
let nums = [1, 8, 29, 5, 28, 58, 24, 38];

// Math.max(num1, num2)
// if(num1 > num2)
//   return num1
let maxNum = Math.max(...nums);
let maxNum = nums.reduce((acc, num) => {
  //  return Math.max(acc, num); // 1 liner. Whichever item is the largest of the 2 gets assigned to the accumulator for the next item
  // if (acc > num) {
  //   return acc;
  // } else {
  //   return num;
  // }
  return acc > num ? acc : num;
}, nums[0]);
/*
  Execution ourMax:
  Item1: acc 1,   item 1,  next value 1
  Item2: acc 1,   item 8,  next value 8
  Item3: acc 8,   item 29, next value 29
  Item4: acc 29,  item 5,  next value 29
  Item5: acc 29,  item 28, next value 29
  Item6: acc 29,  item 58, next value 58
  Item7: acc 58,  item 24, next value 58
  Item8: acc 58,  item 38, next value 58
  Final value: 58
*/

// Find the total length of an array of strings
let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Peach', 'Pear', 'Plum'];

let sumOfLengths = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
/*
  execution sumOfLengths
  Item1: Acc: 0    Item: Apple  Length: 5 Next value 0+5
  Item2: Acc: 5    Item: Banana Length: 6 Next value 5+6
  Item3: Acc: 11   Item: Mango  Length: 5 Next value 11+5
  Item4: Acc: 16   Item: Orange Length: 6 Next value 16+6
  Item5: Acc: 22   Item: Peach  Length: 5 Next value 22+5
  Item6: Acc: 27   Item: Pear   Length: 4 Next value 27+4
  Item7: Acc: 31   Item: Plum   Length: 4 Next value 31+4
  Final Value: 35

*/

// Generate a list of concatenated words, with a - between each word
const words = [
  'forklift',
  'bale',
  'raindrop',
  'mule',
  'code',
  'function',
  'java',
  'fedora',
  'radio',
  'factoid',
  'raspberry',
  'fluke',
  'curveball',
  'fang',
  'boot',
  'fastball',
  'trap',
  'paperclip',
  'pin',
  'food',
  'gondola',
  'fist',
  'bulldog',
  'zebra',
  'fort',
  'kindling',
  'fur',
  'banana',
  'fuse',
  'boat',
  'stapler',
  'fool',
  'cherry',
  'wisdom',
  'fund',
  'artichoke',
  'husk',
  'five',
  'book',
  'fan',
  'code',
  'function',
  'java',
  'fedora',
  'sparks',
  'radio',
  'saxophone',
  'cab',
  'fluke',
  'curveball',
  'cat',
  'fang',
  'javascript',
  'ax',
  'boot',
  'fastball',
  'truck',
  'apples',
  'banana',
  'blueberry',
  'cherry',
  'grape',
  'grapes',
  'garage',
  'kiwi',
  'lemon',
  'orange',
  'doggie',
  'lime',
  'popsicle',
  'violin',
  'mango',
  'nectarine',
  'oranges',
  'peach',
  'bluebird',
  'plum',
  'zipper',
  'pear',
  'papaya',
  'pineapple',
  'raspberry',
  'turkey',
  'giblet',
  'strawberry',
  'toy',
  'tangerine',
  'watermelon',
  'ox',
  'parade'
];

let combos = words.reduce((arr, word, i, a) => {
  // How to concatenate strings: either interpolation or + operation
  if (a[i + 1]) {
    // If we're not at the last item
    let combinedWord = `${word}-${a[i + 1]}`;
    if (combinedWord.length === 13) {
      arr.push(combinedWord);
    }
  }
  return arr; // Set the value of the accumulator for the next item
}, []); // Second parameter of reduce is what the first argument for the callback will start off as
/*
  combos execution:
    Item1: Acc: []   
           Item: forklift  
           Combined Item: forklift-bale 
           Next value: [forklift-bale]
    Item2: 
           Acc: [forklift-bale] 
           Item: bale 
           Combined Item: bale-raindrop 
           Next value: [forklift-bale, bale-raindrop]
    Item3: 
           Acc: [forklift-bale, bale-raindrop]    
           Item: raindrop  
           Combined Item: raindrop-mule 
           Next value: [forklift-bale, bale-raindrop, raindrop-mule]
    Item4:
           Acc: [forklift-bale, bale-raindrop, raindrop-mule]
           Item: mule
           Combined Item: mule-code // Doesn't have a length of 13, so we don't add it
           Next value: [forklift-bale, bale-raindrop, raindrop-mule]


*/
