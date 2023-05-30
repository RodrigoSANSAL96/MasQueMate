const productos = [
    {
        título: "Yerba Aguantadora",
        categoría: "Yerba",
        id: "01",
        imagen: "./recursos/yerbas/Aguantadora.jpg",
        precio: 1000
    },
    {
        título: "Yerba Rosamonte",
        categoría: "Yerba",
        id: "02",
        imagen: "./recursos/yerbas/Rosamonte.jpg",
        precio: 1100
    },
    {
        título: "Yerba Canarias",
        categoría: "Yerba",
        id: "03",
        imagen: "./recursos/yerbas/Canarias.jpg",
        precio: 1200
    },
    {
        título: "Yerba Playadito",
        categoría: "Yerba",
        id: "04",
        imagen: "./recursos/yerbas/Playadito.jpg",
        precio: 1100
    },
    {
        título: "Yerba Tucanguá",
        categoría: "Yerba",
        id: "05",
        imagen: "./recursos/yerbas/Tucanguá.jpg",
        precio: 1300
    },
    {
        título: "Yerba Unión",
        categoría: "Yerba",
        id: "06",
        imagen: "./recursos/yerbas/Unión.jpg",
        precio: 1400
    },
    {
        título: "Yerba Verdeflor",
        categoría: "Yerba",
        id: "07",
        imagen: "./recursos/yerbas/Verdeflor.jpg",
        precio: 1000
    },
    {
        título: "Yerba Amanda",
        categoría: "Yerba",
        id: "08",
        imagen: "./recursos/yerbas/Amanda.jpg",
        precio: 1000
    },
    {
        título: "Mate 01",
        categoría: "Mate",
        id: "10",
        imagen: "./recursos/mates/Mate01.jpg",
        precio: 5000
    },
    {
        título: "Mate 02",
        categoría: "Mate",
        id: "11",
        imagen: "./recursos/mates/Mate02.jpg",
        precio: 4500
    },
    {
        título: "Mate 03",
        categoría: "Mate",
        id: "12",
        imagen: "./recursos/mates/Mate03.jpg",
        precio: 4600
    },
    {
        título: "Mate 04",
        categoría: "Mate",
        id: "13",
        imagen: "./recursos/mates/Mate04.jpg",
        precio: 4700
    },
    {
        título: "Mate 05",
        categoría: "Mate",
        id: "14",
        imagen: "./recursos/mates/Mate05.jpg",
        precio: 4800
    },
    {
        título: "Mate 06",
        categoría: "Mate",
        id: "15",
        imagen: "./recursos/mates/Mate06.jpg",
        precio: 4900
    },
    {
        título: "Mate 07",
        categoría: "Mate",
        id: "16",
        imagen: "./recursos/mates/Mate07.jpg",
        precio: 5100
    },
    {
        título: "Mate 08",
        categoría: "Mate",
        id: "17",
        imagen: "./recursos/mates/Mate08.jpg",
        precio: 5100
    },
    {
        título: "Termo 01",
        categoría: "Termo",
        id: "18",
        imagen: "./recursos/termos/Termo01.jpg",
        precio: 9000
    },
    {
        título: "Termo 02",
        categoría: "Termo",
        id: "19",
        imagen: "./recursos/termos/Termo02.jpg",
        precio: 8000
    },
    {
        título: "Termo 03",
        categoría: "Termo",
        id: "20",
        imagen: "./recursos/termos/Termo03.jpg",
        precio: 7000
    },
    {
        título: "Termo 04",
        categoría: "Termo",
        id: "21",
        imagen: "./recursos/termos/Termo04.jpg",
        precio: 6000
    },
    {
        título: "Termo 05",
        categoría: "Termo",
        id: "22",
        imagen: "./recursos/termos/Termo05.jpg",
        precio: 5000
    },
    {
        título: "Termo 06",
        categoría: "Termo",
        id: "23",
        imagen: "./recursos/termos/Termo06.jpg",
        precio: 6000
    },
    {
        título: "Termo 07",
        categoría: "Termo",
        id: "24",
        imagen: "./recursos/termos/Termo07.jpg",
        precio: 7000
    },
    {
        título: "Termo 08",
        categoría: "Termo",
        id: "25",
        imagen: "./recursos/termos/Termo08.jpg",
        precio: 8000
    },
]


const contenedorProductos = document.querySelector(".contenedor-productos");
const boton = document.querySelectorAll(".dropdown-item");
const subtítulo = document.querySelector("#subtítulo");



function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = " ";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("contenedor-producto");
        div.innerHTML = `
             <div class="contenedor-producto-yerba-imagen">
              <img src="${producto.imagen}" alt="${producto.título}">
             </div>
             <div class="contenedor-producto-yerba-información">
              <div class="contenedor-producto-yerba-título">
               <h5>${producto.título}</h5>
              </div>
             </div>
             <div class="contenedor-producto-yerba-precio">
               $${producto.precio}
             </div>
             <div>
               <button class="boton-agregar" id="${producto.id}">Agregar al Carrito</button>
             </div>
         `;
        contenedorProductos.append(div);

    })
    botonAgregar();
}
cargarProductos(productos);

boton.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id != "Todos"){
         const productoSubtítulo = productos.find(producto => producto.categoría === e.currentTarget.id);
         subtítulo.innerText = productoSubtítulo.categoría;
         const productoboton = productos.filter(producto => producto.categoría === e.currentTarget.id);
         cargarProductos(productoboton);
        } else {
            subtítulo.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
})



function botonAgregar () {
    let botonAgregar = document.querySelectorAll(".boton-agregar");
    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

let productosEnCarrito;
const productosEnCarritoJS = JSON.parse(localStorage.getItem("productosEnCarrito"));
if(productosEnCarritoJS){
    productosEnCarrito = productosEnCarritoJS;
}else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to bottom, goldenrod, rgb(216, 178, 81))",
          border: "solid gray",
          borderRadius: "1rem"
        },
        onClick: function(){} // Callback after click
      }).showToast();
    const idBoton = e.currentTarget.id;
    const productoAgregados = productos.find(producto => producto.id === idBoton);
    if (productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregados.cantidad = 1;
        productosEnCarrito.push(productoAgregados);
    }
    
    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}
