class Stack<T> {
    private arr: T[];

    constructor() {
        this.arr = [];
    }

    push(x: T) {
        this.arr.push(x);
    }
    pop() {
        this.arr.pop();
    }
    getLength(): number {
        return this.arr.length;
    }
    top(): T {
        return this.arr[this.arr.length - 1];
    }
    display() {
        console.log(this.arr);
    }
}


let s1 = new Stack<string>();

s1.push("Abhik");
s1.push("Patra");
s1.pop();
console.log(s1.getLength())
console.log(s1.top())
