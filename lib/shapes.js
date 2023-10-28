class Shapes {
    constructor(textColor, text, shapeColor) {
        this.textColor = textColor;
        this.text = text;
        this.shapeColor = shapeColor;
    }
    render() {

    }
}

class Circle extends Shapes {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor);
    }
    render() {
        const logo = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>
        <text x="50%" y="60%" font-size="60px" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
        return logo;
    }
}

class Square extends Shapes {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor);
    }
    render() {
        const logo = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" width="200" height="200" fill="${this.shapeColor}" />
        <text x="50%" y="60%" font-size="60px" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
        return logo;
    }
}

class Triangle extends Shapes {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor);
    }
    render() {
        const logo = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <polygon height="100%" width="100%" points="20,180 280,180 150,0" fill="${this.shapeColor}" />
        <text x="50%" y="60%" font-size="60px" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
        return logo;
    }
}

module.exports = { Circle,Square,Triangle };