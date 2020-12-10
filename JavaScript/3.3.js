function countBs(x){
    let count = 0;
    for(let i=0 ; i<x.length-1 ; i++){
        if("string"[i] = "B")
            count++;
    }
    return count;
}

function countChar(y,z){
    let count = 0;
    for(let i=0 ; i<y.length ; i++){
        if(y[i] == z){
            count ++;
        }
    }
    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));