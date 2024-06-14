function A() {

}

A.prototype.fun = function () {
    console.log("Hello world");
}


function B() {

}

Object.setPrototypeOf(B.prototype, A.prototype);

let x = new B();
console.log(x)
x.fun();