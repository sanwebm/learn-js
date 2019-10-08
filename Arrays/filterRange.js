//Fn filters rannge between array of integers and returns new succeed array

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr,range_from,range_to){
    return arr
        .filter( item => {
            return item >= range_from && item <= range_to
        })
}



console.log( filtered ); // 3,1 (совпадающие значения)
console.log( arr ); // 5,3,8,1 (без изменений)