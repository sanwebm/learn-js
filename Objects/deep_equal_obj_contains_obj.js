'use strict';

let a = {
    name: 'Misha',
    order: {
        price: 20
    },
};

let b = {
    name: 'Misha',
    order: {
        price: 20,
    }
};

//Object.defineProperty(b.order, "price", {
//    writable: false,
//});



deepEqual(a, b);


function deepEqual(a, b) {

    // проходим по всем свойствам объекта a -- первый уровень
    for(let key in a){

        // проверяем только свои свойста без прототипов, for..in перебирает как свои, так и унаследованные свойства
        if (!a.hasOwnProperty(key)) continue;

        // если в этом свойстве не объект
        if( typeof a[key] !== 'object' && typeof b[key] !== 'object') {

            //для объекта a и b получаем из свойства key их декскрипторы
            let descriptorA = getDescriptor(a, key);
            let descriptorB = getDescriptor(b, key);

            // если дескрипторы не равны, то и объекты не равны
            if( !compareDescriptors(descriptorA,descriptorB) ) return false;

        }
        // если в этом свойстве есть объект
        if( typeof a[key] === 'object' && typeof b[key] === 'object') {

            // сравниваем теперь новые объекты obja и objb, полученные из свойсвтва a[key] и b[key]
            let obja=a[key], objb=b[key];

            // проходим по всем свойствам объекта obja -- второй уровень
            for(let key in obja){

                //для объекта obja и objb получаем из свойства key их декскрипторы
                let descriptorA = getDescriptor(obja, key);
                let descriptorB = getDescriptor(objb, key);

                // если дескрипторы не равны, то и объекты не равны
                if( !compareDescriptors(descriptorA,descriptorB) ) return false;
            }

        }

    }
    return true
}


// Сравниваем строковые значения и все флаги в дескрипторах
function compareDescriptors(descriptorA,descriptorB) {
    for (let prop in descriptorA) {
        // сравниваем каждое свойство из дескриптора descriptorA с descriptorB
        // если они не равны, то объекты не равны тоже
        if (descriptorA[prop] !== descriptorB[prop]) return false
    }
    return true
}

// получили объект дескриптор свойства: он содержит значение свойства и все его флаги для object[propertyName]
function getDescriptor(object,propertyName) {
    return Object.getOwnPropertyDescriptor(object, propertyName);
}









