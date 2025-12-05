let str = "apna college";
str.length;  // for finding length
console.log(str[0],str[1])   // for finding string at particular place

// template literals
let specialString = `this is juri string`
console.log(typeof specialString);

// benefit of using template string
let obj= {
    name: "pen",
    price:20,
}
console.log("the cost of",obj.name, "is",obj.price); // have to print like this using console too much complexity
// but using template literals
let output = `(using the template)the cost of ${obj.name} is ${obj.price}`  // this is known a string interpolation i.e create a string by doing substitution of placeholder
console.log(output);


//escape characters 
console.log("apna\ncollege"); // print on next line
let str0 = "Apna\tcollege";  // escaped the gap instead of 13, 12 is the length
console.log(str.length);



//                    //***string methods */   
// let str = " neha college "    // note: string is always immutable 
// let newStr= str.toUpperCase();
// let new1Str = str.toLowerCase();
// let new2Str = str.trim();  // remove whitespace only from back and forward not in middle
// console.log(str);
// console.log(newStr);
// console.log(new1Str);
// console.log(new2Str);
// console.log(str.slice(6,10));  // return part of string
// let str2 = "going girl hai"
// console.log(str.concat(str2))  // join the two strings
// console.log(str.replace("eha","ikki"));  // replace one value
// console.log(str.replaceAll("e","ikki"));   // replace all e


// note: here original string cant be changed new string only can be created


// Q1 prompt the user to enter thir fullname,generate a usrname for them based on the input 
//  start the username with @ then their fullnme and ending with namelength

let str3 = prompt("enter a name");
let str2="@"

console.log("@".concat(str3)+str3.length);   // fisrt method 
console.log("@"+str3+str3.length);   // second method
