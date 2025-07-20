'use strict';

// Global scope
console.log(this); //Output: window
console.log(globalThis);    //Output: window

// function scope
function show(){
    console.log(this); // undefined in 'strict mode'
}
show();

const firstName="Mohammed";
const mh={
    // firstName: `Mohammed`,
    myfunc:function(){
        console.log(this);
        console.log(`Hi 👋🏻, `+this.firstName);
    },
    print:()=>console.log(`Hello 👋🏻, `+this.firstName)
};

mh.myfunc();
mh.print();
// person.print(); 


func();
function func(){
    console.log("Hi");
}

console.log(typeof func);

const f=function(){
    console.log("hi from f");
}
f();
console.log(typeof f);