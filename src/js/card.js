//const cardSave = document.getElementById('cardSave');
//let arrayCard = [];

const addCard = () => {
  
}

const saveCard = () => {
  
}

const PrintSaldo = (saldo) => {
  const saldoPrint = document.getElementById('saldoPrint');
  saldoPrint.innerHTML = '';
  saldoPrint.innerHTML = ` 
    <div class="card-header text-center">SALDO</div>
    <div class="card-body cardText">
    <h1 class="card-text text-center"> ${saldo}</h1>
    </div>
  `; 
}

const calculateCard = (balance, fares) => {
  let balanceCard = balance;
  let fare = fares;
  const total = balanceCard - fare;
  PrintTotal(total);
}

const PrintTotal = (total) => {
  const totalPrint = document.getElementById('totalPrint');
  farePrint.innerHTML = '';
  totalPrint.innerHTML = `
  <div class="card-header text-center">SALDO FINAL</div>
  <div class="card-body cardText text-center">
  <h1 class="card-text">$ ${total}</h1>           
  </div>`
}

const PrintTarifa = (tarifa) => {
  const farePrint = document.getElementById('farePrint');
  farePrint.innerHTML = '';
  farePrint.innerHTML = `
    <div class="card-header text-center">COSTO PASAJE</div>
    <div class="card-body cardText text-center">
      <h1 class="card-text">$ ${tarifa}</h1>  
    </div>
  `;
}

const clearInput = () => {
  document.getElementById('cardNumberInput').value = '';
  document.getElementById('calculatorInput').value = '';
}


/*
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
*/