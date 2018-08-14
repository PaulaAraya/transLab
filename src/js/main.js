const inputCard = document.getElementById('cardNumber');
const btnAddCard = document.getElementById('addCard');
const btnCalculate = document.getElementById('btnCalculate');
const btnRegister = document.getElementById('btnRegister')

//Registro de Usuario
btnRegister.addEventListener('click', createUser);

//Agregar Numero de tarjeta
btnAddCard.addEventListener('click', addCardInput);

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
      registerPage.style.display = 'block';
    }
  })
};
