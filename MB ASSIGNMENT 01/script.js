//own biodata
const name = "HASEEB";
const fatherName = "MUHAMMAD ASHRAF"
const age = 19;
const occupation = "FRONTEND DEVELOPER";
const city ="KARACHI";
const CNIC = 4240195581201;
let education = "ENTER"
let email = "ABDULHASEEB.STD07@GMAIL.COM";
let phone = 923121051767;
let address = "JAMNAGHER MOHALLAH BALDIA TOWN KARACHI";

const biodata = 
`
name :${name} <br>
fatherName :${fatherName} <br>
age :${age} <br>
occupation :${occupation} <br>
city :${city} <br>
CNIC :${CNIC} <br>
education :${education} <br>
email :${email} <br>
phone :${phone} <br>
address :${address} <br>
`;
document.write(biodata);


// differrence between var,let,const


// var
// redeclare (yes)
// reassigned (yes)
// hoisted  (yes)
// funtion scoppe (yes)
// global scope (yes)

//redeclared
var see = "HASEEB";
var see = "ABDULHASEEB";
console.log(see);

//reassigned
var x = 20;
x = 30;
console.log(x);

// //hoisted

console.log(meta);
var meta = "META AI";
console.log(meta);

// //funtion scope
function abdulHaseeb(){
  var ali = "name";
console.log(abdulHaseeb);
}
abdulHaseeb()


// //var global scope

var glolbalvar = "yes i am global";

function globalScope(){
    
    
}
console.log(glolbalvar);
globalScope()



// //let
// //redeclare (no)
// //reassigned (yes)
// //hoisted  (no)
// //funtion scoppe (yes)
// //block scope (yes)


//redeclared
// let see1 ="HASEEB";
// let see1 = "HASSEB1";
// console.log(see1);


// //reassigned
let hello = "ABDUL";
hello = "ABDULHASEEB";
console.log(hello);

// //hoisted
// console.log(chatgpt);
// let chatgpt = "CHATGPT";
// console.log(chatgpt);


//function scope
function stronger() {
    let css = "CASCADING STYLE SHEET";
    console.log(stronger);
}
stronger();

//block scope

let blockscope = "I AM BLOCK SCOPE";

function blockScopeExample(){

console.log(blockscope);

}
blockScopeExample()



//const
// //redeclare (no)
// //reassigned (no)
// //hoisted  (no)
// //funtion scoppe (yes)
// //block scope (yes)


//redeclared
// const see2 = "MUHAMMAD HASEEB";
// const see2 = "muhammad haseeb turk";
// console.log(see2);

//reassigned
const hello2 = "ABDUL HASEEB";
hello2 = "ABDUL HASEEB TURK";
console.log(hello2);

//hoisted
console.log(chatgpt2);
const chatgpt2 = "CHATGPT AI";
console.log(chatgpt2);


