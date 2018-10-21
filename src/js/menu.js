const logInPage = document.getElementById('logInPage');
const registerPage = document.getElementById('registerPage');
const homePage = document.getElementById('homePage');
const porfilePage = document.getElementById('porfilePage');
const calculatorPage = document.getElementById('calculatorPage');
const saldoPage = document.getElementById('saldoPage');
const faqPage = document.getElementById('faqPage');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

const hidePages = () => {
  logInPage.style.display = 'none';
  registerPage.style.display = 'none';
  homePage.style.display = 'none';
  porfilePage.style.display = 'none';
  calculatorPage.style.display = 'none';
  saldoPage.style.display = 'none';
  faqPage.style.display = 'none';
  menu.style.display = 'none';
  nav.style.display = 'none';
}


const showlogInPage = () => {
  hidePages();
  logInPage.style.display = 'block';
}

const showRegisterPage = () => {
  hidePages();
  registerPage.style.display = 'block';
}
const showHomePage = () => {
  hidePages();
  menu.style.display = 'block';
  nav.style.display = 'block';
  homePage.style.display = 'block';
}
const showPorfilePage = () => {
  hidePages();
  menu.style.display = 'block';
  nav.style.display = 'block';
  porfilePage.style.display = 'block';
}
const calculatorPage = () => {
  hidePages();
  menu.style.display = 'block';
  nav.style.display = 'block';
  calculatorPage.style.display = 'block';
}
const saldoPage = () => {
  hidePages();
  menu.style.display = 'block';
  nav.style.display = 'block';
  saldoPage.style.display = 'block';
}
const faqPage = () => {
  hidePages();
  menu.style.display = 'block';
  nav.style.display = 'block';
  faqPage.style.display = 'block';
}
