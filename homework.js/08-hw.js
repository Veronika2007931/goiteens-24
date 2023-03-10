const players = [

    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  
  ];
  
  const playerIdToUpdate = 'player-3';

  players.map((player) => {
   if(playerIdToUpdate === player.id){
       return{
        ...player,
        timePlayed: player.timePlayed += 100
       }
   }
})
// console.table(players)

// { name: '🍎', price: 50 }

// { name: '🍇', price: 70 }

// { name: '🍋', price: 60 }

// { name: '🍓', price: 110 }


const cart = {

    items: [],

    getItems() {},

    add(product) {

      for (const item of this.items) {

        if (item.name === product.name) {

          item.quantity += 1;

          return;

        }

      }

      const newProduct = {

        ...product,

        quantity: 1,

      }

      this.items.push(newProduct)

    },

    remove(productName) {
        

},

    clear() {},

    countTotalPrice() {},

    increaseQuantity(productName) {},

    decreaseQuantity(productName) {},

  };
  cart.add({ name: '🍎', price: 50 })
  cart.add({ name: '🍇', price: 70 })
  cart.add({ name: '🍋', price: 60 }) 
  cart.add({ name: '🍓', price: 110 })

  console.log(cart.items)

  cart.remove('🍎')
  console.log(cart.items)




