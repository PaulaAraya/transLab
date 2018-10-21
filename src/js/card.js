const printAddCard = (numbers) => {
  const cardAddPrint = document.getElementById('cardAddPrint');
  const calculatorSelect = document.getElementById('calculatorSelect');
  const saldoSelect = document.getElementById('saldoSelect');

  Object.keys(numbers).forEach(key => {
    cardAddPrint.innerHTML += '';
    cardAddPrint.innerHTML += `
    <ul class="list-group list-group-flush" style="margin: 0; padding-top: 0px;">
    <li class="list-group-item" style="padding-top: 0px; padding-bottom: 0px;">
    <p class="text-center card-text">${numbers[key].numberCard}</p>
    </li>
    </ul>`;
    calculatorSelect.innerHTML += ` <option value="${numbers[key].numberCard}">${numbers[key].numberCard}</option>`;
    saldoSelect.innerHTML += ` <option value="${numbers[key].numberCard}">${numbers[key].numberCard}</option>`;
  });
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

