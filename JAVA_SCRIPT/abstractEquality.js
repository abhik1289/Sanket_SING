let obj = {
    x: 10,
    valueOf() {
        return 100;
    }
}


console.log(99==obj);
console.log(100==obj);

let obj1 ={x:10};
let obj2 ={x:10};
let obj3 ={x:10};

console.log(obj1==obj2);
console.log(obj2==obj3);
console.log(obj1==obj1);
console.log({x:10}=={x:10})

// both obj have same value but different location so its shows false , only Object == obj

