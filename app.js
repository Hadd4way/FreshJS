// Видео-курс

/*

    Пользователь хочет приобрести игру в магазине
    Он может это сделать только если:
    - Его баланс больше 1000 (balance)
    или число бонусов больше 100 (bonusbalance)
    - Он не забанен (isBanned)
    - Игра не куплена (isExist)
    - Игра в продаже (isSelling)
    Напишите условие для покупки и выведите в консоль
    результат

*/

'use strict';

let balance = 1000;
let bonusBalance = 101;
let isBanned = false;
let isExist = false;
let isSelling = true;

const canbuy =(balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSelling;

console.log(`Могу купить игру: ${canbuy ? 'Да' : 'Нет'}`);