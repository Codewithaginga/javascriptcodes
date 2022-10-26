let number1 = 20;

function fun3() {

    number2 = 10;
}

function fun4() {

    let show = "";

    if (typeof  number1 != "undefined") {
        show += 'number1= ' + number1;
    }

    if (typeof number2 != "undefined") {
        show += 'number2= ' + number2;
    }

    console.log(show);
}

fun3()
fun4()
