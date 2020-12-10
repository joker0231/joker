function isEven(x){
    if(x<=0){
        console.log("It is a wrong number.")
    }
    else if(x%2 == 1){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(-3))