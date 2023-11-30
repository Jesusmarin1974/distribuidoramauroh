let loadMoreBtn = document.querySelector("#load-More");
let currentItem = 8;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll(".box-container .box")];
    for(var i = currentItem; i < currentItem + 4; i++) {
        boxes[i].style.display = "inline-block";
    }
    currentItem += 4;
    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }
}  

//carrito
const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");


cargarEventListeners();
    function cargarEventListeners(){
        elementos1.addEventListener("click", comprarElemento);
        carrito.addEventListener("click", eliminarElemento);
        vaciarCarritoBtn.addEventListener("click", vaciarcarrito);
}

    function comprarElemento(e) {
        e.preventDefault();
        if(e.target.classList.contains("agregar-carrito")){
            const elemento = e.target.parentElement.parentElement;
            leerDatosElemento(elemento);
        }
    }

    function leerDatosElemento(elemento){
        const infoElemento = {
            imagen: elemento.querySelector("img").src,
            imagen: titulo.querySelector("h3").textContent,
            imagen: precio.querySelector(".precio").textContent,
            id: elemento.querySelector("a").getAtribute("date-id")
        
        }
        insertarCarrito(infoElemento);
    }

    function insertarCarrito(elemento) {
        const row = document.createElement("tr");
        row .innerHTML = `
        <td>
            <img src= "$(elemento.imagen)" width =100 heigth 100px >
        </td>        
        <td>
        #(elemento.titulo)
        </td>
        <td>
        #(elemento.precio)
        </td>
        <td>
            <a
        </td>
        
        `;
       
    }
    
          