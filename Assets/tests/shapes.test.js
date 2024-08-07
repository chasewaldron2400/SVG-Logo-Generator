// const { execPath, hasUncaughtExceptionCaptureCallback } = require('process');
const { Circle, Triangle, Square } = require('../shapes');

describe('Shape classes', () => {
        
    test('Triangle setColor method works correctly', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,20 250,180 50,180" fill="blue" />');
    });

    test('Circle renders correctly', () => {
        const circle = new Circle('red');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
    });

    test('Triangle renders correctly', () => {
        const triangle = new Triangle('blue');
        expect(triangle.render()).toBe('<polygon points="150,20 250,180 50,180" fill="blue" />');
    });

     test('Square renders correctly', () => {
        const square = new Square('green');
        expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
});