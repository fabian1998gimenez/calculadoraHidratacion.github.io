let calcular = document.getElementById('calcular');
const ERROR = document.getElementById("error");

/* console.log(ERROR); */

calcular.addEventListener("click",()=>{
    let dato = document.getElementById("peso");
    /* console.log(typeof dato.value); */ /* los console.log son para probar, s epueden borrar luego */
    if(dato.value === ""){
        ERROR.style.display = "block";
        return /* no hace falta else luego si hay un return */
    } /* else (dato.value !== "");{ */  /* No hace falta el ;. PINSHE VS QUE ME HIZO PONERLO JAJAJA */
        ERROR.style.display = "none"; /* El else no fue necesario debido al return, bueno. Entonces directamente se pone lo que sera "none" */
    /* } */
    let peso = dato.value * 1;
  
    if (peso > 30){
        let volumen1 = superficieCorporal(peso)*1500;
        let volumen2 = superficieCorporal(peso)*2000;
        console.log(volumen1, volumen2);
    } else {
        console.log("No ingresaste un valor mayor a 30");
    }
    /* console.log(peso); */
})

function superficieCorporal(p){
    return (((p * 4) + 7)/(Number(p) + 90));
}
/* function hollidaySegar(p){
    if (p <= 10){
        p = p * 100;
    } else if (p >= 10 && p < 20){
        p = p 
    }
} */


/* let calculadora = document.getElementById("calculadora");
calculadora.style.background = "blue"; asi cambio de color
 */