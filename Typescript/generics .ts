
type pairOfNumbers = [number, number];

function linearSearch<T>(arr: T[], target: T): [number, T] {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) return [i, arr[i]];
    }
    return [-1, target];
}


let arr: number[] = [12, 153, 86, 354, 32, -87, 35];
let arrs: string[] = ["ab", "ba", "def", "na", "rat", "pat"];

console.log(linearSearch<number>(arr, 860));
console.log(linearSearch<string>(arrs, "def"));

