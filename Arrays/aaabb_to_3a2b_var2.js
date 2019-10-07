let str = "ggggaaabbeccddd";

function fn(str) {

    return str
            .split('')
            .reduce(function (out, current) {

                ({num, char, res, lst, total} = out);

                if (char !== current) {
                    res = res + num + char;
                    num = 1;
                    char = current;
                    lst = num + current
                } else {
                    num++;
                    lst = num + char
                }
                return {
                    num: num,
                    char: char,
                    res: res,
                    lst: lst,
                    total: [`${this.res}${this.lst}`]
                }
            }, {
                num: 0,
                char: str[0],
                res: '',
                lst: '',
                total: ''
            })
            .total
             + ''
}

console.log(fn(str));