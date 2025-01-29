const ab = [
    { price: 10000 },
    { price: 2000 },
    { price: 1900 },
    { price: 8700 },
    { price: 6500, pl: -10000 }
  ];


const average = ab.reduce((acc, curr) => {
    return acc += curr.price;
}, 0) / ab.length;

console.log(average);