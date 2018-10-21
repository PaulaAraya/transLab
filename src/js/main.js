// Botones
const btnAddCard = document.getElementById('btnAddCard');

const btnRegister = document.getElementById('btnRegister');
/*
const btnCalculate = document.getElementById('btnCalculate');
const btnSaldo = document.getElementById('btnSaldo');

const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');*/

// Agregar Tarjeta
btnAddCard.addEventListener('click', () => {
  addCard();
});




//Registro de Usuario
btnRegister.addEventListener('click', () => {
  createUser();
});

/*
//Ver Saldo Tarjeta
btnSaldo.addEventListener('click', renderInfoCard);

//Iniciar Sesión
btnLogIn.addEventListener('click', logIn);

//Salir Sesión
//btnLogOut.addEventListener('click', logOut);



//Agregar Numero de tarjeta
btnAddCard.addEventListener('click', addCard);

//Seleccionar tarjeta guardada
btnCalculate.addEventListener('click', selectCard);

//Cambio de Pantallas
const hideAll = () => {
  logInPage.style.display = 'none';
  registerPage.style.display = 'none';
  homePage.style.display = 'none';
  porfilePage.style.display = 'none';
  calculatorPage.style.display = 'none';
  FaqPage.style.display = 'none';
  saldoPage.style.display = 'none';
}


const viewHome = function(){
  //.onAuthStateChanged metodo responde a todas la interacciones que realiza el usuario
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      console.log(user);
      hideAll();
      homePage.style.display = 'block';
    }else{
      hideAll();
      logInPage.style.display = 'block';
    }
  })
};
*/