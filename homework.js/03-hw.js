const number = prompt ("Введіть число");
if(number>55 && number<100){
    console.log("Число потрапляє в діапазон")
}else{
    console.log("Число не потрапляє в діапазон")
}


const maxim = 55;
if(maxim>0 && maxim<16){
    console.log("Діти")
}
else if(maxim>17 && maxim<60){
    console.log("Дорослі")
}
else if(maxim>61 && maxim<100){
    console.log("Пенсіонери")
}

const myname =" Veronika";
const lastname = "Niema";
if(myname.length>4 && lastname.length>5){
    const result = myname.length + lastname.length;
    console.log(result)
}else{
    console.log("УПС")
}

(Math.random() * (5 - 1) + 1);


const number4 = (Math.random() * (5 - 1) + 1);
const number2 = Number.parseInt(number4);
if(number2 === 1){
    console.log(1)
}
else if(number2 === 2){
    console.log(2)
}
else if(number2 === 3){
    console.log(3)
}
else if(number2 === 4){
    console.log(4)
}
else if(number2 === 5){
    console.log(5)
};

let lang = "fr";
switch (lang) {
    case "uk":
      console.log("Травень");
      break;
  
    case "en":
      console.log("May");
      break;

    case "ru":
      console.log("Май");
        break;

     case "fr":
      console.log("Peut");
        break;
  
    default:
        console.log("Invalid lang type");
  }
