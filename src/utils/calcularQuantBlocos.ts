const JANELA_M_QUADRADO = 2;
const PORTA_M_QUADRADO = 1.8;

export function calcularQuantBlocos(area: number, metragem_comodo: number) {
  const area_total = metragem_comodo - JANELA_M_QUADRADO - PORTA_M_QUADRADO;
  const quant_blocos = area_total / area;

  return quant_blocos;
}