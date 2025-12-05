// using this 
let btn = document.querySelector("button");
let p = document.querySelector("p");
let h = document.querySelector("h1");

btn.addEventListener("click",function(){
   console.dir(this.innerText);  // here this refers to btn itself
   // this is ues when there is many event listeners 

})

// using function  for many events

function changingcolor () {  // creating function to change color when clicked
    this.style.backgroundColor = "green"
}

p.addEventListener("click",changingcolor);
h.addEventListener("click",changingcolor);




// **** keyboard events ****//
let inp = document.querySelector("input")
// inp.addEventListener("keydown",function(){
//   console.log("key was pressed")
// })
inp.addEventListener("keyup",function(event){
   console.log("key was released")
  console.log("key",event.key);  // print the key which is pressed
  console.log("code",event.code);  // prints the code
 })




 //   ******* form events *******////
//  let form = document.querySelector("form")

//  form.addEventListener("submit",function(event){  // when the form is submit
//    alert("form submitted")
//    event.preventDefault(); // this prevent defaut on going on next webpage
// // for extracting form data
//    inp = document.querySelector("input");
//    console.dir(inp);
//   console.log(inp.value) // this will print inputed value in form


//  })

//Qs

//  let form = document.querySelector("form");
//   form.addEventListener("submit",function(event){
//           event.preventDefault();
//       // let username = document.querySelector("#user") // iski jagah niche vala likhenga
//       let username = this.elements[0]  // form.elements[0]
//       // let password = document.querySelector("#pswd")
//       let password = this.elements[1]

//       console.log(username.value);
//       console.log(password.value);
      

//   })



  // ****** change event and input event ****////

  let user = document.querySelector("#user");  // ye input ko acess kiya hai
   user.addEventListener("change", function(){ // for changing the input value , it trigger fo final value
      console.log(" changed evemt")
      console.log(this.value)
   })

   user.addEventListener("input", function(){ // for changing the input value , it trigger fo final value
      console.log("input event")  // it triggers for every keyboard value press but note for space shift
      console.log(this.value)  

      // now this will apend text in paragarph tag with input value
      let para = document.querySelector("p")
      para.innerText = this.value;
   })


   // *** event bubbling
   // when thre is nested evennt like first is div then it contain ul , it contain order list
   // so whener ul event is clicked div is also clicked to avoid this
   //event.stopPropagation(); this function is ued