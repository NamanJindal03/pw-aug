// if 

// ternary operator 

// conditional operators -> > < >= && || ===

// let a = 20;

// if(a > 50){
//     console.log('this block of code is executed')
// }
// else if(a <20){
//     console.log('second block of code is executed')
// }
// else{
//     console.log('ah we have reached all the possibilities')
// }

//why is js considered as a dynamically typed languaged -> 

// var variableStore = 'a';
// variableStore = 1;
// variableStore = true;
// variableStore= new Date();
// variableStore = function abcd(){}

//Typescript -> strict data type -> 

//when was let and const introduced why did we even need them? 
// ES6 -> 
/* 
    let const, promises map reduce filter 

    var was too lilient -> 
*/

// var abcd = 10;

// const abcd2 = 20;

// // const abcd3; //error 
// abcd2 = 'a'

// difference between == and === 

// data type conversion
// auto coercision -> 
// let obj ={}

// let obj = {ob: {key: 10}};
// let obj = {key: 10};
// let obj = {};

// if(obj.key === 10 || (obj.ob && obj.ob.key === 10)){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

//error in the above

//defining a function
function func1(numb){
    console.log('func1', numb);
}

const funcVar = function(){

}

const funcVarNamed = function func2(){

}

const ans = func1(10, 'a', [10, 20]);
console.log(ans) //?

func1(100);


