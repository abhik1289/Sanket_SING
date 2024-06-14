

function process() {
    let i = 0;
    function innerFunction() {
        i += 1;
        return i;
    }
    return innerFunction; // we are calling not returning
}

let res = process();
console.log(res()); // its retturn a inner function 


function process() {
    let i = 0;
    function innerFunction() {
        i += 1;
        return i;
    }
    return innerFunction;
}
function process() {
    let i = 10;
    let j = [12.14, 16];  //closure only remembered i and j not k, 
    let k = 90;
    function innerFunction() {
        i += 1;
        console.log(j);
        return i;
    }
    return innerFunction;
}
