const pagamento = (salario, comissao, carrosVendidos) => {
  let salarioFixo = salario;
  let carros = carrosVendidos * 30000;
  let comissaoFixa = carrosVendidos * comissao;
  let percentual = carros * 0.05;
  let salarioFinal = percentual + salarioFixo;
  let diferenca = carros - salarioFinal

  console.log("Salario Fixo: " + salario);
  console.log("Comissão: " + comissaoFixa);
  console.log("Carros vendidos: " + carrosVendidos);
  console.log("Valor vendido: " + carros);
  console.log("Parte da empresa: " + diferenca);
  console.log("Salário Final: " + salarioFinal);
};

pagamento(1200, 100, 5);

/* 
    Output: 
            Salario Fixo: 1200
            Comissão: 500
            Carros vendidos: 5
            Valor vendido: 150000
            Parte da empresa: 141300
            Salário Final: 8700
*/