// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.


let fname: string = "Abhik";
fname = "Patra";
console.log(fname);

let userId: string | number = "10";
userId = 78;

let numbers: number[] = [23, 54, 2, 31, 1];
console.log(numbers);

let hetro: any[] = [32, "Abhik", true, null];
console.log(hetro);

let elmements: (string | number | boolean)[] = ["Abhik", 21, false, 9, 78];
console.log(elmements)

let data = "Abhik Patra";
//array in from type tuple

let infos: [number, string, number] = [32, "Abhik", 65];
console.log(infos);

interface Products {
    name: string,
    age: number,
    hobby: (string)[]
}

let p1: Products = {
    name: "Abhik",
    age: 19,
    hobby: ["coading", "thinking"]
}

function sum(a: number, b?: number): number {
    return a + (b || 0);
}










