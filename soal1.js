const calc = require("./calc_modules/calc.js");

//array disi sisi persegi
console.log("luas persegi adalah : " + calc.pluas(10) + "cm");
console.log("keliling persegi adalah : " + calc.pkeliling(10) + "cm");

//array awal adalah panjang dan yang kedua adalah lebar
console.log("luas persegi panjang adalah : " + calc.ppluas(10, 5) + "cm");
console.log(
  "keliling persegi panjang adalah : " + calc.ppkeliling(10, 5) + "cm"
);