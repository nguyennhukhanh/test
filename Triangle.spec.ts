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
