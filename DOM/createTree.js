// Fn createTree which creates list ul/li from object

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementById('container');
createTree(container, data);

function createTree(container, obj) {
    //container.append(createTreeDom(obj));
    container.insertAdjacentElement("beforeend", getTree(obj));
}


function getTree(obj){

    if ( Object.getOwnPropertyNames(obj).length <1 ) {
        return
    }

    let ul = document.createElement('ul');

    for(let prop in obj){

        let li = document.createElement('li');
        li.textContent = prop;

        let ulLevelDown = getTree(obj[prop]);

        if (ulLevelDown) {
            li.insertAdjacentElement("beforeend", ulLevelDown);
        }

        ul.insertAdjacentElement("beforeend", li);

    }

    return ul
}

