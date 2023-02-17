const hello1 = function(){
    console.log('Привіт JavaScript');
   
}

// hello1();

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

const myAverageScore = function(arr){
     let totalScore = 0;
   for(let element of arr){
      totalScore += element;
    
   }
 totalScore = totalScore /  arr.length
if(totalScore<=100 && totalScore>=91){
   return 'Myaveragescore: A ';
}else if(totalScore<=90 && totalScore>=81){
    return 'Myaveragescore: B ';
}else if(totalScore<=80 && totalScore>=71){
    return 'Myaveragescore: C ';
}else if(totalScore<=70){
    return 'Myaveragescore: D ';
}
}


console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));