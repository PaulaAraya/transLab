const assert = require('chai').assert;
global.window = global;
require('../src/js/login'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar emails', () => { //Describe lo que habrá dentro de cada función
  describe('Debería verificar si existe el arroba', () => {
    it('Debería el correo tener solo un arroba', () => { //Caso de prueba
      assert.equal(validateEmail("asdf@asdf.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
      assert.equal(validateEmail("asdf@@asdf.com"), false);
      assert.equal(validateEmail("asdf.com"), false);
    });
    it('Debería el correo tener un arroba antes del dominio', () => {
      assert.equal(validateEmail(".com@asdf"), false);
      assert.equal(validateEmail("pvaraya@gmail.com"), true);
    });
  }); (
    describe('Debería verificar si tiene un dominio', () => {
      it('Tiene un punto y luego solo caracteres del alfabeto', () => {
        assert.equal(validateEmail('asdf@asdf'), false);
        assert.equal(validateEmail('asdf@asdf.'), false);
      });
    }));
  describe('Debería verificar que no tenga carácteres raros', () => {

  }); (
    describe('Debería verificar que tenga al menos 1 caracter antes del arroba', () => {

    }));
});

describe('Validar contraseña', () => { //Describe lo que habrá dentro de cada función
  describe('Debería verificar si existen máximo 8 caracteres', () => {
    it('Debería la contraseña tener al menos 8 caracteres', () => { 
      assert.equal(validatePassword(12345678), true); //solo hasta 8 numeros
      assert.equal(validatePassword(123456), true);//menos de 8 numeros
      assert.equal(validatePassword(12345637829), false); //no más de 8 numeros
    });
    it('Debería la contraseña aceptar solo números.', () => { 
      assert.equal(validatePassword(/[0-9]/g), true); //solo numero
      assert.equal(validatePassword(/[a-z]/g), false); //sin letras
    });
  });
});



