const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

//Spread

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(1);

// console.log(real_another_array);

console.log(Array.isArray("SOURABH"));
console.log(Array.from("SOURABH"));

console.log(Array.from({ name: "SOURABH" })); //interesting

let a = 200;
let b = 300;
let c = 400;
console.log(Array.of(a, b, c));
