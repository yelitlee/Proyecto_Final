fetch("https://rickandmortyapi.com/api/character")
.then((data)=>{
    return data.json();
})
.then((data)=>{
    let todosPersonajes = data.results;
    mostrar(todosPersonajes);
});


function mostrar(array) {
    $caja.innerHTML = '';
for (let i = 0; i < array.length; i++) {
     $caja.innerHTML += `
    <div class="card-image";>
        <img src="${array[i].image}">
        <h2>Nombre: ${array[i].name}</h2>
        <p>Género: ${array[i].gender}</p>
        <p>Especie: ${array[i].species}</p>
        <p>Estado: ${array[i].status}</p>
        <p>Origen: ${array[i].origin.name}</p>
        <p>Locación: ${array[i].location.name}</p>
    </div>`;
}
}



let todosPersonajes = [];
let pagina = 1;
let total = 0;      
           
let $caja = document.getElementById('caja');

let $mujerB = document.getElementById('mujer');
let $hombreB = document.getElementById('hombre');
let $GenderlessB = document.getElementById('Genderless');
let $unknownB = document.getElementById('unknown'); 
let $todosB = document.getElementById('todos'); 

let $siguienteB = document.getElementById('siguiente');
let $anteriorB = document.getElementById('anterior');
let $primeraB = document.getElementById('primera_pagina');
let $ultimaB = document.getElementById('ultima_pagina');

function mostrarTodos() {
    let resultado = todosPersonajes.filter((personaje)=>{
        return personaje.gender === 'todos';
    })
    mostrar(resultado);
};


function mostrarMujeres () {
    let resultado = todosPersonajes.filter((personaje)=>{
        return personaje.gender === 'Female';
    })
    mostrar(resultado);
};

function mostrarHombres () {
    let resultado = todosPersonajes.filter((personaje)=>{
        return personaje.gender === 'Male';
    })
    mostrar(resultado);
};

function mostrarGenderless () {
    let resultado = todosPersonajes.filter((personaje)=>{
        return personaje.gender ==='Genderless';
    })
    mostrar(resultado);
};

function mostrarUnknown () {
    let resultado = todosPersonajes.filter((personaje)=>{
        return personaje.gender ==='unknown';
    })
    mostrar(resultado);
};

function mostrarPorGenero(genero) {
    const resultado = todosPersonajes.filter(personaje => personaje.gender === genero);
    mostrar(resultado);
}


$mujerB.addEventListener('click',mostrarMujeres);
$hombreB.addEventListener('click',mostrarHombres);
$GenderlessB.addEventListener('click',mostrarGenderless);
$unknownB.addEventListener('click',mostrarUnknown);
$todosB.addEventListener('click',mostrarTodos);


function mostrarPorGenero(genero) {
    const resultado = personaje.filter(personaje => personaje.gender === genero);
    mostrar(resultado);
}

 

function mostrarTodosPersonajes() {
    mostrar(personaje);
  }
  function mostrarTodosPersonajes() {
    if (genderFiltro === 'todos') {
      mostrar(personaje); 
    } else {
      let resultado = todosPersonajes.filter(todosPersonajes => {
        return todosPersonajes.gender === genderFiltro;
      });
      mostrar(resultado);
    }
  }

function mostrarTodosPersonajes () {
    let resultado = todosPersonajes.filter((personaje)=>{
        return personaje.gender ==='todos';
    })
    mostrar(resultado);
};

 $todosB.addEventListener('click',mostrarTodosPersonajes);

 
 
function usarFetch(numeroPagina) {
    fetch (`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        todosPersonajes = data.results;
        mostrar(todosPersonajes);
    })
}

usarFetch(pagina);


function ultimaPagina () {
    usarFetch(42)
    $siguienteB.disabled = true;
};

$ultimaB.addEventListener('click',ultimaPagina)


function anteriorPagina () {
    pagina--;
   
    if(pagina===42){
        $anteriorB.disabled = false
    }else if(pagina===1){
        $siguienteB.disabled = true;
    }else{
        $siguienteB.disabled = false
    }
    usarFetch(pagina);
}

$anteriorB.addEventListener('click',anteriorPagina);


function primeraPagina () {
    usarFetch(1)
};

$primeraB.addEventListener('click',primeraPagina);


function siguientePagina () {
    pagina++;
  
    if(pagina===2){
        $anteriorB.disabled = false;
    }else if(pagina===42){
        $siguienteB.disabled = true;
    } else 
    {
        $siguienteB.disabled = false;
    }
    usarFetch(pagina);
}

$siguienteB.addEventListener('click',siguientePagina);








// function mostrarTodos() {
//     mostrar(todosPersonajes); 
//   }
//   function mostrarTodos() {
//     if (genderFiltro === 'todos') {
//       mostrar(todosPersonajes); 
//     } else {
//       let resultado =todosPersonajes.filter(personaje => {
//         return personaje.gender === genderFiltro;
//       });
//       mostrar(resultado);
//     }
//   };


// function mostrarTodos () {
//     let resultado = todosPersonajes.filter((personaje)=>{
//         return personaje.gender ==='todos';
//     })
//     mostrar(resultado);
// };

//  function mostrarTodosPersonajes () {
//     let resultado = todosPersonajes.filter((personaje)=>{
//         return personaje.gender === 'TodosPersonajes ';
//     })
//     mostrar(resultado);
// };

// let paginado = () => {
//     if(pagina <= 1){
//       $anteriorB.disabled = true;
//       $primeraB.disabled = true;
//     } else {
//       $anteriorB.disabled = false;
//       $primeraB.disabled = false;
//     }
//     if(pagina === total ){
//       $siguienteB.disabled = true
//       $ultimaB.disabled = true
//     } else {
//       $siguienteB .disabled = false
//       $ultimaB.disabled = false
//     }
//   }