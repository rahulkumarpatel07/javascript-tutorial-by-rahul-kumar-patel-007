// Check a number is interger
// const n = 10.7;
// function checkInterger(n) {
//     return n % 1 === 0;
// }
// console.log(checkInterger(n));

// dublicate([1,2,3,4,5]);
// const arr = [1,2,3,4,5];
// function dublicate(arr) {
//     let arr1 = arr;
//     let arr2 = [...arr,...arr1];
//     return arr2;
// }
// console.log(dublicate(arr));

// console.log(mul(2)(3)(4));
function mul(x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        }
    }
}

console.log(mul(2)(3)(4));