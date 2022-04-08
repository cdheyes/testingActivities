let myArray = ['Dan', `Stuart`, `Ben`];

function addUp (num1, num2){
    return num1 + num2;
};

let myObject = {name: "Chris"};

let doveFromAbove = true;
let crowFromBelow = false;

function letItBe(){
    return true;
};

function letItNotBe(){
    return false;
};

var ofLife = 42;
var meaning = ofLife.toString();

function thingToString(thing){
    return thing.toString();
};

//functions, data etc to be exported and tested
module.exports = {myArray, addUp, myObject, doveFromAbove, crowFromBelow, 
    letItBe, letItNotBe, meaning, thingToString};