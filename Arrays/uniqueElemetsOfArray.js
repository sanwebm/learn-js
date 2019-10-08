// Unique Elements Of Array

function unique(arr) {

    let unique_arr =[];

    for(let str of arr){
        if ( !unique_arr.includes(str) ) unique_arr.push(str);
    }

    return unique_arr

}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O