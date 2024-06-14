class Products {
    #name; // now it is priivate
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    set name(value) {
        if (typeof value === 'string') {
            this.#name = value;
        } else {
            console.log("Invalid value passed");
            return;
        }
    }
    get name() {
        console.log(this.#name);
    }
}

let p = new Products("Abhik", 12);
// console.log(p);
console.log(p.name); // after use of "set" and "get" keyword we use it as a property  
