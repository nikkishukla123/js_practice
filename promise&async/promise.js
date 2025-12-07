// call stack: last in ,first out 

function one(){
    return 1
}

function two (){
    return one()+ one()
}

function three (){   
    let ans = two() + one()
    console.log(ans)  //// answer is 3
}
// pehla function three phir two phir one

// js is single thread do one task at a time  
//for this to handle callback is use

// // this is asychronous nature 
// setTimeout (()=>{ // js doesnot wait this is done by browser after timeout it will be assign in js call stack
//     console.log("hello world")
// },2000)

// console.log("hello....")

 //**** ******         callback hell    */
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000);
//             });
//         });
//     });
// });
//This example demonstrates "callback hell" — a situation where deeply nested callbacks make code harder to read and maintain.


// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDB( // sucess 1
//     "apna college",// data
//     () => {  
//         console.log("success :: your data was saved");
//         saveToDB( // sucess 2
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 saveToDB( // sucess 3
//                     "shradha",
//                     () => {
//                         console.log("success3: data3 saved");
//                     },
//                     () => {
//                         console.log("failure3 :: weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2 :: weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure: weak connection. data not saved");
//     }
// );





// promises: the promise object represent the eventual completion or failuure of an asynchronous operation and its resulting value
function saveToDB(data) {   
    return new Promise((Response, reject) => {
      let internetSpeed = Math.floor(Math.random()*10) +1;
             if (internetSpeed > 4){
                Response("result saved yaya!");
             } else {
                reject(" weak connection");
             }

    })
}

 saveToDB("apna college") // promise three state rejecct resolve pending
  .then((result)=> {
    console.log("data 1 saved")
    console.log(result)  // parameter hai
    return saveToDB("helloworld")
  })
  .then((result)=>{
    console.log("data 2 saved")
    console.log(result)
    return saveToDB("nikki",)
  })
  .then ((result)=>{
    console.log("data 3 saved")
    console.log(result)
  })
  .catch((error)=>{
    console.log("promise rejected")
    console.log(error)
  })

 // solved using promise
  h1 = document.querySelector("h1");
  function changeColor(color, delay, nextColorChange) {
    return new Promise ((response,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            response();
        }, delay  );
           
    

    })
  }

  changeColor("red",1000)
   .then(()=>{
      return  changeColor("orange",1000)
   })

   .then(()=> {
    return changeColor ("green",1000)
  })

  .then(()=>{
    return changeColor ("yellow",1000)
  })
  .then(()=>{
        
    return changeColor("blue",1000)

  })

  //What you fixed:
// - Added resolve() so the Promise actually completes.
// - Removed unnecessary nextColorChange argument.
// - Returned each changeColor(...) inside .then() instead of nesting.
// - Flattened the chain for cleaner, sequential execution.
  

// ******  async and await ******///

// async function promise return karta hai

async function greet(params) {
    console.log("helo")
}
 greet()