import { somaHorasExtras, calculaDescontos } from '../index';

describe('Testes dos cálculos de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const valorEsperado = 2500;
    const valorRetornado = somaHorasExtras(2000, 500);

    expect(valorRetornado).toBe(valorEsperado);
  });

  it('Deve descontar o valor do salário', () => {
    const valorEsperado = 2300;
    const valorRetornado = calculaDescontos(2500, 200);

    expect(valorRetornado).toBe(valorEsperado);
  });
});
