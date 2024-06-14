function* fetchNextElment() {
    console.log("Inside Generator");
    const x = 10;
    yield 11;
    console.log("entering a yield");
    console.log(yield 70); // takes dunamic value whiich i pass throw next
    const y = x + (yield 30);  //(yield 30) taks a dynamic value and calculate
    console.log("Value of y is " + y);
}

let item = fetchNextElment();

console.log("1", item.next());  // running from start and stop when find yield


console.log("2", item.next());
console.log("3", item.next(50));
console.log("4", item.next());




