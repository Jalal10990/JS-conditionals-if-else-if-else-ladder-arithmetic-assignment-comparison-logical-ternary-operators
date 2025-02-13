console.log("hy this is conditionals tutorials") 

let age = 46;
if(age>18){
    console.log("You can drive");
}
else{

    console.log("You cannot drive");
}

// arithmetic operators  
let age2 = 17;
let grace = 2;
console.log(age2 + grace)
console.log(age2 - grace)
console.log(age2 * grace)
console.log(age2 / grace)
console.log(age2 ** grace)   // exponantiation operator
console.log(age2 % grace) 

if((age2 + grace)>18){
    console.log("You can drive");
}
else{

    console.log("You cannot drive");
}
// assignment operator 
let a = 17;
let b = 2;
a = b;
console.log(a)
a += b;
console.log(a)
a -= b;
console.log(a)
a *= b;
console.log(a)
a /= b;
console.log(a)
a %= b;  
console.log(a)
a ** b;
console.log(a)

// comparison operator
let age3 = 134;
if(age3==18){
    console.log("One")
}else if(age3 !=18){
    console.log("Two")
}else if(age3 ===18){
    console.log("Three")
}else if(age3 !==18){
    console.log("Four")
}else if(age3 >18){
    console.log("Five")
}else if(age3 <18){
    console.log("six")
}else if(age3 >=18){
    console.log("Seven")  
}else if(age3 <=18){
    console.log("Eight")
}else (age3 <=18)
    console.log("Nine")  
    // else ladder 

    // logical operator 
    let x = 9;
    let y  =  5;
    console.log(x!=y && y!=x)
    console.log(x!=y && y==x)
    console.log(x!=y || y!=x)

    // ternary operator

    let q=8;
    let k=7;
    let f;
    f= q>k ? (q-k):(k-q);
    console.log(f)