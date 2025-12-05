btn = document.querySelector("button");
let input = document.querySelector("input")
let ul = document.querySelector("ul")


 btn.addEventListener("click",function(){
    let list = document.createElement("li")   // when clicking on button list is created
        list.innerText = input.value;  // list mein input ki value dal rahe hai
        ul.appendChild(list);   // list ke andar as a child append karreahe hai
        input.value="";   // list ko vapas empty kar rahe hai

        let delbtn = document.createElement("button") 
        delbtn.innerText = "delete"
        delbtn.classList.add("delete")
        list.appendChild(delbtn)  // delete btn list ka child node hai 
 }) 
  // event delegation bubbling ka phenomina use karte agar alredy even is created and same event we want here then we apply it on parents of that child
 ul.addEventListener("click",function(event){
       if(event.target.nodeName == "BUTTON"){
       let list = event.target.parentElement;  // list ki value acces karne ke liye
       list.remove();
       console.log("deleted")
       }
 });

// Parent pe event lagaya, child ko identify kiya, aur uska parent delete kiya.
// us list ki value jo ki pehle vale event mein hai kaise le kyuki uska scope vahi event tak hai
// yha par event object  uesd,list ek parent element hai button ka usko access kiya