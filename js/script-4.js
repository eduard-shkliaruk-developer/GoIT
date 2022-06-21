/*

> Змінні і типи

Змінні використовуються для зберігання даних і складаються із ідентифікатора (імені) і області в пам'яті, де зберігається їх значення.

<ключове_слово> <ім`я_змінної> = <значення>

*/

// Імена змінних: camelCase-нотація

const countProducts = 30;

// константи і КОНСТАНТИ: формат UPPER_SNAKE_CASE

const COUNT_PRODUCTS = 30;
const COUNT_ARTICALS = 10;
const OFFSET_TOP = 20;

// Примітивні типи: Number, String, Boolean, null(ніщо), undefined

// Оператор typeof - перевіряє на тип

const number = 10;
const string = 'Hello';
let boolean = true;
let empty = null; // Object
let undef;

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof empty);
console.log(typeof undef);
