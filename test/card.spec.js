const assert = require('chai').assert;
global.window = global;
require('../src/js/card');

describe('Ingreso de ID de tarjeta', () => { //Describe lo que habrá dentro de cada función
  describe('Debería verificar los digitos de la tarjeta Bip', () => {
    it('Debería tener la tarjeta 8 digitos', () => { 
      assert.equal(validateCard(12345678), true); //solo hasta 8 digitos
      assert.equal(validateCard(123456), false);//menos de 8 digitos
      assert.equal(validateCard(12345637829), false); //no más de 8 digitos
    });
    it('Debería tener la tarjeta solo números', () => { 
      assert.equal(validateCard(/[0-9]/g), true); //solo numero
      assert.equal(validateCard(/[a-z]/g), false); //sin letras
    });
    it('Debería verificar que no ingrese campos vacíos', () => { 
      assert.equal(validateCard(''), false);
    });
  });
});