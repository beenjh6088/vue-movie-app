// function a() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('a')
//       resolve()
//     }, 1000);
//   })
// }
// function b() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('b')
//       resolve()
//     }, 1000);
//   })
// }
// function c() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('c')
//       resolve()
//     }, 1000);
//   })
// }
// function d() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('d')
//       resolve()
//     }, 1000);
//   })
// }


// async function test() {
//   await a()
//   console.log('b')
// }
// test()


// function test() {
//   a().then(() => {
//     b().then(() => {
//       c().then(() => {
//         d().then(() => {
//           console.log('Done')
//         })
//       })
//     })
//   })
// }
// test()


// function test() {
//   a().then(() => {
//     return b()
//   }).then(() => {
//     return c()
//   }).then(() => {
//     return d()
//   }).then(() => {
//     console.log('Done')
//   })
// }
// test()


// function test() {
//   a()
//     .then(() => b())
//     .then(() => c())
//     .then(() => d())
//     .then(() => {
//       console.log('Done')
//     })
// }
// test()


///////////////////////////////////////////////


function a(number) {
  return new Promise((resolve, reject) => {
    if (number > 4) {
      reject()
      return
    }
    setTimeout(() => {
      console.log('a')
      resolve()
    }, 1000);
  })
}

(async function(){
  // a(1)
  //   .then(() => {
  //     console.log('Resolve!')
  //   })
  //   .catch(() => {
  //     console.log('Reject')
  //   })
  //   .finally(() => {
  //     console.log('Done')
  //   })

  // 위 로직과 동일 기능
  try {
    await a(8)
    console.log('Resolve')
  } catch(error) {
    console.log('Reject')
  }

})()