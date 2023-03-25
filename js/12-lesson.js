// const listEl= document.querySelector('.site-nav')
// console.log(listEl)

// Тут два однакових записи але ливлячись як хочеш записати
// const itemsEl = listEl.children
// const itemsEl = listEl.querySelectorAll('.site-nav__item')
// const itemEl = document.querySelectorAll('.site-nav__item');
// console.log(itemEl[itemEl.lendth -1]);

// console.log(listEl.lastElementChild)
// const containerEl = document.querySelector('body')
// const listEl = document.querySelector('.site-nav__item')

// const titleEl = document.createElement('h1')
// titleEl.textContent = 'Hello, that my first element that i creat'
// titleEl.classList.add('title')
// titleEl.style.backgroundColor = 'tomato';

// console.log(titleEl)
// containerEl.appendChild(titleEl)
// document.body.insertbefore(titleEl,listEl)

// const containerEl = document.querySelector('.hero')

// const imageEl = document.createElement('img')
// imageEl.src = 'https://images.unsplash.com/photo-1679589102491-bc489d798a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
// imageEl.alt =  'photo'
// imageEl.width = 200

// containerEl.appendChild(imageEl)
// console.log(imageEl)

// const listel = document.querySelector('.site-nav__item')
// const itemEl = document.createElement('li')
// itemEl.classList.add('.site-nav__item')

// const linkEl = document.createElement('a')
// linkEl.href = ''
// linkEl.classList.add('.site-nav__item')
// linkEl.textContent = 'Personal room'

// console.log(itemEl)
// console.log(linkEl)

// itemEl.appendChild(linkEl)
// console.log(itemEl)
// listel.appendChild(itemEl)

// // щою додати один 
// itemEl.appenChild(LinkEl)
// // щоб додати декілька
// itemEl.append(LinkEl, itemEl)

const colorPickerContainerEl = document.querySelector('.js-color-picker')
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

const option = colorPickerOptions[0]
// const colorPickerContainerEl = document.querySelector('.js-color-picker')
//   const btnEl = document.createElement('button')
// btnEl.classList.add('.color-picker__option')
// btnEl.textContent = option.label;
// btnEl.style.backgroundColor = option.color
// btnEl.type = 'buttton'

// colorPickerContainerEl.appendChild(btnEl)

// const btnEl = colorPickerOptions.map((opyion) => {

//   const btnEl = document.createElement('button')
// btnEl.classList.add('.color-picker__option')
// btnEl.textContent = option.label;
// btnEl.style.backgroundColor = option.color
// btnEl.type = 'buttton'

// return btnEl
// })
// colorPickerContainerEl.append(...btnElems)

// const createBtnEl = function(options){
//     const btnElems = colorPickerOptions.map((option) => {

//     const btnEl = document.createElement('button')
//       btnEl.classList.add('.color-picker__option')
//       btnEl.textContent = option.label;
//       btnEl.style.backgroundColor = option.color
//       btnEl.type = 'buttton'
//       return btnEl}
      
//       )
//     return btnElems
//     } 
//     const createBtnElements= createBtnEl(colorPickerOptions)
//     colorPickerContainerEl.append(...createBtnEl(createBtnElements))

// const titleEl = documrnt.querySelector('.title')
// console.log(titleEl.textContent)
// console.log(titleel.innerHTML)


// const containerEl = document.querySelector('.js-container')
// containerEl.insertAdjacentHTML('beforeend', `<article class="product">
// <h2 class="product__name">Назва</h2>
// <p class="product__descr">Опис</p>
// <p product__pridct>Ціна: 1111 кредитів</p>
// </article>`)

const containerEl = document.querySelector('.site-nav')
containerEl.insertAdjacentHTML('beforeend', '<ul class="site-nav"><li class="site-nav__item"><a href="" class="site-nav__link">Про нас</a></li><li class="site-nav__item"> <a href="" class="site-nav__link">Портфоліо</a></li><li class="site-nav__item"><a href="" class="site-nav__link">Контакти</a></li></ul>')













