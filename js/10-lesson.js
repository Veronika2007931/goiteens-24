const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
  ];


const calculateTime = players.reduce((totalTime,players) => {
    return totalTime + players.timePlayed
}, 0)

// console.log(calculateTime)

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
  ];

  const totalPrice = cart.reduce((price, product)=>{
     return price += product.price*product.quantity;
  },0)
  
// console.log(totalPrice)

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];

const allTags = tweets.reduce((tags,tweet)=>{
    return [...tags,...tweet.tags]
},[])

// console.log(allTags)

const tagsStats = allTags.reduce((acc, tag)=>{

    // примерно 1.25 в видеоуроке
return{
    ...acc,
    [tag]: acc[tag] ? acc[tag] += 1 : acc[tag] = 1
}
},{})

const numbers = [1, 9, 6, 2, 3]
// numbers.sort()
// console.log('numbers', numbers)
const letters = ['b', 'B', 'a', 'A']
// letters.sort()
console.log('letters',letters)
numbers.sort((nextEl, curEl)=>{
    // console.log('curEl', curEl)
    // console.log('nextEl', nextEl)
    return curEl - nextEl
})
// console.log(numbers)


letters.sort((nextEl, curEl)=>{
    // console.log('curEl', curEl)
    // console.log('nextEl', nextEl)
    // console.log(curEl>nextEl)
    return curEl > nextEl
})
// console.log(letters)

const letters2 = ['b', 'B', 'a', 'A']
const copyLetters = [...letters2]

const players2 = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const time = [...players2].sort((prevPlayer, nextPlayer)=>{
    return prevPlayer.timePlayed - nextPlayer.timePlayed
})

// console.log(time)

const arr = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947},
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
    ];

    const  newArr = [...arr].sort((prevName, nextName)=>{
       return prevName.name > nextName.name
    })


console.log(newArr)