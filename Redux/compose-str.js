import { compose } from "redux";


function removeSpacing(str) {
    return str.split(" ").join("");
}

function repeatString(str) {
    return str.repeat("2");
}

function convertUpcase(str) {
    return str.toUpperCase();
}

function convertItalic(str) {
    return str.italics();
}

let str = "Hello how are you?";


let composefun = compose(removeSpacing,repeatString,convertUpcase,convertItalic);

console.log(composefun(str))

// console.log(convertItalic(convertUpcase(removeSpacing(removeSpacing(str)))))
