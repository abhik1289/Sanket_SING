function createPromissWithLoop() {
    return new Promise(function excutor(resolve, reject) {
        // for (var i = 0; i < 1000000; i++) { 
        //     // do something
        // }
        setTimeout(function () {
            let num = Math.floor(Math.random() * 10);

            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 100000) // not wait throw the code in runtime 
    })
}

let x = createPromissWithLoop();
console.log(x);


