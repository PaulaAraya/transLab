const dataBase = firebase.database().ref('cardNumber/');

dataBase.on('value', function(snapshot) {
  const numbers = snapshot.val();
  const cardAddPrint = document.getElementById('cardAddPrint');

  Object.keys(numbers).forEach(key => {
    cardAddPrint.innerHTML += '';
    cardAddPrint.innerHTML += `
    <ul class="list-group list-group-flush" style="margin: 0; padding-top: 0px;">
    <li class="list-group-item" style="padding-top: 0px; padding-bottom: 0px;">
    <p class="text-center card-text">${numbers[key].numberCard}</p>
    </li>
    </ul>
    `;
  });
}, function(errorObject){
  console.log("error de lectuta" + errorObject.code);
})

// Obtener numero tarjeta
const saveCard = () => {
  const numberCard = document.getElementById('addCardInput').value;
  const dataCard = {
    numberCard: numberCard
  }
  dataBase.push().set(dataCard)
};

// Agregar numero tarjeta