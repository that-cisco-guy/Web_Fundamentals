// load index.html in browser and use buttons to run



function code1(){ //Print odds 1-20
    for(var i = 0; i < 21; i++){
        if( i % 2 != 0){
            console.log(i);
        }
    }
}

function code2(){ //Decreasing multiples of 3
    for(var i = 100; i > 0; i--){
        if( i % 3 == 0){
            console.log(i);
        }
    }
}

var seq = [4,2.5,1,-0.5,-2,-3.5];
var x = 0;
function code3(){ //Print the sequence
    for(var i = 0; i < seq.length; i++){
        x = seq[i];
        console.log(x);
    }
}

var sum = 0;
function code4(){ //Sigma
    for(var i = 0; i < 101; i++){
        sum += i;
        console.log(sum);
    }
}

var prod = 1;
function code5(){ //Factorial
    for(var i = 1; i < 13; i++){
        prod *= i;
        console.log(prod);
    }
}