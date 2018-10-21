const cardNumberInput = document.getElementById('cardNumberInput');
//const cardSave = document.getElementById('cardSave');
//let arrayCard = [];

const addCard = () => {
  
}

const saveCard = () => {
  
}

const PrintSaldo = (saldo) => {
  const saldoPrint = document.getElementById('saldoPrint');
  saldoPrint.innerHTML += ` 
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
  totalPrint.innerHTML += `<h1 class="card-text">$ ${total}</h1>`
}

const PrintTarifa = (tarifa) => {
  const farePrint = document.getElementById('farePrint');
  farePrint.innerHTML += `<h1 class="card-text">$ ${tarifa}</h1>`
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