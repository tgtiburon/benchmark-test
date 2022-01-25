const Benchmark = require('benchmark');
const { bubbleSort, quickSort } = require('./sort');

const numbers = [];
const maxNumber = 1 * 10000;

console.log('-----------------------');
console.log(`MaxNumber is ${maxNumber}`);

for (let i = 0; i < maxNumber; i++) {       
    numbers.push(Math.floor(Math.random()*maxNumber)+1 );


}

const suite = new Benchmark.Suite;


suite 
    .add('bubble sort', function() {
        const testArray = [ ...numbers];
        bubbleSort(testArray);

    })
    .add('quick sort', function() {
        const testArray = [ ...numbers];
        quickSort(testArray);    
    })
    .on('complete', function() {
        this.forEach(result => {
            console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`);
        })

    })
    .run();