// let name = 'mohim\'';
// let me ='good morning ';


// let html1 = `<h1> this is ${name} <p> this is my ${me} to you `;

// document.body.innerHTML = html1;

// function myButton{
//     document.getElementById('demo').style.display = 'block'
// }
// console.log(myButton);

// let arr = new Array(23,45,67,78,'orange');

// console.log(arr);

// arr[0] = 'mohim'
// console.log(arr);

// console.log(Array.isArray(arr));

// arr.push(34);
// console.log(arr);

// arr.unshift(1009);
// console.log(arr);

// arr.pop(34);
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.splice(1,2);
// console.log(arr);

// arr.reverse();
// console.log(arr);

// let marks = [1,2,3];
// arr = arr.concat(marks);
// console.log(arr);

// let myobj = {
//     name: 'mohim',
//     channel: 'codewithmohim',
//     status: true,
//     marks :[1,3,45,56]
// }
// console.log(myobj);

// let age = 18;
// let doesDrive = true;
// let vari = 34;

// if( age == 29){
//     console.log('age is 19');
// }
// else if( age === 19 ){
//     console.log('age is not right');

// }
// else{
//     console.log('age is not 19');
// }

// if( typeof vari !== 'undefined'){
//     console.log('vari is defined');
// }
// else{
//     console.log('vari is no defined');
// }
// if(doesDrive || age>18){
//     console.log('You can drive');
// }
// else{
//     console.log('You cannot drive');
// }

// switch (age) {
//     case 18:
//         console.log('You are 18');
//         break;

//         case 28:
//         console.log('You are 28');
//         break;

//         case 38:
//         console.log('You are 38');
//         break;
//     default:
//         console.log('You are 18');
//         break;
// }
// for (let i = 0; i<100; i++) {
//     console.log(i);
// }
// let j = 0;
// while (j < 100) {
//     console.log(j + 1);
//     j += 1;
// }

// let k = 0

// do{
//     if(k === 5){
//         k +=1;
//         continue;
//     }
//     console.log(k + 1);
//     k +=1;

// }while (k < 10);

// let arr = [2,4,56,78];

// arr.forEach(function(element) {
//     console.log(element);
// });

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// let obj = {
//     name:'mohim',
//     status:true,
//     fruit:'apple'
// }
// for (let key in obj) {

//     console.log(`The ${key} of object is ${obj[key]}`);

// }

// let name = 'mohim'

// let name2 = 'harry'

// const mygreet = function(name,thank='thanks') {
//     let msg = `happy birthday to ${name}  ${thank}`;
//     return msg;
// }

//  let val = mygreet(name,'thanks a lot');
//  console.log(val);

// let obj = {
//     name:'mohim',
//     game:function() {
//         return 'gta';
//     }

// }
// console.log(obj.game());

// let arr = [2,4,56,78,'go'];

// arr.forEach(function(elment, index, array) {
//     console.log(elment, index , array);
// });

// {
// var i = 250;
// console.log(i);
// }

// function mi(name){

//     let i = 10;
//     console.log(i);
//     return `this is mi ${name}`;
// }
// console.log(mi('harry'),i);

// let k = document.links;

// Array.from(k).forEach(function (element) {
//     console.log(element);

// });

// if(k === '#'){
//     console.log(k);
// }
// else if(k != '#'){
//     console.log('not okay');
// }
// else{
//     console.log('its okay');
// }
// let k = document.querySelector('.main-container');

// let nodeName = k.childNodes[3].nodeName;
// let nodeType = k.childNodes[3].nodeType;

// console.log(nodeName);
// console.log(nodeType);

// console.log(k.children[2].children[0].children);

// console.log(k.firstElementChild.parentNode.children[0].nextElementSibling);

// let element = document.createElement('li');

// element.setAttribute('title', 'mytitle');
// element.className='child';
// element.id ='nice';
// element.innerText ='hello this is me'
// console.log(element);

// let ul = document.querySelector('.footer-links');
// ul.appendChild(element);
// console.log(element);

// let elems = document.createElement('h3');

// elems.id = 'elems2';
// elems.className = 'elems2';
// elems.style.color = 'white'
// let tnode = document.createTextNode('this is me');
// elems.appendChild(tnode);
// element.replaceWith(elems);


// let myul = document.getElementById('myul');
// myul.replaceChild(elems,document.getElementById('fui'));

// myul.removeChild(document.getElementById('lui'));

// let pr = elems.removeAttribute('id');

// console.log(elems, pr);

// let a = document.createElement('a');
// a.className = 'me';
// a.id = 'may';
// a.innerText = 'Go to codewithharry';
// a.setAttribute('href', 'https://codewithharry.com')

// let ul = document.querySelector('.footer-links');

// ul.appendChild(a);

// console.log(a);

// document.getElementById('fui').addEventListener(
//     'mouseover',function(e) {
//         let variable;
//         console.log('you have clicked');
//         variable = e.target;
//         variable = e.target.className;
//         variable = e.offsetX;
//         variable = e.offsetY;
//         console.log(variable);
//     }
// // )

// let str = '#';
// let links = document.links;

// let href;
// Array.from(links).forEach(function(element){

//     href = element.href;
//     if(href.includes(str)){
//         console.log(href);
//     } 
// })

// let array = ['mohim' ,'fahim' ,'rohim'];

// localStorage.setItem('name', 'mohim');
// localStorage.setItem('age' , '32');
// localStorage.setItem('name2' , JSON.stringify(array);


// let get = localStorage.getItem('name');

// get = JSON.parse(localStorage.getItem('name2'));

// console.log(get);


// sessionStorage.setItem('name', 'smohim');
// sessionStorage.setItem('age' , 's32');
// sessionStorage.setItem('name2' , JSON.stringify(array));
let open = document.getElementById('demo');
let hide = document.getElementById('hide');
let menuBar = document.getElementById('menu');
let menuIcon = document.getElementById("menuIcon");
menuBar.addEventListener("click", function(e) {
    if (open.style.top == '209px') {
        open.style.top = '-9999px';
        hide.style.zIndex = '1';
        menuIcon.src = "/images/icon-hamburger.svg";
    }
    else {
        open.style.top = '209px';
        hide.style.zIndex = '-1';
        menuIcon.src = "/images/icon-close.svg";
    }
});



