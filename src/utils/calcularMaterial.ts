import { calcularQuantBlocos, calcularQuantPisos } from ".";
import { formData } from "../types";
import { formatarDecimal } from "./formatarDecimal";
import { formatarValor } from "./formatarValor";

const TAXA_DESPERDICIO = 8;

export function calcularMaterial({
  metragem_comodo,
  bloco_largura,
  bloco_altura,
  piso_largura,
  piso_altura,
  preco_bloco,
  preco_piso,
}: formData) {
  const area_bloco = bloco_largura * bloco_altura;
  const area_piso = piso_largura * piso_altura;

  const quant_blocos = calcularQuantBlocos(area_bloco, metragem_comodo);
  const quant_pisos = calcularQuantPisos(area_piso, metragem_comodo);

  const preco_blocos = quant_blocos * (preco_bloco / 1000);
  const preco_pisos = quant_pisos * (preco_piso / 10);

  const soma = preco_blocos + preco_pisos;
  const taxa = (TAXA_DESPERDICIO / 100) * soma;

  const total = formatarDecimal(soma + taxa);

  return {
    quant_blocos,
    quant_pisos,
    unidade_bloco: formatarDecimal(preco_bloco / 1000),
    unidade_piso: formatarDecimal(preco_piso / 10),
    total,
  };
}
