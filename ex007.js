const agePeople = (m, d, y) => {
  // 1 ano possuio 365 dias
  var convertYear = y * 365;
  // 1 mes possui 30 dias
  var convertMonth = m * 30

  var convert = convertMonth + convertYear + d;
  console.log(`Essa pessoa possui ${convert} dias`);
};

agePeople(3, 8, 21);
// Output: Essa pessoa possui 7763 dias