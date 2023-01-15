const k1 =  '5px';
const k2 =  '12djd334';
const k3 =  '12.45asdwe12';
const k4 =  'qwqweeewq';
console.log(Number.parseInt(k1)); 
console.log(Number.parseInt(k2)); 
console.log(Number.parseInt(k3)); 
console.log(Number.parseInt(k4)); 

console.log(Number.parseFloat(k1)); 
console.log(Number.parseFloat(k2)); 
console.log(Number.parseFloat(k3)); 
console.log(Number.parseFloat(k4)); 

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

console.log(Math.random() * (19 - 3) + 3);

const result = 5+5+'5';
console.log( result);
console.log(typeof result);

const email = 'vorokita@gmail.com';
console.log(email.length);
console.log(email.includes('@'))

const r1 = 'My';
const r2 = 'Name';
const r3 = 'is';
const fullName = ` ${r1} ${r2} ${r3} Victor`;
console.log(fullName)

const userName = 'Олександро';
const payment = 300;
const fullName2 = `Дякуємо, ${userName}! До сплати ${payment} гривень `;
console.log(fullName2)