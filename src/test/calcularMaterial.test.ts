import jest from "jest";
import { calcularQuantBlocos, calcularQuantPisos } from "../utils";
import { calcularMaterial } from "./../utils/calcularMaterial";

describe("Testando método para calculo de material", () => {
  test.each([
    {
      input: {
        metragem_comodo: 4,
        bloco_largura: 20,
        bloco_altura: 20,
        piso_largura: 70,
        piso_altura: 70,
        preco_bloco: 800,
        preco_piso: 100,
      },
      expectedOutput: {
        quant_blocos: 505,
        quant_pisos: 9,
        unidade_bloco: 0.8,
        unidade_piso: 10,
        total: 533.52,
      },
    },
    {
      input: {
        metragem_comodo: 8,
        bloco_largura: 26,
        bloco_altura: 20,
        piso_largura: 80,
        piso_altura: 80,
        preco_bloco: 952.99,
        preco_piso: 120.99,
      },
      expectedOutput: {
        quant_blocos: 850,
        quant_pisos: 13,
        unidade_bloco: 0.95,
        unidade_piso: 12.1,
        total: 1044.71,
      },
    },
    {
      input: {
        metragem_comodo: 10,
        bloco_largura: 20,
        bloco_altura: 16,
        piso_largura: 65,
        piso_altura: 65,
        preco_bloco: 640,
        preco_piso: 80,
      },
      expectedOutput: {
        quant_blocos: 1757,
        quant_pisos: 24,
        unidade_bloco: 0.64,
        unidade_piso: 8,
        total: 1421.8,
      },
    },
  ])(
    "Testando método principal | cômodo de $input.metragem_comodo m²",
    ({ input, expectedOutput }) => {
      const response = calcularMaterial(input);
      expect(response).toStrictEqual(expectedOutput);
    }
  );
  test.each([
    {
      input: {
        area: 400,
        metragem_comodo: 4,
      },
      expectedOutput: 505,
    },
    {
      input: {
        area: 320,
        metragem_comodo: 5,
      },
      expectedOutput: 819,
    },
    {
      input: {
        area: 500,
        metragem_comodo: 10,
      },
      expectedOutput: 1124,
    },
  ])(
    "Testando método para calculo de blocos | bloco de $input.area cm², cômodo de $input.metragem_comodo m²",
    ({ input, expectedOutput }) => {
      const { area, metragem_comodo } = input;
      const response = calcularQuantBlocos(area, metragem_comodo);

      expect(response).toBe(expectedOutput);
    }
  );

  test.each([
    {
      input: {
        area: 10000,
        metragem_comodo: 4,
      },
      expectedOutput: 4,
    },
    {
      input: {
        area: 400,
        metragem_comodo: 6.5,
      },
      expectedOutput: 163,
    },
    {
      input: {
        area: 850,
        metragem_comodo: 5.49,
      },
      expectedOutput: 65,
    },
  ])(
    "Testando método para calculo de pisos | piso de $input.area cm², cômodo de $input.metragem_comodo m²",
    ({ input, expectedOutput }) => {
      const { area, metragem_comodo } = input;
      const response = calcularQuantPisos(area, metragem_comodo);

      expect(response).toBe(expectedOutput);
    }
  );
});
