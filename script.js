let calcular = document.getElementById('calcular');
const ERROR = document.getElementById("error");
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}

calcular.addEventListener("click",()=>{
    let dato = document.getElementById("peso");
    let peso = dato.value * 1;

    if(dato.value > 0){
        ERROR.style.display = "none";
        let flujo = calcFlujo(dato);
        let mantenimiento = flujo * 1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
        ERROR.style.display = 'block'; 
        FLU.style.display = 'none'; 
        MAN.style.display = 'none'; 
  
    if (peso > 30){
        let volumen1 = superficieCorporal(peso)*1500;
        let volumen2 = superficieCorporal(peso)*2000;
        console.log(volumen1, volumen2);
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else if (peso <= ""){
        ERROR.style.display = 'block'; 
    } else {
        hollidaySegar(peso);
        console.log(hollidaySegar());
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        return;
    }
})

function superficieCorporal(p){
    return (((p * 4) + 7)/(Number(p) + 90));
}

function hollidaySegar(p){
    if (p <= 10){
        p = p * 100;
    } else if (p <=  20){
        p = (p-10)*50+1000;
    } else {
        p = (p-20)*20+1000+500;
    }
    return p;
}

