
//Se crearon variables constantes que poseen preguntas y respuestas

const pregunta1 = "Qué es lo que dice Gandalf cuando se enfrenta a un Balrog (demonio gigante de fuego)";           
const pregunta2 = "Cual de estas acciones dañaría a un no-muerto (zombies, vampiros, espectros, entre otros)";
const pregunta3 = "Cual es el hechizo que Harry Potter usa para protegerse a los dementores (espectros oscuros)";
const pregunta4 = "Que es lo que encuentra Bilbo Bolson en la cueva de Gollum";
const pregunta5 = "Donde hay orden siempre hay ...";

const respuesta1=["No pasarás","Ahí les voy","Primeros los ancianos"];
const respuesta2=["Sanarlo","Jugar con el","Alimentarlo"];
const respuesta3 =["Avada-kedavra","Shazam","Expecto-patronum"];
const respuesta4 = ["Una daga","Un mate","Un anillo"]
const respuesta5=["Caos","Pizza","Una locomotora"]



//Se agregaron las variables a una array para un mejor manejo en el codigo

const arrayRespuestas = [respuesta1,respuesta2,respuesta3,respuesta4,respuesta5]       
const arrayPreguntas = [pregunta1,pregunta2,pregunta3,pregunta4,pregunta5]  

//For para poner una cantidad determinada de preguntas

for(i=0;i<=arrayPreguntas.length-1;i++){                                                


//Posiciones aleatorias (PENDIENTE)
    /* let almacenamiento=[];
     let numeroRandom=Math.floor(Math.random()*5);*/                                    


//Llamamos a cada elemento div escrito en index.html y la almacenamos en una variable

let preguntaDepPrueba = document.getElementById("q"+i);                                
preguntaDepPrueba.appendChild(document.createTextNode(arrayPreguntas[i]));               //Se crea la pregunta y se anida como un nodo hijo del div, para terminar se usa una de las preguntas creadas

let opcion1 = preguntaDepPrueba.appendChild(document.createElement("INPUT"));            //Se crea una variable que almacene los botones que se crearan como INPUTS esta es la opcion A
opcion1.type="button";                                                                   //Se define el tipo de input que sera
opcion1.classList="respuesta";                                                           //Se agrega una class
opcion1.value=arrayRespuestas[i][0];                                                     //Se almacena una de las respuestas a travez de una matriz

let opcion2 = preguntaDepPrueba.appendChild(document.createElement("INPUT"));            //Opcion B  
opcion2.type="button"
opcion2.classList="respuesta";                                                  
opcion2.value=arrayRespuestas[i][1];

let opcion3 = preguntaDepPrueba.appendChild(document.createElement("INPUT"));            //Opcion C
opcion3.type="button"
opcion3.classList="respuesta";
opcion3.value=arrayRespuestas[i][2];
}

    let r = document.querySelectorAll(".respuesta").forEach( r=> {                       //APRENDER SACADO DE  https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
        r.addEventListener('click',()=>{
            //mejorar
            if(r.value==respuesta1[0]||r.value==respuesta2[0]||r.value==respuesta3[2]||r.value==respuesta4[2]||r.value==respuesta5[0]){ //Mejorar a futuro
                alert("Correcto");
            }
            else{
                alert("Incorrecto")
            }
        })
    })



