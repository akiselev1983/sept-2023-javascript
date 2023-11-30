// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a, b){
    return a*b;
};
console.log(areaRectangle(5,3));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r){
    return Math.PI*r*r;
};
console.log(areaCircle(2));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(h, r){
    return 2 * Math.PI * r * (h + r)
};
console.log(areaCylinder(4, 6));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент
function arr(array){
    for (const item of array){
        console.log(item);
    };
};
arr([11,22,33,44,55]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textMessage(text) {
    document.write(`<p>${text}</p>`);
};
textMessage('Hello world!!!!');
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function textMessage1(text) {
    document.write(`<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
    </ul>`);
};
textMessage1('hello');
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function textMessage2(text, a) {
    document.write(`<ul>`);
    for ( let i=0; i<a; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
textMessage2('world', 8);
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arr_list(arr) {
    for ( let arrElement of arr) {
        document.write(`<div>${arrElement}</div>`)
    };
};
let x = [1, 5, true, 'hello'];
arr_list(x);
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.
function arr1(array){
    for (const arrayElement of array) {
        document.write(`<div>
            <div>id - ${arrayElement['id']}</div> 
            <div>name - ${arrayElement['name']}</div>
            <div>age - ${arrayElement['age']}</div>
            <div>/////////////////////////////////</div>               
        </div>`)
    };
};
function arr2(array) {
    for ( let arrayElements of array) {
        document.write(`<div>`);
        for (let key in arrayElements) {
            document.write(`<p>${key} ${arrayElements[key]}</p>`)
        };
        document.write('</div>');
    };
};
let a = [
    {id: 1, name: 'vasya', age:23},
    {id: 2, name: 'tamara', age:27}
];
arr1(a);
arr2(a);
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву
function minNumber(array){
    let a = array[0];
    for (const arrayElement of array) {
        if (arrayElement < a){
            a = arrayElement;
        };
    };
    return a;
};
let b = [21,5,44,87,99,11,6,8,47,23];
console.log(minNumber(b));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13
function sum(arr){
    let res = 0;
    for (const arrElement of arr) {
        res += arrElement;
    };
    return res;
};
console.log(sum([1,2,10]));
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    for (let i = 0; i < arr.length; i++) {
        if (i === index1) {
            let index = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = index;
        };
    };
    return console.log(arr)
};
swap([11,22,33,44],0,1);
//----------------------------------------------------------------------------------------------------------------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value
        };
    };
};
document.write(exchange(10000,[{currency:'USD',value:40}, {currency:'EUR',value:42}],'USD'));