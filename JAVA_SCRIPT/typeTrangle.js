let x = 60;
let y = 20;
let z = 10;


if ((x == y) && (y == z)) {
    console.log("Equvalent");
} else if (((x == y) && (y != z)) || ((x == z) && (x != y)) || ((y == z) && (y != x))) {
    console.log("Iso secaler")
}else{
    console.log("Scaler")
;}
