function fetchNextElment(array) {
    let idx = 0;
    function next() {
        if (array.length == 0) {
            return undefined;
        }
        else {
            let x = array[idx];
            idx++;
            return x;
        }
    }
    return next ; //{next} now fetchnextlemnt is object which contains a function called next ok thats it
}

let element = fetchNextElment([10, 20, 30, 40, 50]);

console.log(element());
console.log(element());
console.log(element());


// console.log(element.next());
// console.log(element.next());
// console.log(element.next());
// console.log(element.next());

