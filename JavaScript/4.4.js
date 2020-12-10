function deepEqual(a,b){
    if (a === b) return true;
    if(typeof a != "object" || typeof b != "object") return false;
    
    let A_keys=Object.keys(a), B_keys=Object.keys(b);
    for (let key of A_keys) {
        if (!deepEqual(a[key], b[key])) 
        return false;
    }
        return true;
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true