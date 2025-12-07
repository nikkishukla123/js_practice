// async function promise return karta hai

// async function greet(params) {
//     throw "404 not found"  //always give error
//     return("helo")
// }
//  greet()  // calling the execution
//    .then((result)=>{
//      console.log("result was",result)
//    })
//    .catch((err)=>{
//     console.log("rejeted with error ",err)
//   })
//    //with arrow 
//   let demo = async () => {
//      return 5;
//   }



//   // await : it pauses the execution until the promise is settled

// function getnum() {
//     return new Promise ((resolve , reject) => {
//         setTimeout (()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num)
//             resolve()
//         },1000)
//     });
// }

// async function demo(params) {
  
//    await getnum();
//    await getnum();
//    await getnum();
//     await getnum();
// }
// demo();  // calling demo will print all num


  

  // colour function solving usin await function
h1 = document.querySelector("h1");
function changeColor(color) {
  return new Promise ((resolve,reject)=>{
      setTimeout(() => {
    
        let nums = Math.floor(Math.random()*5)+1;
           if (nums > 3){
            reject("rejeced")
           }

          h1.style.color = color;
          console.log(`color changd to ${color}`)
          resolve("color changed");
      }, 1000 );
  })
}

async function Color() {
  try {
    await changeColor("red")
    await changeColor("green")
    await changeColor("blue")
    await changeColor("orange")
  } catch (err){
    console.log("error caught",err)
  }

  let a = 5;
  console.log("hum print honga chahe error aye",a+3);// this is happening due to try catch,error doesnot effect this part
  console.log(a)
  

}

Color();










