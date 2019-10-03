// Fn Checks if the input string is a real number.
let readNumber = () =>{
    let user_input = prompt("Input number: ", '');

    //  Cancel or empty string
    if ( (user_input === null) || (user_input === '') ) return null;

    // Real number coming in, exclude 'Infinity', Error on '3232sdfsf' as parseFloat substring starting number
    //if ( !isNaN( parseFloat(user_input) ) & user_input != 'Infinity'  & user_input != '-Infinity' ) return  +parseFloat(user_input);

    // With RegExp. Check string for only DECIMAL numbers, integer or with floating-point value
    // if ( user_input.match(/^-?\d+\.?\d*$|^\d*\.?\d+$/gi) ) return +parseFloat(user_input);

    if ( isFinite(user_input) ) return  +parseFloat(user_input);

    // Repeat while not a number
    return readNumber();

}

alert(`Number:  ${readNumber()} `);