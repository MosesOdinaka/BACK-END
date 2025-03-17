// export default function appendToEachArrayValue(array, appendString) {
//     for (var idx in array) {
//         var value = array[idx];
//         array[idx] = appendString + value;
//     }

//     return array;
// }

// Rewrite.
export default function appendToEachArrayValue(array, appendString) {
    for (const [idx, value] of array.entries()) {
        array[idx] = appendString + value;
    }
    return array;
}
