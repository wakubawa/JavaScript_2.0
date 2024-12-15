console.log('ILIY');
let currentDate = new Date();
console.log(currentDate);
console.log('Добро '+'пожаловать '+' на курс');
/* alert(2019);
alert(2019-200); */

document.getElementById('one').innerHTML = 'Hello WORLD';
document.getElementById('two').innerHTML = 12 * 12;
document.querySelector('.one').innerHTML = 'Hello WORLD';
document.querySelector('h2').innerText = 'WORLD';
document.querySelector('div.three').innerHTML = '<h3>Произвольный текст</h3>';
let zagolovok_4 = document.querySelector('.four');
zagolovok_4.innerHTML = '<h4>заголовок Х4</h4>';
zagolovok_4.innerHTML += '<p>параграф к заголовку 4</p>'
let a = 3.1415;
document.querySelector('.five').innerHTML = a;
let z1 = 6, z2 = 3;
document.querySelector('.six').innerHTML = '<p>' + z1 + ' * ' + z2 + ' = ' + (z1 * z2) + '</p>';
document.querySelector('.seven').innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';
let y1 = 6, y2 = 3;
document.querySelector('.eight').innerHTML = y1 + ' / ' + y2 + ' = ' + (y1 / y2);
let x1 = 'hello', x2 = 5;
document.querySelector('.nine').innerHTML = x1 + x2;
let d1 = document.querySelector('.ten');
console.log(d1);
let d2 = document.querySelector('.test');
console.log(d2);
d2 = 5;
console.log(d2);
let divS3 = document.querySelector('.s3');
console.log(divS3);
divS3 = document.querySelector('.s4');
console.log(divS3);
/* document.querySelector('body').innerHTML = ' '; */