//Se crea referencia
const cardRef = firebase.database().ref('card/');

//Agregar tarjetas
const addCard = function () {
  const cardNumber = document.getElementById('cardNumberInput').value;
  let saveCard = {
    email: currentUser.email,
    number: cardNumber
  }
  cardRef.push().set(saveCard)
};
//Guardar Tarjetas en el select e input
const selectCard = ()=>{
  
};