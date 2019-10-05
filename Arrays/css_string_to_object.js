// Code goes here

let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
    str = str.replace(/\r|\n/g, '');
    str = str.slice(0, -1);
    var arr = str.split('; ');
    var obj = {};
/*
    var obj = {
        [Symbol.iterator](){
            let index=0;
            return {
                next : () => {
                    if( index < this.length ){
                        const myValue = this[index++];
                        return {done: false, value: myValue}
                    }
                    return { done: true}
                }
            }
        }

    };
*/



    arr.forEach(function(property) {
        var cssLine = property.split(':');
        obj[cssLine[0].trim()] = cssLine[1].trim();
    });


    return obj;
}


console.log( JSON.stringify( styleToObject(style) ) );