const EventEmitter = require('events');


describe('event emitter tests', () => {
  it('emits and listens to events', done => {
    const ee = new EventEmitter();

    ee.on('we did it', () => {
      done();
    });

    ee.emit('we did it');
  }); 

  
});