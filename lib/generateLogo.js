
const { Circle, Square, Triangle } = require('./shapes.js');

function generateLogo(data){
    let logo;
    switch(data.shape)
    {
        case 'Circle':
            const circle = new Circle(data.textColor,data.text,data.shapeColor);
            logo = circle.render();
            return logo;
        case 'Square':
            const square = new Square(data.textColor,data.text,data.shapeColor);
            logo = square.render();
            return logo;
        case 'Triangle':
            const triangle = new Triangle(data.textColor,data.text,data.shapeColor);
            logo = triangle.render();
            return logo;
        default :
        console.log("Error");
    }
 }

 module.exports = generateLogo;