// #1
// const buttonEl= document.querySelector('.button-js')

// function ButtonColorChange(){
//    buttonEl.style.backgroundColor = 'red';
// }

// buttonEl.addEventListener('click', ButtonColorChange )

// #2

// const buttonEl= document.querySelector('.button-js')
// const openBtn = document.querySelector('[data-action = "open-modal"');

// function openModal(){
//     document.body.classList.add('show-modal');
// }

// openBtn.addEventListener('click', openModal)

// №3

const passwordEl = prompt ("Введіть пароль");
const form = document.querySelector("form");
console.log(passwordEl)
form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();

     const name = event.currentTarget.elements.name.value
     const password = event.currentTarget.elements.password.value
     console.log(password)
    // if(passwordEl === password){
    //     alert(`Вітаємо ${name} Вхід авторизовано!`)
    // }else {
    //     alert(`Неправильний пароль`)
    // }
    
    
}
