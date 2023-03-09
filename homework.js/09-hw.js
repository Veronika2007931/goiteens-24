obj=  [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      id: '249b6175-5c30-44c6-b154-f120923736f5',
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      id: '150b00fb-dd82-427d-9faf-2879ea87c695',
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      id: 'e1bf46ab-7168-491e-925e-f01e21394812',
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
  ];

  // №1
  const getUserNames = obj.map(users => {
   return users.name
  });
  
  // console.log(getUserNames );
  
  // №2
  const getUsersWithEyeColor =function(color) {
   return obj.filter((users) => {
   if(users.eyeColor === color){
            return users.name
    };
    
  })};
  
  // console.log(getUsersWithEyeColor('blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
  
  // №3
  const getUsersWithGender = function(gender){
    return obj.filter((users)=> {
      if(users.gender === gender){
        return users.name
      }
    })
  };
  
  // console.log(getUsersWithGender('male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// №4
const getInactiveUsers = obj.filter (users => {
       if(users.isActive === false){
       return users.name
      }
    //  посмотреть на записи что ето за имя котрое мы возврвщаэм
  }).map(({name}) => name);
  
  // console.log(getInactiveUsers); 

// №5
const getUserWithEmail =  function(email){
  return obj.filter((users)=> {
    if(users.email === email){
      return users.name
    }
  })
};

// console.log(getUserWithEmail('shereeanthony@kog.com')); 
// console.log(getUserWithEmail( 'elmahead@omatom.com'));

// №6
const getUsersWithAge = function(min, max){
      return obj.filter((users)=>{
      if(min<=users.age,users.age<=max){
        return users.name
      }
      
    })
};

console.log(getUsersWithAge( 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge( 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]


// №7
const doubledNuts = obj.map(name=> {
  return name.balance
})
const calculateTotalBalance = doubledNuts.reduce((users,number) => {
  return users += number 
},0);

// console.log(calculateTotalBalance);
















