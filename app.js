// Видео-курс

const operations = [1000, -700, 300, -500, 10000];
let balance = 100;

function countBalance(){
    let earnings = 0;
    let spendings = 0;
    let positive = 0;
    let isOk = true;
    for(let i of operations){
        balance += i;
        if(balance < 0){
            isOk = false;
            balance -= i;
            break;
        }
        console.log(i)
        if (i > 0){
            earnings += i;
            positive++;
        }
        else{
            spendings += i;
        }
    }
    console.log(`Итоговый баланс - ${balance}`);
    console.log(`Средний расход - ${spendings/(operations.length-positive)}`)
    console.log(`Средний доход - ${earnings/positive}`)
    return isOk;
}

countBalance();