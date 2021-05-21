// function sumNumbers(numbers){
//    return numbers[0] + numbers[1] + numbers[2];

// }


//number = [1, 3, 10]
// function sumNumbers(numbers){
//     let result = 0; // runs once
//     for(const number of numbers){ // runs once
//         result += number; // runs 3 times: 3 => n
//     }
//     return result; //runs once
//  }

// console.log(sumNumbers([1, 3, 10]));


//number = [1, 3, 10, 50]
function sumNumbers(numbers){
    let result = 0; // runs once
    for(const number of numbers){ // runs once
        result += number; // runs 4 times: 4 => n
    }
    return result; //runs once
 }

 // T = 1 + 1 + 1 + n = 3 + n = 3 + 1*n;
 // T = 1 * n
 // T = n => 0(n) => Linear Time Complexity

console.log(sumNumbers([1, 3, 10, 50]));