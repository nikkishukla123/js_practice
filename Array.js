let marks = [97,98,99,100]
console.log(marks);
console.log(marks.length);
marks[0]=66;  // note :array is mutable

let heroes = ["permn","spidy","batman"]
console.log(heroes[0]); // can print particular value using index


// for loop
for(let i=0; i<heroes.length; i++){  // can print all value
    console.log(heroes[i])
}

// for-off loop
for(let hero of heroes){

    console.log(hero.toUpperCase())
}

// Q1 for given marks  find the average of the entire class

let arr = [85,90,50,20];
let sum = 0;
for(i=0; i<arr.length; i++){
    sum = sum + arr[i]
}
let avg = sum/arr.length;
console.log("average is:",avg);

//Q2. for a given array with price of 5 items [250,645,300,900,50],all items have 10% off on them,change the array to store final price after applying Offer
let arr1 = [250,645,300,900,50];
for(i=0; i<arr1.length; i++){
  offer = arr1[i]/10;
  arr1[i]= arr1[i]-offer;

}
console.log("value aftr offer",arr1);