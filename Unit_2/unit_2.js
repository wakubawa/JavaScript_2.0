let inputIn = document.querySelector('.input_in');
let button = document.querySelector('button');

button.onclick = function() {
    console.log('РАБОТАЕТ');
    /* console.log(inputIn.value); */
    let b = +inputIn.value;
    console.log(b);
}
// task1
let a = 7, b = 9;
console.log(a +' * ' + b + ' = ' + (a * b));

// task2
let c = 7, d = 9;
console.log(c + ' / ' + d + ' = ' + (c / d));

// task3
let e = 3, f = 5;
console.log(e + ' + ' + f + ' = ' + (e + f));

//task4
let e1 = '3', f1 = 5;
console.log(e1 + ' + ' + f1 + ' = ' + (e1 + f1));

//task5
let e2 = 3, f2 = 0;
console.log(e2 + ' / ' + f2 + ' = ' + (e2 / f2));

//task6
let e3 = 3, f3 ='Hello';
console.log(e3 + ' + ' + f3 + ' = ' + (e3 + f3));

//task7
let e4 = 3, f4 ='Hello';
console.log(e3 + ' * ' + f3 + ' = ' + (e3 * f3));

//task8
let inp_task8 = document.querySelector('.input_task8');
let button_task8 = document.querySelector('.button_task8');
let inp_value8;

button_task8.onclick = function() {
    inp_value8 = inp_task8.value;
    alert('NAGATA KNOPKA i vvveden tekst' + inp_value8);
    inp_task8.value = '';
}

//task9
let inp_task9 = document.querySelector('.input_task9');
let button_task9 = document.querySelector('.button_task9');
let p_task9 = document.querySelector('.p_task9');
let inp_value9;


button_task9.onclick = function() {
    inp_value9 = inp_task9.value;
    p_task9.innerHTML += (inp_value9);
    inp_task9.value = '';
}

//task10
let inp_task10 = document.querySelector('.input_task10');
let button_task10 = document.querySelector('.button_task10');
let p_task10 = document.querySelector('.p_task10');
let inp_value10;


button_task10.onclick = function() {
    inp_value10 = inp_task10.value;
    p_task10.innerHTML = inp_value10 * 10;
    inp_task10.value = '';
}

//task11
let inp_task11 = document.querySelector('.input_task11');
let button_task11 = document.querySelector('.button_task11');
let p_task11 = document.querySelector('.p_task11');
let inp_value11;


button_task11.onclick = function() {
    inp_value11 = inp_task11.value;
    p_task11.innerHTML += inp_value11;
    inp_task11.value = '';
}

//task12
let inp_task12_name = document.querySelector('.input_task12_name');
let inp_task12_surname = document.querySelector('.input_task12_surname');
let button_task12 = document.querySelector('.button_task12');
let p_task12 = document.querySelector('.p_task12');
let inp_value12;


button_task12.onclick = function() {
    inp_value12 = inp_task12_name.value + ' ' + inp_task12_surname.value;
    p_task12.innerHTML = 'Hello ' + inp_value12;
    inp_task12_name.value = '';
    inp_task12_surname.value = '';
}

//task13
let input_task13_a = document.querySelector('.input_task13_a');
let input_task13_b = document.querySelector('.input_task13_b');
let button_task13 = document.querySelector('.button_task13');
let p_task13 = document.querySelector('.p_task13');
let inp_value13;


button_task13.onclick = function() {
    inp_value13 = Number(input_task13_a.value) + Number(input_task13_b.value);
    p_task13.innerHTML = input_task13_a.value + ' + ' + input_task13_b.value + ' = ' + inp_value13;
    input_task13_a.value = '';
    input_task13_b.value = '';
}

//task14
let input_task14 = document.querySelector('.input_task14');
let button_task14 = document.querySelector('.button_task14');
button_task14.onclick = function() {
    document.querySelector('.input_task14').value = 'Hello';
}

//task15
let input_task15 = document.querySelector('.input_task15');
let button_task15 = document.querySelector('.button_task15');
button_task15.onclick = function() {
    input_task15.style.border = '2px solid red';
}

//task16
let input_task16_a = document.querySelector('.input_task16_a');
let input_task16_b = document.querySelector('.input_task16_b');
let button_task16 = document.querySelector('.button_task16');
let p_task16 = document.querySelector('.p_task16');
let inp_value16;


button_task16.onclick = function() {
    inp_value16 = Number(input_task16_a.value) + Number(input_task16_b.value);
    p_task16.innerHTML = input_task16_a.value + ' + ' + input_task16_b.value + ' = ' + inp_value16;
    input_task16_a.value = '';
    input_task16_b.value = '';
}

//task17
let inp_task17 = document.querySelector('.input_task17');
let button_task17 = document.querySelector('.button_task17');
let p_task17 = document.querySelector('.p_task17');

button_task17.onclick = function(){
    t = inp_task17.value;
    t = parseInt(t);
    console.log(t);
    p_task17.innerHTML = t;
}

//task18
let inp_task18 = document.querySelector('.input_task18');
let button_task18 = document.querySelector('.button_task18');
let p_task18 = document.querySelector('.p_task18');

button_task18.onclick = function(){
    t = inp_task18.value;
    t = parseFloat(t);
    console.log(t);
    p_task18.innerHTML = t;
}
//task19
let input_task19_a = document.querySelector('.input_task19_a');
let input_task19_b = document.querySelector('.input_task19_b');
let button_task19 = document.querySelector('.button_task19');
let p_task19 = document.querySelector('.p_task19');
let inp_value19;


button_task19.onclick = function() {
    let task19_a = parseInt(input_task19_a.value);
    let task19_b = parseInt(input_task19_b.value);
    inp_value19 = task19_a +  task19_b;
    p_task19.innerHTML = input_task19_a.value + ' + ' + input_task19_b.value + ' = ' + inp_value19;
    input_task19_a.value = '';
    input_task19_b.value = '';
}

//task20
let input_task20_1 = document.querySelector('.input_task20_1');
let input_task20_2 = document.querySelector('.input_task20_2');
let input_task20_3 = document.querySelector('.input_task20_3');
let button_task20 = document.querySelector('.button_task20');
let p_task20 = document.querySelector('.p_task20');

button_task20.onclick = function() {
    p_task20.innerHTML = input_task20_1.value + ' ' + input_task20_2.value + ' ' + input_task20_3.value;
}