// function is a building blocks
// This is paremeter
// if you dont pass the second value it will bring undefined
function greet(name, lastName) {
    console.log('hello world ' + name + '' + lastName);
}
// argument is the actual 
greet('Melinda', ' pauline');

//performing a task
function square(number) {
    return number * number;
    //console.log( 5 + number);
}

let number = square(5);
console.log(number);

function love() {
    let first = 'i';
    let sec = 'love you';
    console.log(first + '' + sec);
    
}

love();

/* bjhhhhhhv
vjhhfdnfd
bj,f,,,,*/

let a = 23;
a += 24;
console.log(a);


let mese = 'brian\n\taginga\nmadiang';
console.log(mese);

let myStr = 'brian';
myStr += ' aginga';
console.log(myStr);

//global scope and function

let myGlobal = 10;
function fun1() {

    oopGlobal = 5;

}


function fun2() {
    let outPut = "";
    if (typeof myGlobal != "undefined") {
        outPut += "myGlobal: " + myGlobal;
    }

    if (typeof oopGlobal != "undefined") {
        outPut += "oopGlobal: " + oopGlobal;
    
    }

    console.log(outPut);
}


fun1()
fun2()


