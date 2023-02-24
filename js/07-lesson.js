const class1 = {
    name: '10-A',
    students: ['Vlad', 'Fedir', 'Nastia', 'Matvii'],
    studentCount:4,
    getName(){

        console.log(this.name)
    },
    
    changeName(newName){
      return this.name = newName
    },
    getTracksLength(){
        return this.students.lenght;
    },
    getNewName(newName){
        this.students.push(newName);
    }
    
}

class1.getName();
class1.changeName('vvhhbjbgik')

console.log(class1.name)

// Це щоб змінювати значення в об'єкті нижче
class1.name = '10-B'
console.log(class1)

// Додання нової властивості нижче
class1.raiting = 10;
console.log(class1['raiting'])

class1.students.push('Yelisey')

// якщо трреба видалити якісь дані
delete class1.raitihg

// Якщо і ключ і властивість 
// називаються однаково то можна записувати без кдюча
const signupData = {
    userName,
    email,
}

const arr = [1, 2, 3, 4];
console.log(arr)

arr.greats= 'hello'
console.log(arr)

const feedback = {
    good: 5,
    neutral: 10,
    bad:3,
}

const allkeys = Object.keys(feedback);
console.log(allkeys);

let total =0;
for (const key of allkeys){
    console.log(feedback[key]);
    total += feedback[key]

}

const values = Object.values(feedback);
console.log(values);

for (const value of values) {
    console.log(value);
    total += value;

}

const entries = Object.entries(feedback)
console.log(entries)

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
const findFriendByName = function(allFriends, nameToFind){
    for (const friend of allFriends) {
        if(friend.name === nameToFind){
            console.log('знайшли друга')
            return nameToFind;
        }else{
            console.log('такого друга не існує')
        }
    }
}
 console.log(findFriendByName(friends, 'Poly'));
  console.log(findFriendByName(friends, 'Chelsy'));

const getAllNames = function(allFriends){
  const allNames = [];
   for (const friend of allFriends) {
    allNames.push(friend.name)
   }
   return allNames;
}

console.log(getAllNames(friends));

































