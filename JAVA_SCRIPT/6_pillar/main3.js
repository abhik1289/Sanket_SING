function Information(a, b) {
    this.name = a;
    this.roll = b;
    this.display = function () {
        console.log(this)
    }
}

const data = new Information("Abhik", 20);


data.display();

