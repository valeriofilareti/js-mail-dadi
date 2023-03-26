const mailAutorizzate = [
  'ad@gm.com',
  'il@gm.com',
  'sy@gm.com',
  'fi@gm.com',
  'ed@gm.com'
]

const userMail = 'sy@gm.com' //prompt('inserisci la tua mail')

let mailTrovata = false

for(i = 0; i<mailAutorizzate.length; i++) {
  if(userMail === mailAutorizzate[i]){
    mailTrovata = true;
  }
}

if(mailTrovata){
  console.log('yes')
}else{
  console.log('no')
}


// dadi

const num = Math.ceil(Math.random() * 6);
const num2 = Math.ceil(Math.random() * 6);

console.log(num, num2);

if(num > num2) {
  console.log('hai vinto');
}else if(num < num2) {
  console.log('hai perso')
}else{
  console.log('hai pareggiato');
}


