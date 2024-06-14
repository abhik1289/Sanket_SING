class Complex {
    private real: number;
    private img: number;

    constructor(real: number, img: number) {
        this.real = real;
        this.img = img;
    }

    display(): void {
        console.log(`The number is:= ${this.real}+i${this.img}`);
    }

    add(C: Complex): void {
        this.real += C.real;
        this.img += C.img;
    }
}

let p1: Complex = new Complex(12,2);
let p2: Complex = new Complex(2,12);
// p1.display();
// p2.display();
p1.add(p2);
p1.display()
