const timeoutObj = setTimeout(() => {
    console.log('timeout beyond time');
  }, 1500);

  const immediateObj = setImmediate(() => {
    console.log('immediately executing immediate');
  });

  const intervalObj = setInterval(() => {
    console.log('interviewing the interval');
  }, 500);

  clearTimeout(timeoutObj);
  clearImmediate(immediateObj);
  clearInterval(intervalObj);

const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');
const aryaSay = say(arya);
const sensaSay = say(sensa);

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
let sensaT = null;
const  intervalSensa = () => setInterval(() => {
    sensaSay('For the North');
    myEmitter.emit('winter');
    myEmitter.emit('arya');
},1000);

myEmitter.once('winter',() => {
    johnSay('Winter is coming');
})

myEmitter.on('north', () => {
    sensaT = intervalSensa();
});

myEmitter.on('arya', () => {
    setImmediate(aryaSay, 'The king in the North');
});

myEmitter.emit('north')
setTimeout(() => clearTimeout(sensaT),5000)


/*
 const john = 'John';
    const arya = 'Arya';
    const sensa = 'Sensa';
    const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
    const johnSay = say(john);
    const aryaSay = say(arya);
    const sensaSay = say(sensa);
    const EventEmitter = require('events');
    const myEmitter = new EventEmitter();

    myEmitter.on('north', () => {
      sensaSay('For the North');
      setImmediate(() => myEmitter.emit('arya'));
    });

    myEmitter.once('north', () => johnSay('Winter is coming'));

    myEmitter.on('arya', () => aryaSay('The king in the North'));

    const timer = setInterval(() => myEmitter.emit('north'), 1000);
    setTimeout(() => {
      clearInterval(timer);
    }, 5000);
*/
