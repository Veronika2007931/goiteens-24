
// #1
// const lists = document.querySelectorAll('.item')
// const listLength = lists.length
// console.log(`У списку ${listLength} категорій`)

// for (const list of lists) {
//   console.log(list.firstElementChild.textContent)
//   console.log(list.lastElementChild.children.length)
// }








// №2
// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
//   ];

//    const listEl = document.querySelector('.ingredients')
  
//    const newIngredients = ingredients.map((elem) => { 
//    const liForEl = document.createElement('li')
//    liForEl.textContent = elem
//    return liForEl 
//    })

//   listEl.append(...newIngredients)


// #3
const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  
  

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);
let newGalary = images.map((elem) => { 
    return `<li  ><img src="${elem.url}" alt="${elem.alt}"></li>`
     }).join('');
    console.log(newGalary);
    console.log(galleryEl);
    galleryEl.insertAdjacentHTML("afterbegin", newGalary);



























