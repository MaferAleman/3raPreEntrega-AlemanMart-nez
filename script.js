function contenidoDOMCargado() {
    let tortas = [
        { nombre: "Torta de Limón", sabor: "Cítrico", stock: 8, precio: 18, imagen: "torta-limon.jpeg" },
        { nombre: "Torta de Vainilla", sabor: "Clásico", stock: 12, precio: 15, imagen: "torta-vainilla.jpeg" },
        { nombre: "Torta de Zanahoria", sabor: "Especiado", stock: 7, precio: 21, imagen: "torta-zanahoria.jpeg" },
        { nombre: "Torta de Coco", sabor: "Tropical", stock: 9, precio: 19, imagen: "torta-coco.png" }
    ];

    let carrito = [];
    let total = 0;

    const catalogo = document.getElementById("catalogo");

    function mostrarCatalogo() {
        catalogo.innerHTML = ""; // Limpiar el catálogo antes de volver a mostrar las tarjetas

        tortas.forEach(torta => {
            const card = document.createElement("div");
            card.classList.add("torta-card");

            const img = document.createElement("img");
            img.src = "images/" + torta.imagen;
            img.alt = torta.nombre;
            img.classList.add("torta-img");
            card.appendChild(img);

            const nombre = document.createElement("p");
            nombre.textContent = torta.nombre;
            card.appendChild(nombre);

            const sabor = document.createElement("p");
            sabor.textContent = `Sabor: ${torta.sabor}`;
            card.appendChild(sabor);

            const stock = document.createElement("p");
            stock.textContent = `Stock: ${torta.stock}`;
            card.appendChild(stock);

            const precio = document.createElement("p");
            precio.textContent = `Precio: S/${torta.precio}`;
            card.appendChild(precio);

            const btnAgregar = document.createElement("button");
            btnAgregar.textContent = "Agregar al Carrito";
            btnAgregar.classList.add("btn-agregar");
            btnAgregar.addEventListener("click", function() {
                if (torta.stock > 0) {
                    agregarAlCarrito(torta);
                    actualizarStock(torta);
                    actualizarTotal();
                } else {
                    alert("¡Lo sentimos! Este producto está agotado.");
                }
            });
            card.appendChild(btnAgregar);

            catalogo.appendChild(card);
        });
    }

    function agregarAlCarrito(torta) {
        carrito.push(torta);
        actualizarCarrito();
    }

    function actualizarStock(torta) {
        torta.stock--;
        mostrarCatalogo();
    }

    function actualizarCarrito() {
        const carritoElement = document.getElementById("carrito");
        carritoElement.innerHTML = "";

        carrito.forEach(torta => {
            const item = document.createElement("li");
            item.textContent = `${torta.nombre} - S/${torta.precio}`;
            carritoElement.appendChild(item);
        });
    }

    function actualizarTotal() {
        total = carrito.reduce((total, torta) => total + torta.precio, 0);
        const totalElement = document.getElementById("total");
        totalElement.textContent = `Total: S/${total}`;
    }

    function comprar() {
        carrito = [];
        actualizarCarrito();
        actualizarTotal();
        alert("¡Compra exitosa! Gracias por su compra.");
    }

    mostrarCatalogo();

    const btnComprar = document.getElementById("comprar");
    btnComprar.addEventListener("click", comprar);
}

document.addEventListener("DOMContentLoaded", contenidoDOMCargado);