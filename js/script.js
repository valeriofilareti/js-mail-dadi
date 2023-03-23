const mailAutorizzate = [
  'ad@gm.com',
  'il@gm.com',
  'sy@gm.com',
  'fi@gm.com',
  'ed@gm.com'
]

const userMail = prompt('inserisci la tua mail')

for(i = 0; i<mailAutorizzate.length; i++) {
  if(userMail === mailAutorizzate[i]){
    console.log('yes')
  }
}


// dadi


const dadoFacce = [1, 2, 3, 4, 5, 6];

const num = Math.floor(Math.random() * dadoFacce.length);
const num2 = Math.floor(Math.random() * dadoFacce.length);

console.log(dadoFacce[num]);
console.log(dadoFacce[num2]);

