const EventEmitter = require('events');


describe('event emitter tests', () => {
  it('emits and listens to events', done => {
    const ee = new EventEmitter();
    
    // ee.on('we did it', done); is the same! 
    ee.on('we did it', () => {
      done();
    });

    ee.emit('we did it');
  }); 

  it('emits and listens to events with data', done => {
    const ee = new EventEmitter();

    ee.on('newDog', dog => {
      expect(dog).toEqual({
        name: 'Nolan',
        age: 14,
        weight: '55lbs'
      });
      done();
    });

    ee.emit('newDog', {
      name: 'Nolan',
      age: 14,
      weight: '55lbs'
    });
  });
});
