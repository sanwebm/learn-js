import {Menu} from "./menu.js";

let m1 = new Menu({
    element: document.querySelector('.menu1'),
    title: 'Client Side',
    list: ['Angular', 'React', 'Vue']
});
let m2 = new Menu({
    element: document.querySelector('.menu2'),
    title: 'Server Side',
    list: ['NestJS', 'ExpressJS', 'Koa']
});


setTimeout( () => {
    m1.close();
    m2.hide();
},7000);