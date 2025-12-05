function hamraname(){
    console.log("hello dear")
}

hamraname();   // calling the function to print

function myfunction(msg){   // taking parameter
  console.log(msg)
}

myfunction("or sab thik hai");  // this is  argument
myfunction("or sab thik hai paglu");

//function -> 2 numbers, sum

function sum(x,y){
   val = x+y;
   console.log(val)
}
 sum(5,6)

 // by using return

 function sum2(x,y){
    s = x+y;
    return s
 }
 let value = sum2(5,0);
console.log(value)
//   sum(5,0)      
//   console.log(s)   // this will print but give error s is not defined cause function is block scope s is inffective after curly bracket





//                        **********         ARROW FUNCTION ********/
// addition function
const arrowSum = (a,b) => {
    console.log(a+b)
};
arrowSum(2,4);
// multiplication function
const arrowmul = (x,y) =>{
    return x*y;
}
m = arrowmul(10,11);
console.log(m)
// only printing
const print=() => {
    console.log("hello world ")
};
print();

// Qs1)  create a functin that takes a string as an argumnent and returns the number of vowels in string
function noofvowels(str) {
       let count =0;
      for(i=0;i<str.length;i++){
           if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
              count++
           } 
      }
      return count;
}
let n= noofvowels("aeiou");   // calling the function
console.log("number of vowels is :",n)

// arrow function for same task
const countvow = (str) =>{
    let count =0;
    for(i=0;i<str.length;i++){
         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count++
         } 
    }
    return count;
}




    //                  ***** ***for each loops ******/
// this always works on array,this are the higer order function means:if any function takes another function as an parameter then they are higher 
// order function or method
let array = [1,2,3,4,];
array.forEach((val) => {  
console.log(val);

});

let cities = ["kalyan","mumbai","varanasi"];
cities.forEach((value,idx,cities) =>{   //callbackfn(value: any, index: number, array: any[]):

console.log(value.toUpperCase(),idx,cities);


})                

//Qs) for given array of numbers,print the square of each using foreach loop

let numbers = [1,2,3,4,5,6];
 numbers.forEach((ele)=>{
    console.log(ele*ele);

 })



      //     ******** MAP METHOD*********
// MAP CREATES A NEW ARRAY BY USING VALUES
let nums = [40,50,60];

let mapping = nums.map((val)=> {  // doesnot change the original array
    return 2*val;
})
console.log("mapping",mapping);



//         ******filter method*******
// create a new array that returns value for filter
let values = [1,2,3,4,5,6];
let filter= values.filter((val)=>{   // like filtering only even numbers
        return val%2==0;

})
console.log("filter values",filter);





    //           ***** reduce method ******/

// perform operations and reduces the array to a single value
let arr = [1,2,3,4];
  let sums = arr.reduce((previous,current)=>{
    return previous + current;
 })
console.log("sum using reduce",sums);    // bahut sara value lega or ek return karke dega

let greater = arr.reduce((prev,curr)=>{
    return prev>curr ? prev:curr;
})
console.log("grater value using reduce",greater)  ;
  



//                       ******QUESTIONS*******///
//Q1) GIVEN ARRAY OF MARKS OF STUDENT FILTER OUT WHO SCORED 90 +
marks=[87,99,100,50.60,91,20];
 let students = marks.filter((ele)=>{
    return ele > 90
})
console.log("marks less than 90",students)


//Q2) take an input array and find out addition and factorial using reduce method

let N = prompt("enter a number");
let Arr= [];
for( i=1; i<=N; i++){
Arr[i-1] = i;    // 1(0 index pa store hoga)   ,2(1),3(2).

}
console.log("array is",Arr)

let addition = Arr.reduce((prev,curr)=>{  // addition
    return prev+curr;
})
console.log("after adding",addition)

let factorial = Arr.reduce((prev,curr)=>{   // factorial
    return prev*curr;
})
console.log("after multiply",factorial)