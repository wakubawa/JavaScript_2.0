
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(e) {
    console.log(e.key);
    document.querySelector('.i-1').value = e.key;
    document.querySelector('.out-1').innerHTML = e.key;
}
document.querySelector('.i-1').onkeypress = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    e.preventDefault();
    console.log(e);
    document.querySelector('.i-2').value = e.keyCode;
    document.querySelector('.out-2').innerHTML = e.keyCode;
}
document.querySelector('.i-2').onkeypress = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
    e.preventDefault();
    document.querySelector('.i-3').value = e.key;
    if (e.key.match(/[0-9]/)){
        document.querySelector('.out-3').innerHTML = false;
    } else {
        document.querySelector('.out-3').innerHTML = true;
    }
}
document.querySelector('.i-3').onkeydown = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(e) {
    e.preventDefault();
    document.querySelector('.i-4').value += e.key;
    document.querySelector('.out-4').innerHTML += e.key.toLowerCase();
}
document.querySelector('.i-4').onkeydown = t4;

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(e) {
    e.preventDefault();
    document.querySelector('.i-5').value += e.key;
    document.querySelector('.out-5').innerHTML += e.key.toUpperCase();
}
document.querySelector('.i-5').onkeydown = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(e) {
    e.preventDefault();
    document.querySelector('.i-6').value += e.key.toLowerCase();
    document.querySelector('.out-6').innerHTML += e.key.toLowerCase();
}
document.querySelector('.i-6').onkeydown = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = [];
function t7(e) {
    e.preventDefault();    
    a7.push(e.key);
    document.querySelector('.i-7').value += e.key;
    document.querySelector('.out-7').innerHTML += a7[Math.floor(Math.random() * a7.length)];
}
document.querySelector('.i-7').onkeydown = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
    e.preventDefault();
    switch (e.key) {
        case 'i' : document.querySelector('.i-8').value += 1; 
        break;
        case 'o' : document.querySelector('.i-8').value += 0;
        break;
        default : document.querySelector('.i-8').value += e.key;
    }  
}
document.querySelector('.i-8').onkeydown = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let i_9 = 0;
function t9(e) {
    e.preventDefault();
    if (e.key == 'ArrowDown') {
        i_9++;
        console.log(i_9);
        document.querySelector('.i-9').value = i_9;
        document.querySelector('.out-9').innerHTML = i_9;
    }
}

// ваше событие здесь!!!
document.querySelector('.i-9').onkeydown = t9;

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let h_10 = 64, w_10 = 64;
function t10(e) {
    e.preventDefault();
    switch (e.key) {
        case 'ArrowDown' : h_10--;
        document.querySelector('.div-10').style.height = h_10 + 'px';
        document.querySelector('.div-10').querySelector('img').style.height = h_10 + 'px';
        break;
        case 'ArrowUp' : h_10++;
        document.querySelector('.div-10').style.height = h_10 + 'px';
        document.querySelector('.div-10').querySelector('img').style.height = h_10 + 'px';
        break;
        case 'ArrowLeft' : w_10--;
        document.querySelector('.div-10').style.width = w_10 + 'px';
        document.querySelector('.div-10').querySelector('img').style.width = h_10 + 'px';
        break;
        case 'ArrowRight' : w_10++;
        document.querySelector('.div-10').style.width = w_10 + 'px';     
        document.querySelector('.div-10').querySelector('img').style.width = h_10 + 'px';    
        break;
    }
}
document.querySelector('.i-10').onkeydown = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

let lastKey = '';
function t11(e) {
    e.preventDefault();    
    if (lastKey != '') document.getElementById(lastKey).classList.toggle('active');
    if (lastKey == e.key) {
        document.getElementById(lastKey).classList.remove('active');
        lastKey = '';
        return;
    }    
    switch (e.key) {
        case 'ArrowDown' : document.getElementById('ArrowDown').classList.toggle('active');
        break;
        case 'ArrowUp' : document.getElementById('ArrowUp').classList.toggle('active');   
        break;
        case 'ArrowLeft' : document.getElementById('ArrowLeft').classList.toggle('active');   
        break;
        case 'ArrowRight' : document.getElementById('ArrowRight').classList.toggle('active');  
        break;
    }
    lastKey = e.key;
}
document.querySelector('.i-11').onkeydown = t11;
// ваше событие здесь!!!
