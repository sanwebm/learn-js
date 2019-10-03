// Fn makes Random number from min to max
let random = (min=0,max=1) =>{
    return ( min+Math.random()*(max-min) )
    //return ( Math.floor ( min+Math.random()*(max+1-min) ) )
}

alert(`Random number:  ${random(10,15)} `);