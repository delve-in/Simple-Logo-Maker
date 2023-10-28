const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
    // Test to verify that the BlogPost class can be instantiated.
    describe('Initialize color', () => {
      it('should set color properly', () => {
        const shape = new Circle("red","ABC","White");
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>');
      });
    });
});

