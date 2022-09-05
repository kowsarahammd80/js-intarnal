function doSomthing(){
  console.log('third')
}

console.log('first')
console.log('secnd')
// setTimeout(doSomthing)
// setTimeout(function(){
//   console.log('third')
//  })
let timeOut = setTimeout(() => {console.log('third')}, 5000)
clearInterval(timeOut);
// console.log(clearInterval);
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response =>{console.log('resposn chack'); return response.json()})
//   .then(json => console.log(json))


console.log('fourth')
console.log('fifth')