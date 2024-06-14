function cosumingTiming1() {
    console.log("Consuming 1 start");
    for (var i = 0; i < 10000000; i++) {
        //ding 
    }
    console.log("End consuming 1");
}
function cosumingTiming2() {
    console.log("Consuming 2 start");
    setTimeout(function exc() {
       
        console.log("Complte 2");

    }, 5000);
}
function cosumingTiming3() {
    console.log("Consuming 3 start");
    setTimeout(function exc() {
      
        console.log("Complte 3");

    }, 0);
}
function cosumingTiming4() {
    console.log("Consuming 4 start");
    setTimeout(function exc() {
        
        console.log("Complte 4");

    }, 2000);
}


cosumingTiming1();
cosumingTiming2();
cosumingTiming3();
cosumingTiming4();
console.log("BY");