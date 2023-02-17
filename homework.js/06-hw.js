const hello1 = function(){
    console.log('Привіт JavaScript');
   
}

hello1();

const hello2 = function(name){
    console.log(`Привіт,${name}`);

}

// hello2(Василь);



const mull = function(n,m){
    console.log(n+m)
    console.log(n-m)
    console.log(n*m)

}

// mull(5,7);

const myNewArrowFunction = (...args) => console.log(args)
// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");



