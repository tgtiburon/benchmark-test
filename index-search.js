const { linearSearch, binarySearch }   = require('./search');
const Benchmark = require('benchmark');

const maxArray = 4 * 1000000;

console.log('--------------------------');
console.log(`Testing an array of ${maxArray} size.`);
const numbers = []  ;
for (let i = 1; i <= maxArray; i++) {
    // populate the array with numbers 1 to 1,000,000
    numbers.push(i);
}

// grab the last number in the array as the number we want to find
// worst case for linear
const target = numbers[numbers.length-1]; 
// best case for linear
//const target = numbers[0];

const suite = new Benchmark.Suite;



suite 
    .add('linear search', function() {
        // benchmark generating a random number
        linearSearch(numbers, target);
    })
    .add('binary search', function() {
        binarySearch(numbers, target, 0, numbers.length -1);
    })
    .on('complete', function() {
        // print the test's name and average time in milliseconds
       // console.log(`${this[0].name} averaged ${this[0].stats.mean*1000} milliseconds.`);
       // for multiple tests, loop over and print each test result
       this.forEach(result => {
           console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`);
           
       });
    })
    .run();
