// function a(callback) {
//   const obj = {}
//   setTimeout(function() {
//     console.log('a')
//     callback(obj)
//   }, 1000)
// }
// function b(callback) {
//   setTimeout(function() {
//     console.log('b')
//     callback()
//   }, 1000)
// }
// function c(callback) {
//   setTimeout(function() {
//     console.log('c')
//     callback()
//   }, 1000)
// }
// function d(callback) {
//   setTimeout(function() {
//     console.log('d')
//     callback()
//   }, 1000)
// }

// a(function(event) {
//   console.log('event : '+event)
//   b(function() {
//     c(function() {
//       d(function() {
//         console.log('111111111111111111111111111111\n')
//       })
//     })
//   })
// })



function a() {
  // promise: 약속의 객체
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('a')
      resolve('Hello a')
    }, 1000);
  })
}
function b() {
  // promise: 약속의 객체
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('b')
      resolve('Hello b')
    }, 1000);
  })
}
function c() {
  // promise: 약속의 객체
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('c')
      resolve('Hello c')
    }, 1000);
  })
}
function d() {
  // promise: 약속의 객체
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('d')
      resolve('Hello d')
    }, 1000);
  })
}
async function test() {
  const h1 = await a()
  const h2 = await b()
  const h3 = await c()
  const h4 = await d()
  
  console.log("Done")
  
  console.log(h1,h2,h3,h4)

}
test()