const number1 = [1,2,3,4,5,];
const number2 = [6,7,8,9,10];

// зшивання функції
const numbers = number1.concat(number2);
// console.log(numbers);

// новий варіант
const numbers2 = [...number1,15,20,...[45,67,89],20,32, ...number2]
// console.log(numbers2);

const temps = [18, 14,21,12,17,29,24]
// ф цьому методі  не можна використовувати масив тому за допомогою 
// 3 крапок ми розкрили масив
const lowestTemp = Math.min(...temps)
const highTemp = Math.max()

const lastWeekTemps = [1, 2, 3];
  const currentTemps = [4, 5, 6];
  const nextWeekTemps = [7, 8, 9];

const masive = lastWeekTemps.concat(currentTemps,nextWeekTemps);
const masive2 = [...lastWeekTemps,...currentTemps,...nextWeekTemps];
// console.log(masive)
// console.log(masive2)

const a = {x: 1, y:2};
const b = {x:0, a:3};

const c = Object.assign({}, a , b)
// console.log(c)

const c2 ={
   ...a,
   s: 15,
   ...b,
   q:25,
}
// якщо два ключі однакові записується остання
// const defaultSettings = {
//     theme: 'light',
//     showNotification:true,
//     hideSidebar:false,
// };

// const userSettings ={
// shownNotification: false,
// hideSidebar: true,
// }
// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings
// }
// console.log(finalSettings);

// const class1 = {
//     name: '10-A',
//     students: ['Vlad', 'Fedir', 'Nastia', 'Matvii'],
//     studentCount:4,
// }

// console.log(
    // class1.name,
    // class1.students,
    // class1.studentCount
// );

// const {name,students,studentCount} = class1;
// console.log(
    // name,
    // students,
    // studentCount
// );


// const cart = {
//     items: [],
//     getItems() {},
//     add(product) {
//         for (const item of this.items) {
//             if(item.name === product.name){
//                 item.quantity += 1;
//                 return;
//             }
//         }
//         this.items.push(product)
//     },
//     remove(productName) {},
//     clear() {},
//     countTotalPrice() {},
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
//   };

// //   * { name: '🍎', price: 50 }
// //  * { name: '🍇', price: 70 }
// //  * { name: '🍋', price: 60 }
// //  * { name: '🍓', price: 110 }

// cart.add({ name: '🍎', price: 50 })
// cart.add({ name: '🍇', price: 70 })
// console.log({ name: '🍋', price: 60 })
// // console.log(cart.items)


// const numbers5 = [5,10,11,21,34]

// let total =0;
// numbers5.forEach(function(numbesr5){
//     total= numbers5 += 1
// })

// console.log(total);
// console.log(numbers5)

// const numbers5 = [5,10,11,21,34];
// const number6 = numbers5.map(function(numbers5){
//     return numbers5 * 2;
// })

// console.log('numbers5',numbers5)

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
//   console.table(players);


// const playersName = players.map(function(player){
//   return player.name
// })
// or
// const playersName = players.map(function({name}){
//     return name
//   })


const updatePlayers= players.map(function(player){
    return{
        ...player,
        points: player.points + 10,
    }
})





















