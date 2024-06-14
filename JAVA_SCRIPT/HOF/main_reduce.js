const data = [
    {
        name: "Iphone",
        price: 20000,
    },
    {
        name: "Case",
        price: 2000,
    },
    {
        name: "Charger",
        price: 500,
    }
];
const num = [10, 20, 30, 40];


function sum(prevEl, currentElm) {
    // preveious elment points at index 0 and nextelment points index 1 then perfrom opration and update index and so on..........
    // console.log(prevEl.price, currentElm.price)
    return { price: prevEl.price + currentElm.price };
    // let newElment = prevEl.price + currentElm.price;
    // console.log(newElment)
}

let result = data.reduce(sum);
console.log(result);