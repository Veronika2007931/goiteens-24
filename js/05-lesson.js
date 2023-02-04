

// const logins = ['m4ngoDoge', 'aj4xth3m4n', 'k1widab3st', 'poly1scute'];
// const loginToFind = 'aj4xth3m4n';
// let message;
// Напиши скрипт пошуку логіна
//  * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
//  * 
//  logins.includes(loginToFind);
//  const result = logins.includes(loginToFind);
//  console.log(result)
//  if(result){
//     message = `Користувач ${loginToFind} знайдено.`
//  } 
//  console.log(massage)

//  const title = 'Top 10 benefits of React framework';
// Повинно вийти top-10-benefits-of-react-framework

// const normalizeTitle = title.toLowerCase();
// const titleArr = normalizeTitle.split(' ');
// const titleJoin = titleArr.join('-');
// console.log(titleJoin)

// const titleSlug = title.toLocaleLowerCase().split('').join('-');
// console.log(titleSlug)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  /*
   * Видалення (по індексу), метод indexOf()
   */
  const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1)
// console.log(index);

/*
   * Додавання (по індексу)
   */
  
const cardToInsert = 'Карточка-6';

// cards.splice(6,0,cardToInsert);
// console.log(cards);
// 
//    * Оновлення (по індексу)
//    */
  const cardToUpdate = 'Карточка-4';
  const idx = cards.indexOf(cardToUpdate)

  cards.splice(idx, 1, cardToInsert  )
  console.log(cards)