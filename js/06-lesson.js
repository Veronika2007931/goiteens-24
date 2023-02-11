// const addPrise = function(a,b){
//     const sum = a + b;
//     return sum 
// якщо маленька дія то можна не використовувати довгий 
// запис а написати чк нижче
//     return a + b;
// }

// нижче ми викликаємо функцію і даємо їй значення
// addPrise(5,10)
// addPrise(100,50)
// addPrise(500,40)

// таку функцію інтерпритатор бачить завжди
// тому її можна використати до її присвоєння
// function findLogin(login, arr){
//     console.log(login);

// }

// findLogin('login')

/*
 * Напиши функцію calculateTotalPrice(items)
 * яка приймає масив цін і повертає їх сумму
 */



// const calculateTotalPrice = function(items){
//     let total = 0;
//       for ( let index=0; index<items.length; index++){
//         total+=items[index]
//       }
//       return total;

// }
  
// console.log(calculateTotalPrice([1, 2, 3])); // 6
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600

/*
 * Напиши функцию findSmallesNumber(numbers) пошуку самого маленького числа в масиві,
 * при умові, що числа унікальні (не повторюються).
 */

// const findSmallesNumber = function(numbers){
//     let min = numbers[0];
//     for(const number of numbers){
//        if(min > number){
//         min = number;
//        }

//          }
//       return min;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

/*
 * Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
 */

// const changeCase = function(string){
//     const stringNew = string.split('');
//     console.log(stringNew);
//     let elementNew = '';
//     for (const element of stringNew){
//         if (element === element.toLocaleLowerCase()){
//             elementNew += element.toLocaleUpperCase();
          

//         }else{
//             elementNew += element.toLocaleLowerCase();
//         }
//     }
//  return elementNew;
// }


// console.log(changeCase('qweRTY')); // QWErty
//   console.log(changeCase('mAnGo')); // MaNgO
//   console.log(changeCase('AjAx')); // aJaX

// const fnA = function(){
//     console.log([])
//     console.log(arguments);
//     const arg = Array.from(arguments);
//     console.log(arg)
// }

// fnA(5,10,23,45,78)

// const fnB = function(...args){
//    console.log(args)
// }
// fnB(5,10,23,45,78)


// const fnA = function(){}
// const fnB = (param1,param2) =>param1 + param2
 // якщо один параметр можна писати без дужок 
 // як нижче якщо більше то дужки потрібні
// const fnB2 = param1 => param1.toLocaleLowerCase();

/*
 * Напиши функцию slugify(string) яка отримує рядок і повертає URL-slug
 * Заголовок статті складається тільки з букв та пропусків
 */

const title = 'Top 10 benefits of React framework';



const slugify = function(string){
   return string.toLocaleLowerCase().split(' ').join('-');
   
}

  console.log(slugify('Top 10 benefits of React framework'));
  console.log(slugify('Azure Static Web Apps are Awesome'));
  console.log(slugify('Technical writing tips for non-native English speakers'));





