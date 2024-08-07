class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color){
        super(color);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color){
        super(color);
    }

    render() {
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color){
        super(color);
    }

    render() {
         return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square};