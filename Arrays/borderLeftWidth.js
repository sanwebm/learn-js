// Fn Converts css property border-left-width and returns borderLeftWidth

str = 'border-left-width';

function camelize(str){
     return str .split('-')
                .map( (word,index)=>{
                    if (index==0) return word;
                    return word.charAt(0)
                               .toUpperCase()
                               +word.slice(1)
                })
                .join('')
}

console.log( camelize(str) );
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log( camelize("-webkit-transition"));