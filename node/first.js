 // Node js
 // javascript run time environment use for server side programming
 // imp: it is not a language ,library or framework
 // dom window vagrira ismein work nahi karta
 // node likhkar hum norminal terminal sa hatt jata hai and cme in javascript environment
 // should be in the same directory of file
  let n = 5;
  console.log("hello")
//   console.log(process.argv)

let args = process.argv;  // process mein jo jo argumnet hai
for(let i=2; i<args.length; i++){  // i=0,1 , default value hai
    console.log("hello to", args[i])  // hello to nikki, hello to smita
   
}
const somevalue = require("./math");  // a built in function to include external files
console .log(somevalue)

const f = require("./fruits"); 
console .log(f)
