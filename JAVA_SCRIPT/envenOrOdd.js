let number = 11;

let flag =0;

for(let i=2; i<number; i++) {
    console.log(i);
    if(number / i == 0 ){
        flag = 0;
        console.log("first")
    }else{
        flag = 1;
    }
}


if(flag == 0){
    console.log("even");
}else{
    console.log("ODD");
}






