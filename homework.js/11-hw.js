// #1
const newTitleEl = document.querySelector('.page-title')
newTitleEl.textContent = 'Новий заголовок';

// #2
const paragraphTextEl = document.querySelector('.paragraph')
paragraphTextEl.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque nesciunt inventore enim error magniiusto doloremque laborum ad similique deleniti, adipisci, dolorum architecto provident mollitia doloribus perspiciatis maxime quos.'

// #3
const listEl = document.querySelectorAll('.list')
console.log(listEl[0])

// #4
const imgEl = document.querySelector('.image')
imgEl.src = "https://images.unsplash.com/photo-1679502127844-204b443e121e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"

// #5
const lastEl = document.querySelectorAll('.section-title')
const newEl = lastEl.lastChild;
newEl.textContent = 'Новий заголовок';

// спрацьовує лише на 1 заголовку а має на 3
