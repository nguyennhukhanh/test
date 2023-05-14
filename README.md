# Title
**Bài toán tam giác** xây dựng lớp Test và chạy thử.

## Usage
Bạn có thể sử dụng class **Triangle** bằng cách import hoặc require nó vào trong dự án của mình, sau đó khởi tạo một đối tượng và gọi các phương thức để thực hiện bài toán đó chẳng hạn như kiểm tra tam giác.
```ts
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

```

## Testing
```ts
import Triangle from './Triangle';

describe('Triangle', () => {
    it('should return "Khong phai tam giac" for invalid input', () => {
        const triangle1 = new Triangle(0, 1, 2);
        const triangle2 = new Triangle(1, 2, -1);
        const triangle3 = new Triangle(1, 2, 3);
        const triangle4 = new Triangle(3, 3, 7);
        expect(triangle1.getType()).toBe('Khong phai tam giac');
        expect(triangle2.getType()).toBe('Khong phai tam giac');
        expect(triangle3.getType()).toBe('Khong phai tam giac');
        expect(triangle4.getType()).toBe('Khong phai tam giac');
    });

    it('should return "Tam giac deu" for equilateral triangles', () => {
        const triangle = new Triangle(2, 2, 2);
        expect(triangle.getType()).toBe('Tam giac deu');
    });

    it('should return "Tam giac can" for isosceles triangles', () => {
        const triangle1 = new Triangle(2, 2, 3);
        const triangle2 = new Triangle(3, 4, 4);
        const triangle3 = new Triangle(4, 5, 4);
        expect(triangle1.getType()).toBe('Tam giac can');
        expect(triangle2.getType()).toBe('Tam giac can');
        expect(triangle3.getType()).toBe('Tam giac can');
    });

    it('should return "Tam giac thuong" for scalene triangles', () => {
        const triangle1 = new Triangle(3, 4, 5);
        const triangle2 = new Triangle(5, 6, 7);
        expect(triangle1.getType()).toBe('Tam giac thuong');
        expect(triangle2.getType()).toBe('Tam giac thuong');
    });
});


```

## Run
```cmd
npm run test
```

## Result
```cmd
 PASS  ./Triangle.spec.ts
  Triangle
    √ should return "Khong phai tam giac" for invalid input (5 ms)
    √ should return "Tam giac can" for isosceles triangles (2 ms)
    √ should return "Tam giac thuong" for scalene triangles (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.410 s, estimated 2 s
Ran all test suites.
```

## Stay in touch
Facebook - [Khanh Nguyen](https://www.facebook.com/KWalkerNNK)