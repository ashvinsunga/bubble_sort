// THE GOAL OF THIS FUNCTION
// Pseudocode
// Start looping from the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until -1
// if arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

// First Solution
// function bubbleSort(arr){
//     for(var i = arr.length; i > 0; i--){
//         for(var j = 0; j < i - 1; j++){
//         console.log(arr, arr[j], arr[j+1]);
//             if(arr[j] > arr[j+1]){
//             var temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;         
//             }
//         }
//     }
// return arr;
// }

// ES2015 Version
// function bubbleSort(arr){
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j+1]);
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;         
            }
        }
    if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([8,1,2,3,4,5,6,7]));