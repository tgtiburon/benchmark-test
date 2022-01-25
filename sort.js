const bubbleSort = (arr) => {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for( let i = 0; i< arr.length -1 ; i++)  {
            // compare current element to next element
            if (arr[i]> arr[i+1]) {
                // swap the two elements
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1]  = temp;

                // flag as not sorted to run loop again
                sorted = false;
            }
        }
    }
    return arr;
};


const quickSort = (arr) => {
    // use first index as the pivot point
    const pivot = arr[0];
    const left = [];
    const right = [];

    // start at index 1 to ignore pivot point
    for(let i=1; i < arr.length; i++) {
        // push into different arrays based on value relative to pivot
        if(arr[i]<= pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    // merge the arrays and pivot together
    return left.concat(pivot, right);
};

module.exports = { bubbleSort, quickSort };