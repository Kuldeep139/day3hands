// not defined, undefined, null
//not defined - Any variable which we try to access but not declared will throw us a reference Error: variable not defined
// console.log(myAge);//not defined

// undefined - If a variable is declared but not assigned any value yet, but if we try to access that variable then we will get the errror as undefined.
let myHobbies;
console.log(myHobbies);
myHobbies = "Skating";
console.log(myHobbies);

// null - Its a default value assigned by a user to the variable as long as th variable  has not been assigned its original /updated value

let amIadult = null;
console.log(amIadult)//null
amIadult = true;
console.log(amIadult)//true
// GLOBAL SCOPE
let fname = "Kuldeep";
let lname = "Rathod";
let age = 24;
console.log(fname, lname, age)

// LOCAL SCOPE
{
    let fname = "Kuldeep";
    let lname = "Rathod";
    let age = 24;
    console.log(fname, lname, age)

}

console.log(fname, lname, age)

add(5,7)
function add(a,b){
    let result = a+b;
    console.log(result);
}

console.log(2||3)
console.log(0||3)
console.log(0||0)

console.log(2&&3)
console.log(0&&3)
console.log(3&&0)

console.log(a++);//1//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line
