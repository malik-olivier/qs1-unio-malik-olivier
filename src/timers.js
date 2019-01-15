const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');
const aryaSay = say(arya);
const sensaSay = say(sensa);

const createInter =  setInterval(()=> sensaSay("For the north"),1000);
let interval = createInter();
setTimeout(()=> {
    clearInterval(interval);
},10000);

setTimeout(() => {
    clearInterval(interval);
    setImmediate(() => {aryaSay("thank you for needle"); interval = createInter();});
    johnSay("hello Ladies Stark")
},2000);
