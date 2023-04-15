
// const objA = {
//     a: 18
// }

// const objB = Object.create(objA)
// objB.b = 9;

// const objC = Object.create(objB);
// objC.c = 10

// const decrementBtn = document.querySelector('[data-action="decrement"]')
// const incrementBtn = document.querySelector('[data-action="increment"]')
// const valueEl = document.querySelector('#value')

// let counterValue = 0;



// const counter = {
//     counterValue: 0,
//     increment(){
//         this.counterValue += 1;
//         valueEl.textContent = counterValue
//     },
//     decrement (){
//         this.counterValue -= 1;
//         valueEl.textContent = counterValue
//     }

// }

// // тут два варіанти запису

// function increment(){
//     counterValue += 1;
//     valueEl.textContent = counterValue
// }

// function decrement (){
//     counterValue -= 1;
//     valueEl.textContent = counterValue
// }

// incrementBtn.addEventListener('click', increment)
// decrementBtn.addEventListener('click', decrement)

// class Car {
//    constructor(model, price, year, color){
//     this.model  = model
//     this.price = price
//     this.year = year
//     this.color = color
//    }
//     getModel(){
//        console.log( this.model)
//     }
//    changePrice(newPrice){
//     this.price = newPrice;
//    }
// }

// const audi = new Car ('A5', 40000, 2020, 'black')
// console.log(audi)
// audi.getModel();
// audi.changePrice(45000)
// const mazda = new Car ('mazda-3', 35000, 2022, 'red')

class Person{
    constructor(firstName, lastName, age){
        this._firstName = firstName
        this.lastName = lastName
        this._age = age
    }

    get firstName(){
       console.log(this._firstName)
    }

    set age(newAge){
        this._age = newAge
    }

   


}

let per = new Person('dfd', 'dtgdtse', 32)
console.log(per)

per.firstName
per.age = 24

// class Rectangle{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }

//     getArea(){
//         console.log(this.width*this.height)


//     }
// }

// const Rectangle1 = new Rectangle(10,6)
// Rectangle1.getArea()





