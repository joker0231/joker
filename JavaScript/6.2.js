class Group {
    constructor(){
        this.array=[];
    }

    add(value){
        if (!this.has(value))
            this.array.push(value);
        return this.array
    }
    
    delete(value){
        this.array = this.array.filter(v => v !== value);
        return this.array
    }

    has(value){
        return this.array.includes(value);
    }

    static from(x){
        let group = new Group
            for (let index = 0; index < x.length; index++) {
                group.add(x[index])
            }
            return group;
    }
}
let group = Group.from([10, 20]); 
console.log(group.has(10)); // → true 
console.log(group.has(30)); // → false 
console.log(group.add(10)); 
console.log(group.delete(10)) ; 
console.log(group.has(10)); // → false