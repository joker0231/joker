let size = 8;
let temp1 ="" , temp2 ="";
        for(let i=1 ; i<=size/2 ; i++){
            temp1 += " #";
        }
        for(let i=1 ; i<=size/2 ; i++){
            temp2 += "# ";
        }
    for (let row = 0; row < size; ++row) {
        console.log(row % 2 === 0 ? temp1 : temp2);
    }
    
