function range(start,end){
    let a=[];
    for(let i=start ; i<=end ;i++){
        a.push(i);
    }
    return a;
}

function sum(a){
    let sum=0;
    for(let i=0 ; i<a.length ; i++){
        sum += a[i];
    }
    return sum;
}

console.log(range(1,10))
console.log(sum(range(1,10)))