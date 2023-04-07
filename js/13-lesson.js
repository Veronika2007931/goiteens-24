// const targetBtn = document.querySelector('.js-target-btn')
// const addListenerBtn = document.querySelector('.js-add-listener')
// const removeListenerBtn = document.querySelector('.js-remove-listener')

// // targetBtn.addEventListener('click', ()=>{
// //     console.log("додався слухач подій")
// // })

// addListenerBtn.addEventListener('click', ()=>{
//     console.log('додаю користувача на цільову кнопку')
//     targetBtn.addEventListener('click', onClick)
// })

// removeListenerBtn.addEventListener('click', ()=>{
//    console.log('зняли слухача з цільової кнопки')
//    targetBtn.addEventListener('click', onClick)
// })


// function onClick(){
//     console.log('lalatopola')
// }



// // form

// const form = document.querySelector('.js-register-form')
// form.addEventListener('submit', onFormSubmit)


// function onFormSubmit(event){
// event.preventDefault();

// console.log(event.currentTarget.elements.email.value)
// console.log(event.currentTarget.elements.subscription.value)
// }

// // нижче кращий і зручніший запис

// function onFormSubmit(event){
//     event.preventDefault();
    

//     const formElements = event.currentTarget.elements
//     const emailValue = formElements.email.value
//     const password = formElements.password.value
//     const subscription = formElements.subscription.value 



//     const formData = {
//          email,
//          password,
//          subscription
//     }
//    console.log(formData)
// }




// ПЕРЕДИВИТИСЬ ЦЕЙ МОМЕНТ !!!!!

const backdrop = document.querySelector('.js-backdrop');
const openBtn = document.querySelector('[data-action = "open-modal"');
const closeBtn = document.querySelector('[data-action = "close-modal"');
openBtn.addEventListener('click', ()=>{
    document.body.classList.add('show-modal');
})

closeBtn.addEventListener('click', onBtnClickClose)

function onBtnClickClose(){
    document.body.classList.remove('show-modal')
}

backdrop.addEventListener('click', onBackdropClose)
    function onBackdropClose(event){
   
    if(event.currentTarget === event.target){
        onBtnClickClose()
    }
}








