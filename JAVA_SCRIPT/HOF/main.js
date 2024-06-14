
// A fun which takes another function as a argument is called higher order functions

function main(x,fn){
    console.log(x);
    console.log(fn)
    fn();
}



main(10,function dummy(){
    console.log("Abhik");
})