let productos = [];
fetch("productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })



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
