// api act as a waiter between user and server
// json: api give it response in json
// to acess data from json in javascript we convert it into js object




// let jsonRes = '{"fact":"The cat appears to be the only domestic companion animal not mentioned in the Bible.","length":84}'

// let validRes = JSON.parse(jsonRes);  // to parse a string data into js object
// console.log(validRes.fact)

// let student ={
//     name: "nikki",
//     value:50,
// }
// JSON.stringify(student); // to parse a js obect into json




 
// testing api request with
// postman or hoppscoth

// ajax : api has ansynchronous nature when sending data between js and api

// http verbs 
 // get: for getting infomation
 // post : for sending information
 // delete

 // status code
 // 200 - ok
 // 404 - not found
 // 400 - bad request
 //500 - server error

 //add information in urls

//  # Add Information in URLs

// ## Query Strings

// Example 1:
// https://www.google.com/search?q=harry+porter

// - Key: q
// - Value: harry+porter

// Example 2:
// ?name=shradha&marks=95

// - Multiple key-value pairs:
//   - name = shradha
//   - marks = 95
// - Pairs are separated by an ampersand (&)




// first api request
let url = "https://catfact.ninja/fact"

// fetch(url)
//     .then((res) => {
//         console.log(res)
//         // console.log(res.json()) // ye ek promise return karta hai
//          return res.json()  // promise ko call lga rha hai
//     })
//     .then((data) => {  // by this we get actual data
//         console.log(data.fact) 
//         return fetch(url);
//     })
//     .then((res) => {
//         console.log(res)
//          return res.json()
//     })
//     .then((data2) => {  // by this we get actual data
//         console.log(data2.fact) 
    
//     })

//     .catch((err) => {
//         console.log("error",err)
//     })



     // solving above same using async and await

    //  async function getfacts() {
    //   try {
    //     let res = await fetch(url) // fetched the url
    //     let data= await res.json() // coverted into json file
    //      console.log(data.fact)  // get raw data printed
   
    //      let res2 = await fetch(url)   // same for data2
    //      let data2= await res2.json()
    //       console.log(data2.fact)
    //   } catch(e){
    //     console.log(e,"error")
    //   }
    //   console.log("bye")   // always print if there is any error
    //  } 

    //  getfacts()   


     // ******* using axios **********
     // library to make http request

   // select button
let button = document.querySelector("button");

// run function on button click (do NOT call it here)
button.addEventListener("click", getfacts);


async function getfacts() {
  try {
    
    let res = await axios.get(url); // API call (axios auto-converts JSON) 
    let fact = res.data.fact;  // get fact from response

    let p = document.querySelector("#result");
    // display fact on page
    p.innerText = fact;

  } catch (e) {
    console.log("error:", e);
  }
}

    
// calling api of dog image
    let url2 = "https://dog.ceo/api/breeds/image/random"

    async function getimage() {
        try {
          
          let res = await axios.get(url2); // API call (axios auto-converts JSON) 
          let image = (res.data.message)

          let img = document.querySelector("#results")
          img.src = image;
          console.log(image);

      
        } catch (e) {
          console.log("error:", e);
        }
      }

      let button2 = document.querySelector("#btn");
      button2.addEventListener("click", getimage);