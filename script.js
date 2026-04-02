const products = [
{
title: "YogaBar High Protein Oats",
description: "Healthy high protein oats perfect for breakfast and fitness diet.",
price: "₹340",
image: "https://m.media-amazon.com/images/I/71KQhQ3d7PL._SL1500_.jpg",
link: "https://amzn.to/yourlink"
},

{
title: "MuscleBlaze Whey Protein 1kg",
description: "High quality whey protein for muscle growth and recovery.",
price: "₹2299",
image: "https://m.media-amazon.com/images/I/71b+Q5vPpDL._SL1500_.jpg",
link: "https://amzn.to/yourlink"
},

{
title: "YogaBar Dark Chocolate Protein Oats",
description: "Chocolate flavored protein oats for healthy breakfast.",
price: "₹399",
image: "https://m.media-amazon.com/images/I/71O7w3k5cNL._SL1500_.jpg",
link: "https://amzn.to/yourlink"
},

{
title: "MuscleBlaze Biozyme Whey Protein",
description: "Fast absorbing whey protein with high protein content.",
price: "₹2599",
image: "https://m.media-amazon.com/images/I/61FqS7k0l0L._SL1500_.jpg",
link: "https://amzn.to/yourlink"
},

{
title: "YogaBar Fruit & Nut Muesli",
description: "Healthy muesli with fruits and nuts for daily nutrition.",
price: "₹299",
image: "https://m.media-amazon.com/images/I/71a0dYzZr-L._SL1500_.jpg",
link: "https://amzn.to/yourlink"
}
];

const grid = document.getElementById("products-grid");

function loadProducts() {

grid.innerHTML = "";

products.forEach(product => {

const card = document.createElement("div");

card.className = "product-card";

card.innerHTML = `
<img src="${product.image}" class="product-image">

<div class="product-info">

<h3 class="product-title">${product.title}</h3>

<p class="product-desc">${product.description}</p>

<div class="product-price">${product.price}</div>

<a href="${product.link}" target="_blank" class="buy-btn">
Buy Now
</a>

</div>
`;

grid.appendChild(card);

});

}

loadProducts();
