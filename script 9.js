fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(products => {

        let container = document.querySelector(".products");

        products.slice(0, 20).forEach(product => {

            let card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <img src="${product.images[0]}" alt="${product.title}">

                <h2>${product.title}</h2>

                <p>Category: ${product.category.name}</p>

                <p class="price">₹ ${product.price}</p>

                <button class="add-btn">ADD</button>
            `;

            container.append(card);
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });