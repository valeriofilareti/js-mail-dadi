const mailAutorizzate = [
  'ad@gm.com',
  'il@gm.com',
  'sy@gm.com',
  'fi@gm.com',
  'ed@gm.com'
]

const userMail = prompt('inserisci la tua mail')

console.log(userMail);

console.log(mailAutorizzate);

for(i = 0; i<mailAutorizzate.length; i++) {
  if(userMail === mailAutorizzate[i]){
    console.log('yes')
  }
}
