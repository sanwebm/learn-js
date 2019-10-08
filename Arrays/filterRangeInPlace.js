//Fn filters range between array of integers and returns array with only succeed values

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, range_from, range_to){
    arr.forEach( (item,index,arr) => {
        if ( range_from > item || item > range_to ) {
            arr.splice(index,1);
        }
    })
}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
console.log( arr ); // [3, 1]