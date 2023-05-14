class Triangle {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public getType(): string {
        if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
            return 'Khong phai tam giac';
        }
        if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
            return 'Khong phai tam giac';
        }
        if (this.a === this.b && this.b === this.c) {
            return 'Tam giac deu';
        }
        if (this.a === this.b || this.b === this.c || this.c === this.a) {
            return 'Tam giac can';
        }
        return 'Tam giac thuong';
    }
}

export default Triangle;
