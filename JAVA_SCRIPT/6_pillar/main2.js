class Products {
    name;
    roll;
    age;
    hobby;
    constructor(name, roll, age, hobby) {
        this.name = name;
        this.roll = roll;
        this.age = age;
        this.hobby = hobby;
        // return 10; -----> avoided iit
        //return {} // it is consider because iit is a object

    }
 
    display() {
        console.log(this.name, this.roll);
    }
}


const data = new Products("Abhik", 1);
console.log(data);

// data.display();