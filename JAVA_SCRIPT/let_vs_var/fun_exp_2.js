function even() {
    console.log("Even");
}
function odd() {
    console.log("ODD");
}



(function cal(x) {
    if (x % 2 == 0) return even();
    else return odd();
})(12);
