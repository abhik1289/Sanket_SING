function solve(a, b, c) {
    let rootValue = Math.sqrt((b * b) - (4 * a * c));
    let root1 = (-b + rootValue) / (2 * a);
    let root2 = (-b - rootValue) / (2 * a);
    console.log(root1, root2);
}

solve(2, 3, 4);
