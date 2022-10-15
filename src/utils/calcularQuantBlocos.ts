const JANELA_M_QUADRADO = 2;
const PORTA_M_QUADRADO = 1.8;
const TAMANHO_PAREDE = 3;

export function calcularQuantBlocos(area: number, metragem_comodo: number) {
  const area_total = ((metragem_comodo * 2) * TAMANHO_PAREDE) - (JANELA_M_QUADRADO) - (PORTA_M_QUADRADO);
  const quant_blocos = ((area_total * 10000) / area)
  const result = Math.ceil(quant_blocos);

  return result;
}
