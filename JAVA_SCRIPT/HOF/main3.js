var array = [10, 27, 45, 78];


array.map((item, index) => {
    console.log(`${item} at position ${index}`);
})

function customMapper(array, fun) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(fun(array[i], i));
    }
}


