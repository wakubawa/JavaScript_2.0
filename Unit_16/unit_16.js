// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for (let i. Выведите на страницу в .out-1 формате значение+пробел.

let a1 = [5,7,9, 11, 13, 15];

function f1() {
    let out_1 = '';
    for (let i = 0; i < a1.length; i++){
        out_1 += a1[i] + ' ';
    }
    document.querySelector('.out-1').innerHTML = out_1;
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for (let i. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.

let a2 = [5,7,9, 11, 13, 15];

function f2() {
    let out_2 = '';
    for (let i = 0; i < a2.length; i++){
        out_2 += i + ' - ' + a2[i] + ', ';
    }
    document.querySelector('.out-2').innerHTML = out_2;
}

document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.

function f3() {
    let div_3 = document.getElementsByClassName('out-3');
    for (let i = 0; i < div_3.length; i++){
        div_3[i].innerHTML = 3;
    }

}

document.querySelector('.b-3').addEventListener('click', f3);


// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.

function f4() {
    let div_4 = document.querySelectorAll('.out-4');
    for (let i = 0; i < div_4.length; i++){
        div_4[i].innerHTML = 4;
    }

}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.

let a5 = [3,4,5,2,1,7,8,2,4,6,8,11,23,17];
let out_5 = [];
function f5() {
    for (let key of a5){
        if (key > 7) out_5.push(key);
    }
    return out_5;
}

document.querySelector('.b-5').addEventListener('click', ()=> {
    document.querySelector('.out-5').innerHTML = f5();
});

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [[1,2], [3,4], [5,6]];

function f6() {
    let out = '';
    for (let i = 0; i < a6.length; i++){
        for (let k = 0; k < a6[i].length; k++){
            out += a6[i][k] + ' ';
        }
    }
    document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать результирующий массив.

let a7 = [{ id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f7() {
    let out_7 = {};
    for (let i = 0; i < a7.length; i++){
        out_7[a7[i].id] = a7[i].name;
    }
    return out_7;
}

document.querySelector('.b-7').addEventListener('click', ()=>{
    console.log(f7());
});


// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.

let a8 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f8() {
    let out = [];
    for (let i of a8) {
        out.push(i.id)
    }
    return out;
}

document.querySelector('.b-8').addEventListener('click', ()=>{
    console.log(f8());
});

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.

let a9 = [ [4,3,2], [2,5], [0,0,0,0,0]];

function f9() {
    let max = 0;
    for (let i of a9){
        console.log(i.length);
        if (i.length-1 > max) max = i.length-1;
    }
    return max;
}

document.querySelector('.b-9').addEventListener('click', ()=>{
    document.querySelector('.out-9').innerHTML = f9();
});

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];

function f10() {
    let out = {};
    for (let i = 0; i < a10.length; i++){
        out[a10[i]] = a10[i];
    }
    return out;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
}

function f11() {
    let out_11='';
    for (let i in a11){
        if (a11[i] > 10) out_11 +=  a11[i] + ' ';
    }
    document.querySelector('.out-11').innerHTML = out_11;
}

document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

let a12 = [4,5,6,7];

function f12() {
    let out_12='';
    for (let i of a12){
       out_12 +=  i + ' ';
    }
    document.querySelector('.out-12').innerHTML = out_12;
}

document.querySelector('.b-12').addEventListener('click', f12);


// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символу в out-13 через пробел.

let a13 = 'testone';

function f13() {
    let out_13  ='';
    for (let i of a13){
        out_13 += i + ' ';
    }
    document.querySelector('.out-13').innerHTML = out_13;
}

document.querySelector('.b-13').addEventListener('click', f13);



// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4,5,6]);

function f14() {
    out_14 = '';
    for (key of a14){
        out_14 += key;
    }
    document.querySelector('.out-14').innerHTML = out_14 + ' ';
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).


function f15() {
    let a15 = document.querySelectorAll('.out-15');
    for (let key of a15){
        key.innerHTML = 15;
    }
}

document.querySelector('.b-15').addEventListener('click', f15);