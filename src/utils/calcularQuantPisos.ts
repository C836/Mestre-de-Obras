export function calcularQuantPisos(area: number, metragem_comodo: number) {
  const quant_pisos = parseFloat(((metragem_comodo * 10000) / area).toFixed(2));
  const result = Math.ceil(quant_pisos);

  return result;
}
