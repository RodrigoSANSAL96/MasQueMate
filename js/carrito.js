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
           <img src="../${producto.imagen}" alt="${producto.título}">
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
  } else {
    const div = document.createElement("div");
    div.classList.add("contenedor-producto-carrito");
    div.innerHTML = `
      <h4>Tu carrito está vacio</h4>
    `;
    contenedorCarritoProducto.append(div);
  }
  botonEliminar();
  precioTotal()
}
agregarAlCarrito();

function botonEliminar (){
  let botonEliminar = document.querySelectorAll(".boton-eliminar");
  botonEliminar.forEach(boton => {
    boton.addEventListener("click", eliminarDelCarrito);
  })
}

function eliminarDelCarrito(e){
  Toastify({
    text: "Producto eliminado",
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
  let idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
  productosEnCarrito.splice(index, 1);
  agregarAlCarrito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

const vaciarCarrito = document.querySelector("#boton-vaciar");
vaciarCarrito.addEventListener("click", vaciarElCarrito);

function vaciarElCarrito(){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Estas seguro?',
    text: "Vaciaras el carrito",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, estoy seguro',
    cancelButtonText: 'No, no estoy seguro',
    reverseButtons: true,
    style: {
      margin: "2rem",
      padding: "2rem"
    },
  }).then((result) => {
    if (result.isConfirmed) {       
      productosEnCarrito = [];
      localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
      agregarAlCarrito();
      swalWithBootstrapButtons.fire(
        'Tu carrito se vació',
        
      )
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
      )
    }
  })

}


const actualizarTotal = document.querySelector("#total");

function precioTotal(){
  const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  total.innerText = `$${totalCalculado}`;
}

const botonComprar = document.querySelector("#boton-comprar");
botonComprar.addEventListener("click", comprar);

function comprar(){
  productosEnCarrito.length = 0;
  localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
  const comprado = document.querySelector("#comprado");
  comprado.innerHTML = `<h3>¡Gracias por su compra!</h3>`;
  agregarAlCarrito();
}