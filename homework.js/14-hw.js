// №5

// const spanEl = document.querySelector('#name-output')
// const getValue = document.getElementById('name-input');

// getValue.addEventListener("input", changeSpan)

// function changeSpan(event){
//     spanEl.textContent = event.currentTarget.value;
// }


// #6

// const inputEl = document.querySelector('#validation-input')

// document.getElementById("validation-input").onblur = function(){
//     if(this.getAttribute('data-length') > this.value.length ){
//         this.classList.remove('valid');
//         this.classList.add('invalid');
//     }else{
//         this.classList.remove('invalid');
//         this.classList.add('valid');
//     }
//  }

// #7

const inputEl = document.getElementById('font-size-control')
const textEl = document.getElementById('text')
// const value = inputEl.value


inputEl.addEventListener('input', () => {
   textEl.style.fontSize = inputEl.value + "px";
})








// №8
// const btnEl = document.querySelector('[data-action="render"]')
// const buttonEl = document.querySelector('[data-action="destroy"]')
// const inputEl = document.querySelector('input')
// const boxes = document.querySelector('#boxes')

// btnEl.addEventListener('click', onBtnCreateClick)
// buttonEl.addEventListener('click', onBtnDestroyClick)

// function onBtnCreateClick(){
//     const inputValue = inputEl.value;
//     createBoxes(inputValue)
    
   
// }

// function createBoxes(amount){
//     let boxSize = 30;
//     for(let i=0; i< amount; i+= 1){
//         const newDiv = document.createElement('div')
//         newDiv.style.width = boxSize + 'px';
//         newDiv.style.height = `${boxSize}px`;
//         let color = Math.round(Math.random()*65025).toString(16);
//         newDiv.style.backgroundColor ='#' + color;
//         boxes.append(newDiv)
//         boxSize += 10;
//     }
// }

// function onBtnDestroyClick(){
//     boxes.innerHTML = '';
// }





