let fruits = [
  {
    id: 1,
    name: 'Apple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg',
    price: 3.5,
    soldBy: 'Merkur',
  },
  {
    id: 2,
    name: 'Banana',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg',
    price: 1.29,
    soldBy: 'Merkur',
  },
  {
    id: 3,
    name: 'Grapes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg',
    weight: 0.1,
    price: 4.51,
    soldBy: 'Hofer',
  },
  {
    id: 4,
    name: 'Pineapple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg',
    price: 7.78,
    soldBy: 'Lidl',
  },
];

function getFruits(query) {
  const { soldBy, priceLT } = query;
  if (soldBy) {
    return { result: fruits.filter((el) => el.soldBy == soldBy) };
  }
  if (priceLT) {
    return { result: fruits.filter((el) => el.price < priceLT) };
  } else {
    return { result: fruits };
  }
}

function delFruits() {
  fruits = [];
  return { result: true };
}
function getFruit(id) {
  return { result: fruits.find((el) => el.id == id) ?? false };
}

function delFruit(id) {
  if (!fruits.find((el) => el.id == id)) return { result: false };
  fruits = fruits.filter((el) => el.id != id);
  return { result: true };
}

function addFruit(fruit) {
  // let maxId = fruits.reduce((acc, el) => (el.id > acc ? el.id : acc), Number.NEGATIVE_INFINITY);
  const maxId = Math.max(...fruits.map((el) => el.id));
  fruit.id = maxId + 1;
  fruits = [...fruits, fruit];
  return { result: fruit };
}

function updateFruit(id, fruit) {
  let fruitIdx = fruits.findIndex((fruit) => fruit.id == id);
  if (fruitIdx === -1) return null;

  fruits[fruitIdx].name = fruit.name;
  fruits[fruitIdx].image = fruit.image;
  fruits[fruitIdx].price = fruit.price;
  fruits[fruitIdx].soldBy = fruit.soldBy;
  return fruits[fruitIdx];
}

function patchFruit(id, fruitNew) {
  let fruitIdx = fruits.findIndex((el) => el.id == id);
  if (fruitIdx === -1) return null;
  for (key in fruitNew) {
    fruits[fruitIdx][key] = fruitNew[key];
  }
}


module.exports = { getFruit, delFruit, getFruits, delFruits, addFruit, updateFruit, patchFruit };
