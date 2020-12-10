function reverseArray(a){
    let b=[];
    for(let i=a.length-1 ; i>=0 ; i--){
        b.push(a[i]);
    }
    return b;
}

function reverseArrayInPlace(a){
    let temp;
    for(let i=0 ; i<a.length/2 ; i++){
        temp=a[i];
        a[i]=a[a.length-i-1];
        a[a.length-i-1]=temp;
    }
    return a;
}

console.log(reverseArray([1,2,4,5]))
let arrayValue = [1, 2, 3, 4, 5]; 
reverseArrayInPlace(arrayValue); 
console.log(arrayValue);