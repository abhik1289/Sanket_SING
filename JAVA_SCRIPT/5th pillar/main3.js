//-------------------> Generator -------------------------------->


function* fetchElement() {
    // this is a generator function
    console.log("Start");
    yield 1;
    yield 2;
    console.log("Middle");
    yield 3;
    yield 4;
}

let item = fetchElement();
console.log(item.next());
console.log(item.next());
console.log(item.next());  // when i called this step it also called the console log value and next yield
console.log(item.next());
console.log(item.next());
console.log(item.next());

function* fetchElement2() {
    // this is a generator function
    console.log("Start");
    yield 1;
    yield 2;
    return 10; // after return value will be undefined
    console.log("Middle");

    yield 3;
    yield 4;
}

let item2 = fetchElement2();
console.log(item2.next());
console.log(item2.next());
console.log(item2.next());  // when i called this step it also called the console log value and next yield
console.log(item2.next());
console.log(item2.next());
console.log(item2.next());
