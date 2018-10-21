//Se crea referencia
const dataBase = firebase.database().ref('cardNumber/');

// Obtener numero tarjeta
const saveCard = () => {
  const numberCard = document.getElementById('addCardInput').value;
  const dataCard = {
    numberCard: numberCard
  }
  dataBase.push().set(dataCard)
};

// Agregar numero tarjeta
dataBase.on('value', function(snapshot) {
  const numbers = snapshot.val();
  printAddCard(numbers);
}, function(errorObject){
  console.log("error de lectuta" + errorObject.code);
})
