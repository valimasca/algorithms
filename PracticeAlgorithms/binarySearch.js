// Binary search
//set up array of 100 items

let arr = [];
let i = 199;

for(let x = 0; x < 100; x++){
    arr.push(i)
    i -= 2;
}

arr = arr.reverse();

console.log(arr);

function binarySearch(items, item){
    //any code that you write is an alghorithm
    let low = 0;
    let high = items.length - 1;

    while (low <= high){
        let mid = parseInt((low + high) / 2);
        let guess = items[mid];
        if(guess == item) {
            return mid;
        } else if (guess < item){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 73))