function loop(x,test,update,body){
    for(x;test(x);x=update(x)){
        body(x);
    }
}


loop(3, n => n > 0, n => n - 1, console.log); 
// → 3 // → 2 // → 1