const calcTemperature = (grausF) => {
  let grausC = (5 * (grausF - 32)) / 9;

  console.log(`${grausF}F em C° são: ${grausC}C°`);
};

calcTemperature(212);
// Output: 212F em C° são: 100C°

calcTemperature(105);
// Output: 105F em C° são: 40.55C°

calcTemperature(250);
// Output: 250F em C° são: 121.11C°