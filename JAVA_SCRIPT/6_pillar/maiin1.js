let info1 = {
    name: "Iphone",
    price: 72000,
    rating: 4.8,
    display: function () {
        console.log(this);
    }
}
let info2 = {
    name: "Mackbook",
    price: 122000,
    rating: 5.0,
    display: () => {
        console.log(this);
    }
}
info1.display(); // here display the info1 data
info2.display(); // but here not for arrow functiion this is not working for calling side

