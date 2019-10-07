let str="aaabbeccddd";

function fn(str){

    let arr = Array.from(str);
    let result = arr.reduce(function(result_iter,current,i,arr){

        ({num,char,str} = result_iter);

        if ( current === char) {
            num++;
            if ( arr[i] !== arr[i+1] ) str += num + char;
        }

        if (current !== char) {
            num = 1;
            char = current;
            if ( arr[i] !== arr[i+1] ) str += num + char;
        }

        return {
            num: num,
            char: char,
            str: str
        }
    },{
        num:0,
        char:arr[0],
        str:''
    });

    return result.str
}

console.log( fn(str) );