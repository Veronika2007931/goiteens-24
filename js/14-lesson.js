
// const inputEl = document.querySelector('.js-input')
// const inputLisense = document.querySelector('.js-license')
// const btn = document.querySelector('.js-button')
// const nameLabel = document.querySelector('.js-button > span ')

// inputEl.addEventListener('input', onInputChange)
// licenseCheckbox.addEventListener('change', )
// // function onFocusChange(evt){
// //     console.log(evt.currentTarget.value)
// // }

// function onInputChange(evt){
//     const inputValue = evt.currentTarget.value;

//     nameLabel.textContent = inputValue;
// }
// inputLisense.addEventListener('change', onCheckboxChange)
// function onCheckboxChange(event){
//     // console.log(event.currentTarget.checked)
//     // console.log(btn.disabled = false)

//     btn.disabled = !event.currentTarget.checked;
// }

const btnClear = document.querySelector('.js-clear')
const output = document.querySelector('.js-output')

window.addEventListener('keypress', onKeypress)

function onKeypress(event){
    output.textContent +=  event.key;
}

btnClear.addEventListener('click', () => {
    output.textContent = '';
})

const backdrop = document.querySelector('.js-backdrop');
const openBtn = document.querySelector('[data-action = "open-modal"');
const closeBtn = document.querySelector('[data-action = "close-modal"');
openBtn.addEventListener('click', ()=>{
    document.body.classList.add('show-modal');
})

closeBtn.addEventListener('click', onBtnClickClose)


function onBtnClickOpen(){
    document.body.classList.add('show-modal')
    window.addEventListener('keydown', onModalEscClose)
}







function onBtnClickClose(){
    document.body.classList.remove('show-modal')
    window.removeEventListener('keydown', onModalEscClose)
}

backdrop.addEventListener('click', onBackdropClose)
    function onBackdropClose(event){
   
    if(event.currentTarget === event.target){
        onBtnClickClose()
    }
}



window.addEventListener('keydown', onModalEscClose)
function onModalEscClose(event){
    if(event.code === 'Escape'){
        onBtnClickClose()
    }
}





