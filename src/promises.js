const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);
const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

const sensaThenArya = () =>
      sensaSay('For the North')
        .then(value => {
          console.log(value);
          return aryaSay('The king in the North');
        })
        .then(console.log);

    sensaThenArya()
      .then(() => johnSay('Winter is coming'))
      .then(value => {
        console.log(value);
        return new Promise((r) => {
          timer = setInterval(sensaThenArya, 1000);
          setTimeout(() => {
            clearInterval(timer);
            r();
          }, 10000);
        });
      })
      .catch(err => console.error(err));

 /*  » implement this scenario using promises :
   » Sensa must say "For the North" each second
   » After the first time Sansa says her sentence, John must say "Winter is                             
     coming"
   » After each time Sansa says her sentence, Arya must say "The King in the                            
     North"
   » The program must end after 10 seconds*/