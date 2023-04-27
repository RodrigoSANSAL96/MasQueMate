const productos = [
    {
        título: "Yerba Aguantadora",
        id: "Yerba",
        imagen: "./recursos/yerbas/Aguantadora.jpg",
        precio: 1000
    },
    {
        título: "Yerba Rosamonte",
        id: "Yerba",
        imagen: "./recursos/yerbas/Rosamonte.jpg",
        precio: 1100
    },
    {
        título: "Yerba Canarias",
        id: "Yerba",
        imagen: "./recursos/yerbas/Canarias.jpg",
        precio: 1200
    },
    {
        título: "Yerba Playadito",
        id: "Yerba",
        imagen: "./recursos/yerbas/Playadito.jpg",
        precio: 1100
    },
    {
        título: "Yerba Tucanguá",
        id: "Yerba",
        imagen: "./recursos/yerbas/Tucanguá.jpg",
        precio: 1300
    },
    {
        título: "Yerba Unión",
        id: "Yerba",
        imagen: "./recursos/yerbas/Unión.jpg",
        precio: 1400
    },
    {
        título: "Yerba Verdeflor",
        id: "Yerba",
        imagen: "./recursos/yerbas/Verdeflor.jpg",
        precio: 1000
    },
    {
        título: "Yerba Amanda",
        id: "Yerba",
        imagen: "./recursos/yerbas/Amanda.jpg",
        precio: 1000
    },
    {
        título: "Mate 01",
        id: "Mate",
        imagen: "./recursos/mates/Mate01.jpg",
        precio: 5000
    },
    {
        título: "Mate 02",
        id: "Mate",
        imagen: "./recursos/mates/Mate02.jpg",
        precio: 4500
    },
    {
        título: "Mate 03",
        id: "Mate",
        imagen: "./recursos/mates/Mate03.jpg",
        precio: 4600
    },
    {
        título: "Mate 04",
        id: "Mate",
        imagen: "./recursos/mates/Mate04.jpg",
        precio: 4700
    },
    {
        título: "Mate 05",
        id: "Mate",
        imagen: "./recursos/mates/Mate05.jpg",
        precio: 4800
    },
    {
        título: "Mate 06",
        id: "Mate",
        imagen: "./recursos/mates/Mate06.jpg",
        precio: 4900
    },
    {
        título: "Mate 07",
        id: "Mate",
        imagen: "./recursos/mates/Mate07.jpg",
        precio: 5100
    },
    {
        título: "Mate 08",
        id: "Mate",
        imagen: "./recursos/mates/Mate08.jpg",
        precio: 5100
    },
    {
        título: "Termo 01",
        id: "Termo",
        imagen: "./recursos/termos/Termo01.jpg",
        precio: 9000
    },
    {
        título: "Termo 02",
        id: "Termo",
        imagen: "./recursos/termos/Termo02.jpg",
        precio: 8000
    },
    {
        título: "Termo 03",
        id: "Termo",
        imagen: "./recursos/termos/Termo03.jpg",
        precio: 7000
    },
    {
        título: "Termo 04",
        id: "Termo",
        imagen: "./recursos/termos/Termo04.jpg",
        precio: 6000
    },
    {
        título: "Termo 05",
        id: "Termo",
        imagen: "./recursos/termos/Termo05.jpg",
        precio: 5000
    },
    {
        título: "Termo 06",
        id: "Termo",
        imagen: "./recursos/termos/Termo06.jpg",
        precio: 6000
    },
    {
        título: "Termo 07",
        id: "Termo",
        imagen: "./recursos/termos/Termo07.jpg",
        precio: 7000
    },
    {
        título: "Termo 08",
        id: "Termo",
        imagen: "./recursos/termos/Termo08.jpg",
        precio: 8000
    },
]


const contenedorProductos = document.querySelector(".contenedor-productos");

function cargarProductos() {
    contenedorProductos.innerHTML = "";
    productos.forEach(producto => {
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
}
cargarProductos();

