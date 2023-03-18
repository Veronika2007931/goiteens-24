const navListEL = document.querySelector('.site-nav')
// console.log(navListEL)

// якщо елементів по запиту більше ніж один
const itemEl = document.querySelectorAll('.site-nav__item')
// console.log(itemEl[1])

const link = document.querySelector('.head')
// console.log(link)

// const imageEl = document.querySelector('.hero__image')
// виклик властивості
// console.log(imageEl.src)

// зміна значення в об'єкті але типу в розмітці
// imageEl.alt = 'erre'

// const titleEl = document.querySelector('.hero__title')
// console.log(titleEl.textContent)
// titleEl.textContent= 'pfujkjdjr'
// console.log(titleEl.textContent)

// const inputEl = document.querySelector('.js-input')
// console.log(inputEl.value)

// console.log(imageEl.src)
// console.log(imageEl.getAttribute('src'))

// imageEl.src = link
// imageEl.setAttribute('src', link)

// imageEl.removeAttribute('src')

// const imageEl = document.querySelector('.img')
// imageEl.src="https://images.pexels.com/photos/12699537/pexels-photo-12699537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

// const textEl = document.querySelector('.text')
// textEl.textContent = "hi"

// const linkEl = document.querySelector('.site-nav__link')
// linkEl.classList.add('site-nav__link--current')
// linkEl.claslist.remove('site-nav__link--current')

// majicBTn.addEventListener('click', ()=>{
//     linkEl.classList.toggle('site-nav__link--current')
// })

const listEl = document.querySelector('.section-title')
const mainTextEl = document.querySelector('.paragraph')
const mainListtEl = document.querySelector('.list-item')

listEl.textContent = 'Слава Україні!';
if(mainTextEl.classList.contains('paragraph')){
   mainTextEl.classList.replace('paragraph', 'new-paragraph')
}


