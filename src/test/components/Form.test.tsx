import { act, create } from "react-test-renderer";
import { Form } from "../../components";

describe("Testando componente Form", () => {
  const fn = jest.fn();
  const FormTree = create(<Form setResults={fn} />);
  const FormComponent = FormTree.root.findByType("form");

  const inputList = FormTree.root.findAllByType("input");
  test("Testando gatilho da função props ao envio do formulário", () => {
    FormComponent.props.onSubmit({ preventDefault: jest.fn() });

    expect(fn.mock.calls.length).toBe(1);
  });

  describe.each(inputList)("Testando mudança de valores nos inputs do formulário", (InputComponent) => {
    test(`Testando input ${InputComponent.props.name}`, () => {
      act(() => {
        InputComponent.props.onChange({
          target: { name: InputComponent.props.name, value: "100" },
        });
      });

      expect(InputComponent.props.value).toBe(100);
    });
  });
});
