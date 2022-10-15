import { formatarValor } from "../utils/formatarValor";

describe("Testando método para formatação de números decimais", () => {
  test.each([
    { input: 10, expectedOutput: "R$ 10,00" },
    { input: 11.53, expectedOutput: "R$ 11,53" },
    { input: 20.9876, expectedOutput: "R$ 20,99" },
  ])("Testando valor de $input reais", ({ input, expectedOutput }) => {
    const response = formatarValor(input);
    expect(response).toStrictEqual(expectedOutput);
  });
});
