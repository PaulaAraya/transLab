window.onload = () =>{
  showlogInPage();
}

// Botones
const btnAddCard = document.getElementById('btnAddCard');

const btnRegister = document.getElementById('btnRegister');

const btnCalculate = document.getElementById('btnCalculate');

const btnSaldo = document.getElementById('btnSaldo');

// Agregar Tarjeta
btnAddCard.addEventListener('click', () => {
  addCard();
});

//Ver Saldo Tarjeta
btnSaldo.addEventListener('click', () => {
  cardNumber();
});

//Calcula saldo con tarifa
btnCalculate.addEventListener('click', () =>{ 
  cardFare();
});

//Registro de Usuario
btnRegister.addEventListener('click', () => {
  createUser();
});

//Iniciar Sesión
btnLogIn.addEventListener('click', () => {
  logIn();
});

//Salir Sesión
//btnLogOut.addEventListener('click', () =>{
//  logOut(); 
//});
