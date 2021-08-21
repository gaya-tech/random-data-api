
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

let subCategories = {
  "Jeans": ["Demin","Damaged","Coloured","Scratched","Funky","Slim-fit"],
  "Pyjama": ["Hoisery","Cotton","Sports",""],
  "Lycra Pant": ["Funky","Solid-Color","Soft","Black"],
  "Jogger": ["Denim","Cotton","Loose-Fit","Coloured"],
}

let tags = [
  "scratched",
  "slim-fit",
  "comfortable",
  "strethcable",
  "funky",
  "damaged",
];

let colors = ["red", "blue", "black", "grey", "tan", "olive green"];

// random index generator
function randomDataFromArray(arr) {
  return arr[Math.floor(Math.random(arr.length) * arr.length)]
}

let productNameAndCategoryAndTag = function () {
  let brand = randomDataFromArray(brands)
  let tag = randomDataFromArray(tags);
  let category =
    randomDataFromArray(categories);
  let subCategory = subCategories[category];
  console.log(subCategory);
  let getSubCategory = randomDataFromArray(subCategory);

  console.log(subCategory)
    let name =  brand + " " + tag + " " + category;
  return [name,category,getSubCategory];
};

let color = function () {
  return randomDataFromArray(colors)
};

let tag = function () {
  return randomDataFromArray(tags)
};

let discount = function () {
  return randomDataFromArray(discounts)
};

let soldBy = function () {
  return randomDataFromArray(sellers);
};

let availableSizes = {28:50, 30:50, 32:50, 34:50, 36:50, 38:50, 40:50};


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
  return randomDataFromArray(images)
}

function dataMakerSize(id) {
  let obj = {};
    let productNameAndCategoryAndTagVal = productNameAndCategoryAndTag();
    obj.id = id;
    obj.type = "size",
    obj.productImage = [imageUrl(),imageUrl(),imageUrl(),imageUrl()]; 
    obj.productName = productNameAndCategoryAndTagVal[0];
    obj.productDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a erat nam. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Tristique senectus et netus et. At quis risus sed vulputate odio ut. Interdum varius sit amet mattis vulputate enim nulla aliquet. Dignissim suspendisse in est ante. Ac turpis egestas maecenas pharetra. Tortor posuere ac ut consequat semper viverra nam libero justo. Elit ut aliquam purus sit. Sit amet consectetur adipiscing elit duis tristique."
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
    obj.totalAvailable = totalAvailable(120, 500);
    obj.topCategory = productNameAndCategoryAndTagVal[1];
    obj.subCategory = productNameAndCategoryAndTagVal[2];
    obj.tags =[productNameAndCategoryAndTagVal[2]];
    obj.producSpecification = [
      "Best fabric quality",
      "0 % returns",
      "1,921 people liked this product",
      "87 % repeated order",
      "Stylish and trending now",
      "Soft and comfortable"
    ]

    // arr.push(obj);
    return obj;

  
}

function dataMakerSet(id) {
  let obj = {};
    let productNameAndCategoryAndTagVal = productNameAndCategoryAndTag();
    obj.id = id;
    obj.type = "set",
    obj.productImage = [imageUrl(),imageUrl(),imageUrl(),imageUrl()]; 
    obj.productName = productNameAndCategoryAndTagVal[0];
    obj.productDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a erat nam. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Tristique senectus et netus et. At quis risus sed vulputate odio ut. Interdum varius sit amet mattis vulputate enim nulla aliquet. Dignissim suspendisse in est ante. Ac turpis egestas maecenas pharetra. Tortor posuere ac ut consequat semper viverra nam libero justo. Elit ut aliquam purus sit. Sit amet consectetur adipiscing elit duis tristique."
    obj.soldBy = soldBy();
    obj.color = color();
    obj.availableSet = 100;
    obj.cutOutPrice = cutOutPrice(499, 999);
    obj.discount = discount() + "%";
    obj.price = price(obj.cutOutPrice, obj.discount);
    obj.sellingPrice = sellingPrice(obj.price + 100, obj.price + 200);
    obj.marginRate = marginRate(obj.sellingPrice, obj.price);
    obj.minOrder = 2;
    obj.inStock = true;
    obj.totalAvailable = totalAvailable(120, 500);
    obj.topCategory = productNameAndCategoryAndTagVal[1];
    obj.subCategory = productNameAndCategoryAndTagVal[2];
    obj.tags =[productNameAndCategoryAndTagVal[2]];
    obj.producSpecification = [
      "Best fabric quality",
      "0 % returns",
      "1,921 people liked this product",
      "87 % repeated order",
      "Stylish and trending now",
      "Soft and comfortable"
    ]

    // arr.push(obj);
    return obj;
  
}

function dataMaker(num) {
  let data = [];
  for (let i = 0; i < num; i++) {
  if(i % 2 === 0) {
    console.log("Size");
    data.push(dataMakerSize(i));  
  } else if (i % 2 !== 0) {
    console.log("Set");
    data.push(dataMakerSet(i));  

  }
}
  return data;

}

console.log(dataMaker(8));

module.exports = {dataMaker};
