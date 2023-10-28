class Shapes {
    constructor(textColor, text, shapeColor) {
        this.textColor = textColor;
        this.text = text;
        this.shapeColor = shapeColor;
    }
    setColor(color){
        this.shapeColor = color;
        console.log(color);
    }
    render() {
        
    }
}

class Circle extends Shapes {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor);
    }
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shapes {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor);
    }
    render() {
        return `<rect x="50" width="200" height="200" fill="${this.shapeColor}" />` 
    }
}

class Triangle extends Shapes {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor);
    }
    render() {
        return `<polygon height="100%" width="100%" points="20,180 280,180 150,0" fill="${this.shapeColor}" />`
    }
}

module.exports = { Circle,Square,Triangle };