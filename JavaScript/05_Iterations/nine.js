const myNumns = [1, 2, 3];

// const myTotal = myNumns.reduce(function (acc, curr) {
//   console.log(`acc :${acc} and currval : ${curr}`);
//   return acc + curr;
// }, 0);

const myTotal = myNumns.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 5999,
  },
  {
    itemName: "mobile course",
    price: 7999,
  },
  {
    itemName: "data science course",
    price: 6999,
  },
];

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceTopay);
