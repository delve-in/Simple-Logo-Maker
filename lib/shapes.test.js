const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
    describe('Initialize color', () => {
      it('should set color properly', () => {
        const shape = new Circle("red","ABC","White");
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>');
      });
    });
});

describe('Square', () => {
    describe('Initialize color', () => {
      it('should set color properly', () => {
        const shape = new Square("red","ABC","White");
        shape.setColor("Green");
        expect(shape.render()).toEqual('<rect x="50" width="200" height="200" fill="Green" />');
      });
    });
});

describe('Triangle', () => {
    describe('Initialize color', () => {
      it('should set color properly', () => {
        const shape = new Triangle("red","ABC","White");
        shape.setColor("Black");
        expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="20,180 280,180 150,0" fill="Black" />');
      });
    });
});
