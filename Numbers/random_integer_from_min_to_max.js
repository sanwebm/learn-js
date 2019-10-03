// Fn makes Integer Random number from min to max
let random = (min=0,max=1) =>{

    //Using binary operators (x << 0, x | 0, ~~x) instead of Math.floor() converts x into a two-complement
    // with much smaller range than Number.MAX_SAFE_INTEGER
    //return  min+( Math.random() * (max - min + 1) ) << 0

    return Math.floor(min + Math.random()*(max - min + 1) );

}

alert(`Random Integer number:  ${random(0,3)} `);