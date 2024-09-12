var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr1 = [2, 3, 5, 7];
var arr2 = ['one', 'two', 'three'];
var arr3 = [true, 2, 3, 'five'];
// function reverseArrayNumber(arr: number[]) {
//     return [...arr].reverse()
// }
// function reverseArrayString(arr: string[]) {
//     return [...arr].reverse()
// }
// console.log(reverseArrayNumber(arr1))
// console.log(arr1)
// console.log(reverseArrayString(arr2))
// console.log(arr2)
// console.log(reverseArray(arr3))
// console.log(arr3)
// console.log(reverseArray(42))
function reverseArray(arr) {
    return __spreadArray([], arr, true).reverse();
}
console.log(reverseArray(arr1));
console.log(arr1);
console.log(reverseArray(arr2));
console.log(arr2);
console.log(reverseArray(arr3));
console.log(arr3);
// console.log(reverseArray(42))
