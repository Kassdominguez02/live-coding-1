// Escribe tu código aquí.

// creamos un arreglo
const arreglo=["hola", "Java", "Javascript","programacion"];

// funcion para determina la palabra mas larga

function palabraMasLarga(){
    let palabra="SI"; //definimos una palabra que sera  de referencia
    let resultado=[];
// este metodo evalua cada elemento del arreglo y ejecuta la funcion que definimos
    arreglo.forEach(elemento => {
        if(elemento.length>palabra.length){
            resultado.push(elemento);

        }
    });

return resultado

   
};

// mostar la lista en el DOM

nuevoarreglo=palabraMasLarga();
console.log(nuevoarreglo);

// traer el elemto del dom
lista=document.getElementById("lista");

for(let x=0; x<nuevoarreglo.length; x++){
    dato=document.createElement("li");
    dato.innerHTML=nuevoarreglo[x];
    lista.appendChild(dato);
};






