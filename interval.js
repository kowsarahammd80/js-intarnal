console.log('first')
console.log('second')
// setInterval(()=> {
//   console.log('third');
// }, 1500)
// let second = 10;
// setInterval(() => { 
//   console.log(second--)
// }, 1000); // inreval sob somoy cholte thake eit tar dhron

// ei clearINterval er maddhome interval function k barak ba thamano jay , 
// let second = 0;
// let inretvalId = setInterval(() => {
//   console.log(second++)
//   if(second === 10){
//     clearInterval(inretvalId)
//   }
// }, 1000);

// x++ , ++x
let second = 0;
let inretvalId = setInterval(() => {
  console.log(second++)
  if(second === 10){
    clearInterval(inretvalId)
  }
}, 1000); // x++ er madome 0 theke ba sroto thek count kore the sorter age theme jay 

// ++x er madhome srto er por count hoy ebong sorto er por theme jay 
let seconds = 0;
let inretvalIds = setInterval(() => {
  console.log(++second)
  if(second === 10){
    clearInterval(inretvalId)
  }
}, 1000);

console.log('fourth')
console.log('fifth')