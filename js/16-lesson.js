// class Person {
//     constructor(firstName, lastName){ 
//         this.firstName = firstName;
//     this.lastname = lastName;
// }
// getFullName(){
//     return {firstName: this.firstName, lastName: this.lastname}
// }

// }

// const per = new Person()
// console.log(per.getFullName)

// // Те що вище це перевірка минулого заняття

// class Animal {
//     constructor(name){
//         this.name = name;

//     }
// }

// class Dog extends Animal{
//     constructor(name, breed){
//         super(name)
//         this.breed = breed;
//     }
// }
//  const myDog = new Dog("Buddy", "labrador Retriever")
// console.log(myDog)

// class Animal{
//     makeSound(){

//     }
// }
// class Cat extends Animal{
//     makeSound(){
//         console.log('mau')
//     }
// }
// const cat1m = new Cat();
// cat1m.makeSound();




// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         return 'sound'
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     speak(){
//         return 'Bark!'
//     }
// }

// const dog = new Dog('Bobik');
// dog.speak()


class Prodact {
    constructor(name, price, discount){
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    getDiscountPrice(){
       if(this.discount>0){
        return this.price * (1-this.discount/100);
       }else{
        return this.price;
       }
    }
}

const product1 = new Prodact('lemon', 30, 5);

console.log(product1.getDiscountPrice());

class Shape {
constructor(color){
    this.color = color
}
draw(){

}
}

class Circle extends Shape{
constructor(radius, color){
    this.radius = radius
    super(color)
}
draw(){
    return 'bjhbjuhj'
}
}

const myCircle = new Circle( 5, 'red')
console.log(myCircle.draw)

class Book{
    constructor(title, autor, price){
        this.title = title;
        this.autor = autor;
        this.price = price
    }
}
class Bookstore {
    constructor(){
        this.books = []
    }

    addBook(book){
        this.books.push(book)
    }
    removeBook(book){
        const index = this.books.indexOf(book)
        if(index != -1){
            this.books.splice(index, 1)
        }

       
    }
    listBooks(){
       for(let index = 0; index <  this.books.lendth; index++){
        const book = this.books[index]
        console.log(book)
       }
    }

}

const book1= new Book('книга1', 'невідомий', '205')












