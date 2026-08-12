// 12 - 8 - 26 Task 8

// Task 1 - Product Cards

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let card = document.createElement("div");

            card.innerHTML = `
                <img src="${c.thumbnail}" alt="${c.title}">

                <h3>Title: ${c.title}</h3>

                <p>Category: ${c.category}</p>

                <p>Description:</p>

                <p>${c.description}</p>

                <p>Price: $${c.price}</p>

                <p>Rating: ${c.rating}</p>

                <button>BUY NOW</button>
            `;

            api.append(card);
        });
    });

// Task 2 — Product Description

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let card = document.createElement("div");

            card.innerHTML = `
                <img src="${c.thumbnail}" alt="${c.title}">

                <h3>Title: ${c.title}</h3>

                <p>Category: ${c.category}</p>

                <p>Description:</p>

                <p>${c.description}</p>

                <p>Price: $${c.price}</p>

                <p>Rating: ${c.rating}</p>

                <button>BUY NOW</button>
            `;

            api.append(card);
        });
    });

// Task 3 - Product List

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let card = document.createElement("div");

            card.innerHTML = `
                <img src="${c.thumbnail}" alt="${c.title}">

                <h3>Title: ${c.title}</h3>

                <p>Category: ${c.category}</p>

                <p>Description:</p>

                <p>${c.description}</p>

                <p>Price: $${c.price}</p>

                <p>Rating: ${c.rating}</p>

                <button>BUY NOW</button>
            `;

            api.append(card);
        });
    });

// Task 4 — Product Image Gallery

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let image = document.createElement("img");

            image.src = c.thumbnail;

            api.append(image);
        });
    });

// Task 5 — Category Display

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let product = document.createElement("div");

            product.innerHTML = `
                <p>Title: ${c.title}</p>

                <p>Category: ${c.category}</p>

                <p>Price: $${c.price}</p>
            `;

            api.append(product);
        });
    });

// Task 6 — Product Details Card

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let card = document.createElement("div");

            card.innerHTML = `
                <hr>

                <h3>${c.title}</h3>

                <img src="${c.thumbnail}" alt="${c.title}">

                <p>Description: ${c.description}</p>

                <p>Category: ${c.category}</p>

                <p>Price: $${c.price}</p>

                <p>Rating: ${c.rating}</p>

                <hr>
            `;

            api.append(card);
        });
    });

// Task 7 — Rating Details

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let product = document.createElement("div");

            product.innerHTML = `
                <p>Product: ${c.title}</p>

                <p>Rating: ${c.rating}</p>
            `;

            api.append(product);
        });
    });

// Task 8 — First 20 Characters

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let product = document.createElement("div");

            product.innerHTML = `
                <p>Title: ${c.title}</p>

                <p>Description: ${c.description.slice(0, 20)}</p>
            `;

            api.append(product);
        });
    });

// Task 9 — Change Button Content

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let card = document.createElement("div");

            card.innerHTML = `
                <h3>${c.title}</h3>

                <img src="${c.thumbnail}" alt="${c.title}">

                <p>Price: $${c.price}</p>

                <button>Buy for $${c.price}</button>
            `;

            api.append(card);
        });
    });

// Task 10 — Complete Product Card 

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        let api = document.querySelector(".products");

        data.products.forEach(c => {

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <img src="${c.thumbnail}" alt="${c.title}">

                <h3>Title: ${c.title}</h3>

                <p>Category: ${c.category}</p>

                <p>Description:</p>

                <p>${c.description}</p>

                <p>Price: $${c.price}</p>

                <p>Rating: ${c.rating}</p>

                <button>BUY NOW</button>
            `;

            api.append(card);
        });
    });