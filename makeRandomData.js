
let brands = [
  "Zara",
  "Wrogn",
  "Flu",
  "Sparky",
  "Wrangler",
  "Lee",
  "Killer",
  "Buffalo",
  "Lee Cooper",
];

let images = [
  "https://i.ibb.co/zJSz4CN/ddfd.jpg",
  "https://i.ibb.co/BskVkkC/dsjd.jpg",
  "https://i.ibb.co/s6zgnN8/fdgdre.jpg",
  "https://i.ibb.co/b1h4H9w/fdhvje.jpg",
  "https://i.ibb.co/372gM9F/ffdsf.jpg",
  "https://i.ibb.co/KsmNDbQ/gjkdf.jpg",
  "https://i.ibb.co/sjYV0jk/sdfjhdsf.jpg",
  "https://i.ibb.co/4WjF44n/Whats-App-Image-2021-05-30-at-8-10-27-PM.jpg"
]

let discounts = ["5", "10", "15", "20"];

let sellers = ["Big Fashion", "Jeanswala", "Rombo Trader", "Delhi Jeans"];

let categories = ["Jeans", "Pyjama", "Lycra Pant", "Jogger"];

let subCategory = ["demin"];

let tags = [
  "scratched",
  "slim-fit",
  "comfortable",
  "strethcable",
  "funky",
  "damaged",
];

let colors = ["red", "blue", "black", "grey", "tan", "olive green"];

let productNameAndCategoryAndTag = function () {
  let brand = brands[Math.floor(Math.random(brands.length) * brands.length)];
  let tag = tags[Math.floor(Math.random(tags.length) * tags.length)];
  let category =
    categories[Math.floor(Math.random(categories.length) * categories.length)];

    let name =  brand + " " + tag + " " + category;
  return [name,category,tag];
};

let color = function () {
  return colors[Math.floor(Math.random(colors.length) * colors.length)];
};

let tag = function () {
  return tags[Math.floor(Math.random(tags.length) * tags.length)];
};

let discount = function () {
  return discounts[
    Math.floor(Math.random(discounts.length) * discounts.length)
  ];
};

let soldBy = function () {
  return sellers[Math.floor(Math.random(sellers.length) * sellers.length)];
};

let availableSizes = [28, 30, 32, 34, 36, 38, 40];


let cutOutPrice = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

let price = function (cutOutPrice, discount) {
  discount =
    discounts[Math.floor(Math.random(discounts.length) * discounts.length)];
  let discountValue = (discount / 100) * cutOutPrice;
  return Math.floor(cutOutPrice - discountValue);
};

let sellingPrice = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

let totalAvailable = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

let marginRate = function (sellingPrice, price) {
  return sellingPrice - price;
};

let tagMaker = function() {
  
}

let imageUrl = function() {
  return images[Math.floor(Math.random(images.length) * images.length)];
}

function dataMaker(num) {
  let data = [];
  let id = 0;
  for (let i = 0; i <= num; i++) {
    let obj = {};
    let productNameAndCategoryAndTagVal = productNameAndCategoryAndTag();
    obj.id = id++;
    obj.productImage = imageUrl(); 
    obj.productName = productNameAndCategoryAndTagVal[0];
    obj.soldBy = soldBy();
    obj.color = color();
    obj.availableSizes = availableSizes;
    obj.cutOutPrice = cutOutPrice(499, 999);
    obj.discount = discount() + "%";
    obj.price = price(obj.cutOutPrice, obj.discount);
    obj.sellingPrice = sellingPrice(obj.price + 100, obj.price + 200);
    obj.marginRate = marginRate(obj.sellingPrice, obj.price);
    obj.minOrder = 10;
    obj.inStock = true;
    obj.totalAvailable = totalAvailable(100, 500);
    obj.topCategory = productNameAndCategoryAndTagVal[1];
    obj.subCategory = productNameAndCategoryAndTagVal[1];
    obj.tags =[productNameAndCategoryAndTagVal[2]]

    data.push(obj);
  }
  return data;
}

module.exports = {dataMaker}
