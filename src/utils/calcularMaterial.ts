import { calcularQuantBlocos, calcularQuantPisos } from ".";

const TAXA_DESPERDICIO = 8;

export function calcularMaterial(
  metragem_comodo: number,
  area_bloco: number,
  preco_bloco: number,
  area_piso: number,
  preco_piso: number
) {
  const quant_blocos = Math.ceil(calcularQuantBlocos(area_bloco, metragem_comodo));
  const quant_pisos = Math.ceil(calcularQuantPisos(area_piso, metragem_comodo));

  const preco_blocos = quant_blocos * preco_bloco;
  const preco_pisos = quant_pisos * preco_piso;

  const soma = preco_blocos + preco_pisos;
  const taxa = (TAXA_DESPERDICIO / 100) * soma;

  const total = soma + taxa;

  return { quant_blocos, quant_pisos, preco_bloco, preco_piso, total };
}
