export function formatarValor(valor: number) {
  return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
