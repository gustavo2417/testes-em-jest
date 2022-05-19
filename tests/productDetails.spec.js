const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('testa se `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('testa se o retorno da Função é um array',() => {
    expect(productDetails).toContain();
  });
  it('testa se o array retornado pela função contém dois itens dentro', () =>{
    expect(productDetails()).toHaveLength(2);
  });
  it('testa se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails()[0]).toBe('object');
    expect(typeof productDetails()[1]).toBe('object');
  });
  it('testa se os dois productIds terminam com 123', () => {
    expect(productDetails('desinfentante', 'candida')[0].details.productId).toBe('desinfentante123');
    expect(productDetails('desinfentante', 'candida')[1].details.productId).toBe('candida123')
  })
  });
  