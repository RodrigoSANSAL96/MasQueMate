let productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
const contenedorCarritoProducto = document.querySelector("#carrito-producto");
const contenedorCarritoPrecio = document.querySelector("#carrito-precio");
const contenedorCarritoBotones = document.querySelector("#carrito-botones");

function agregarAlCarrito(){
  if (productosEnCarrito) {

    contenedorCarritoProducto.innerHTML = "";
    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("contenedor-producto-carrito");
        div.innerHTML = `
          <div class="carrito-img">
           <img src="${producto.imagen}" alt="${producto.título}">
          </div>
          <div class="carrito-título">
           <h3>${producto.título}</h3>
          </div>
          <div class="cantidad">
           <h3>${producto.cantidad}</h3>
          </div>
          <div class="carrito-precio">
           <h3>${producto.precio * producto.cantidad}</h3>
          </div>
          <div class="carrito-boton-eliminar">
           <button class="boton-eliminar" id="${producto.id}"><i class="bi bi-dash-circle-fill"></i></button>
          </div>
        `;
        contenedorCarritoProducto.append(div);
    })
  }//else {
    //const div = document.createElement("div");
    //div.innerHTML = `
    //  <h4>Tu carrito está vacio</h4>
   // `;
   // contenedorCarritoProducto.append(div);
 // }
  botonEliminar();
}
agregarAlCarrito();

function botonEliminar (){
  let botonEliminar = document.querySelectorAll(".boton-eliminar");
  botonEliminar.forEach(boton => {
    boton.addEventListener("click", eliminarDelCarrito);
  })
}

function eliminarDelCarrito(e){
  let idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
  productosEnCarrito.splice(index, 1);
  agregarAlCarrito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}