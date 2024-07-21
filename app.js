// Видео-курс

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function division(a,b){
    return b == 0 ? 0 : a/b;
}

function power(a,b){
    return a**b;
}

function calculate(a,b,fn){
    console.log(fn.name);
    const res = fn(a,b);
    return res;
}

let res = calculate(3,5,add);
console.log(res);
res = calculate(3,5,division);
console.log(res);
res = calculate(3,5,power);
console.log(res);
res = calculate(3,5,subtract);
console.log(res);
