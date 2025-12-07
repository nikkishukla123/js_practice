// const url =  "https://dog.ceo/api/breeds/image/random"

// async function getimages() {
//     try {
//        const config = {headers: {Accept:"application/json"}}
//         let res = await axios.get(url, config)
//         console.log(res.data)
//     } catch(e) {
//         console.log(e)
//     }
// }


// ***** */ practicing query string
let input = document.querySelector("input");
let url = " https://restcountries.com/v3.1/name/india"
 let button = document.querySelector("button")
button.addEventListener("click",async()=>{
    let c = input.value.trim() ;  // placehoder ki value
    console.log(c)
    let college = await getcollege(c);
    console.log(college)
   
     
})



async function getcollege(c) {
    try {
        let query = `?fields=${c}`; // ✅ query string from input
        let res = await axios.get(url+query);
        return res.data;   //If you want data outside a function, you must return it.
    } catch(e) {
        return e;
    }
}

