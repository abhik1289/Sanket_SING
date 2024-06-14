

function timeConsumingLoop() {
    console.log("The loop is starting");
    for (var i = 0; i < 100000000; i++) {
        // doing somthing
    }
    console.log("Loop is complete")
}

function nonNativeLoop() {
    console.log("Start of non native");
    setTimeout(function exact() { }, 5000);
    console.log("End");
}

timeConsumingLoop();
nonNativeLoop();
timeConsumingLoop();


/*
here first function run then check it native function or not , here loop is native function so javascript block the space and wait until end code, then goes to nonnative function and asked it runtime it is natibe oir non-native? time consuming by native function or not
here set setTimeout is not a native function so javascript not block the time, Then the event quee irs throw this in using and run code 5s and javscript jumped next function to excuted the native code 
catch is if javscript run this code in between the non native code done his timming it still under evnt loop javscript dont give him pioity after cimplte native work its code runs
*/