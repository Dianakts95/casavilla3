
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEntrantes = document.querySelector('.entrantes');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPrincipales = document.querySelector('.principales');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const btnBebidas = document.querySelector('.bebidas');
const btnVinos = document.querySelector('.vinos');
const contenedorPlatillos = document.querySelector('.platillos');
document.addEventListener('DOMContentLoaded',()=>{
    
    platillos();
});


const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    }); 
});


imagenes.forEach(imagen=>{

observer.observe(imagen);
});

const platillos = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');

    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);
    
    const entrantes = platillosArreglo.filter(entrante=> entrante.getAttribute('data-platillo') === 'entrante');
    const ensaladas = platillosArreglo.filter(ensalada=> ensalada.getAttribute('data-platillo') === 'ensalada');
    const principales = platillosArreglo.filter(principal=> principal.getAttribute('data-platillo') === 'principal');
    const pastas = platillosArreglo.filter(pasta => pasta.getAttribute('data-platillo') === 'pasta');
    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillo') === 'pizza');
    const postres = platillosArreglo.filter(postre=> postre.getAttribute('data-platillo') === 'postre');
    const bebidas = platillosArreglo.filter(bebida=> bebida.getAttribute('data-platillo') === 'bebida');
    const vinos = platillosArreglo.filter(vino=> vino.getAttribute('data-platillo') === 'vino');

    mostrarPlatillos(entrantes, ensaladas, principales, pastas, pizzas, postres, bebidas, vinos, platillosArreglo);

}

const mostrarPlatillos = (entrantes, ensaladas, principales, pastas, pizzas, postres, bebidas, vinos, todo) =>{
    
    btnEntrantes.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        entrantes.forEach(entrante=> contenedorPlatillos.appendChild(entrante));
    });
    
    btnEnsaladas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada));
    });

    btnPrincipales.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        principales.forEach(principal=> contenedorPlatillos.appendChild(principal));
    });


    btnPasta.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
         pastas.forEach(pasta=> contenedorPlatillos.appendChild(pasta));
    });

    btnPizza.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza=> contenedorPlatillos.appendChild(pizza));
    });
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    });
    btnBebidas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        bebidas.forEach(bebida=> contenedorPlatillos.appendChild(bebida));
    });
    btnVinos.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        vinos.forEach(vino=> contenedorPlatillos.appendChild(vino));
    });


    btnTodos.addEventListener('click',()=>{
        // limpiarHtml(contenedorPlatillos);
        // todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
        location.reload(todo);
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}