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

fetch(url)
    .then((res) => {
        console.log(res)
        // console.log(res.json()) // ye ek promise return karta hai
         return res.json()  // promise ko call lga rha hai
    })
    .then((data) => {  // by this we get actual data
        console.log(data.fact) 
        return fetch(url);
    })
    .then((res) => {
        console.log(res)
         return res.json()
    })
    .then((data2) => {  // by this we get actual data
        console.log(data2.fact) 
    
    })

    .catch((err) => {
        console.log("error",err)
    })