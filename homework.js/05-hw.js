// const arr1 = [1, 5, '4', 'hello' ];
// const arr2 = [ true,2, {}, ['a'], 222 ]

// console.log(arr1[1], arr2[1],arr1[1] + arr2[1])

// const arr3 = arr1.splice(5,0, 22)
// console.log(arr1)

// for (const arr of arr2) {

//     console.log(arr);
//     console.log(typeof(arr))
//   }

// const message = 'Welcome to Ukraine!'
// console.log(message.split(""));
// console.log(message.indexOf("l"));
// console.log(message)
  
const styles = [ 'Джаз' , 'Блюз']
styles.push( 'Рок-н-ролл')
styles.splice(1,1,'Класика')
const deletestyles = styles.splice(1);
 console.log(deletestyles)
 styles.splice(0,0, 'Реп' , 'Реггі')

console.log(styles)