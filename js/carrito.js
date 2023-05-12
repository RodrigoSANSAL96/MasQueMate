const productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));
const contenedorCarritoProducto = document.querySelector("#carrito-producto");
const contenedorCarritoPrecio = document.querySelector("#carrito-precio");
const contenedorCarritoBotones = document.querySelector("#carrito-botones");

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
}