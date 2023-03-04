// players.method((player) => {})
// це пишеться замість того що нижче
// const doubledNums= numbers.map(function(number){})

const numbers =[5, 10, 15, 20, 25]
const doubledNuts = numbers.map(number=> {
    return number*2
})

// console.log(doubledNuts)

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];

const isAnyoneOnline = players.some((player) => {
    return player.online
})


  const anyHardcorePlayersIsOnline = players.every((player) => {
    return player.online
  })
 console.log(anyHardcorePlayersIsOnline)


 const anyHardcorePlayers = players.every((player) => {
    return player.timePlayed > 100
  })
//  console.log(anyHardcorePlayers)

  const findPlayerById = players.find((player)=> {
    return players.id === 'player-1'
  })

  const findPlayerById2 = function(allPlayers, playerId){
    return  allPlayers.find((player) => {
        return player.id === playerId
    })
  }
//   console.log(findPlayerById(players, 'player-1'));

const playerWithName = players.find((player)=>{
    return player.name === "Kiwi"
})

// console.log(playerWithName);


  const playerIdToUpdate = 'player-3';

  players.map((player) => {
   if(playerIdToUpdate === player.id){
       return{
        ...player,
        timePlayed: player.timePlayed += 100
       }
   }
})

const onlinePlayers = players.filter(({online})=>online).map(({name}) => name)

// console.log(onlinePlayers)

// Отримуємо масив всіх хардкорних гравців з часом більше 250
// hardcorePlayers

const hardcorePlayers = players.filter((players)=>{

    return players.timePlayed > 250
})
//  console.log(hardcorePlayers)



// console.log(players)

const numbers2 =[5, 10, 15, 20, 25]
const filterNumbers = numbers2.filter(number => {
    return number > 10 
})
const number= numbers.find((number) => {
  return number === 15
})

// console.log(number)
// console.log(filterNumbers)

const total = numbers2.reduce((acc, number )=>{
return acc += number
}, 0)

console.log(total)

/*
 * Рахуємо загальну зп
 */

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
  };

  
  const sallaryArray = Object.values(salary)
 const total2 = sallaryArray.reduce((tt, salary)=> {
    return tt += salary
 },0)

console.log(sallaryArray)












