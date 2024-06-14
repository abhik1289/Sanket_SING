let obj2 = {
    x: 30, toString() {
        return 10;
    }
}
let obj3 = {
    x: 30, toString() {
        return "12";
    }
}
let obj4 = {
    x: 30, toString() {
        { }
    }
}
console.log(100 - obj2);
console.log(100 - obj3); //88
console.log(100 + obj3); //10012
console.log(100 - obj4);

