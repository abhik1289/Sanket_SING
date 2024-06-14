

let x = [1, 100, 104, 1004, 10, 4, 5, 40, 401];


let y =x.sort(function (a, b) {
    return a - b;
    // a< b a-b -> answer should be nagative, when answer is nagative a is going to before b
})
console.log(y)

