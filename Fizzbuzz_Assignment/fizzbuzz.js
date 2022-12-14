for(var i=0; i<101; i++) {
    if(i % 3 == 0 && i % 5 == 0){//check for 3 and 5
        console.log("Fuzzbuzz");  
    } else if(i % 3 == 0){//check for 3
        console.log("Fuzz"); 
    } else if(i % 5 == 0){//check for 5
        console.log("Buzz");
    } else{
        console.log(i);
    }
    
}