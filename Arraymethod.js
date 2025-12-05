
let fooditems = ["potato","apple","tomtao"];
fooditems.push("burger","sandwich");   // push at the end
console.log(fooditems);
 let deleted = fooditems.pop();         // delete at end
 console.log(deleted)

 let num = [1,2,3];
 console.log(num.toString());   // make the number in string


 let jungfood = ["samosa","jalebi"];
 let food = fooditems.concat(jungfood);  // concat join multiple arrays and return result
 console.log(food)

 let marvelheroes = ["thor","spiderman","ironman"]
 marvelheroes.unshift("antman");   // add at the start
 console.log(marvelheroes)
let val = marvelheroes.shift()   // delete value of start
console.log(val)

// slice and splice
let marvelheroes1 = ["thor","spiderman","ironman","padman","tomatoman"]
console.log(marvelheroes1);
console.log(marvelheroes1.slice(0,3))  // slice(startiDx,endIDX) matlab sirf 0 sa lekar 2 tak print karo 3 ko nahi,doesnot change original array

 let arr = [1,2,3,4,5,6]      ;
 arr.splice(2,2,101,103) // splice(starIDx,delcount,newEle)
 //add element  
//  arr.splice(2,0,101)  

//delete
// arr.splice(2,3)  

// replace
// arr.splice(3,1,104);

 console.log(arr)    
 
 
//** */  Qs] create an array to store compnay 1.remove first compnay 2. remove uber add ola in its plce,3.add amaon at end
 let array = ["bllomberg","ms","uber","google","ibm","netflix"];
 array.shift();
 array.splice(2,1,"ola");  // replacing
 array.push("amazon");
 console.log(array);