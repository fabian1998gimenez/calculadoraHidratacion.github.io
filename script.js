let calcular = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const resultadoHolliday = document.getElementById('resultadoHolliday');
const resultadoSuperficie = document.getElementById('resultadoSuperficie');

calcular.addEventListener("click", () => {
    const dato = document.getElementById('peso');
    let peso = dato.value * 1;
    FLU.style.display = 'none';
    MAN.style.display = 'none';

    if (peso > 0) {
        ERROR.style.display = 'none'; 
        if (peso <= 30) {  
            let volumen1 = superficieCorporal(peso) * 1500;
            let volumen2 = superficieCorporal(peso) * 2000;
            console.log(volumen1, volumen2);
            FLU.style.display = 'block';
            MAN.style.display = 'block';
            // Para mostrar resultados en el DOM
            resultadoSuperficie.innerHTML = `Superficie Corporal: ${superficieCorporal(peso).toFixed(2)}`;
            resultadoHolliday.innerHTML = `Holliday Segar: ${hollidaySegar(peso)}`;
        } else {
            hollidaySegar(peso); 
            FLU.style.display = 'block';
            MAN.style.display = 'block';
             // PAra mostrar resultados en el DOM
             resultadoHolliday.innerHTML = `Holliday Segar: ${hollidaySegar(peso)}`;
        }
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});

function superficieCorporal(p) {
    return (((p * 4) + 7) / (Number(p) + 90));
}

function hollidaySegar(p) {
    let hollBasal;
    if (p <= 10) {
        hollBasal = p * 100;
    } else if (p <= 20) {
        hollBasal = (p - 10) * 50 + 1000;
    } else {
        hollBasal = (p - 20) * 20 + 1000 + 500;
    }
    return hollBasal;
}

function calcFlujo(peso) {
    let resto = peso;
    let flujo = 0;
    if (resto > 20) {
        let aux = resto - 20;
        flujo += aux * 1;
        resto -= aux;
    }
    if (resto > 10) {
        let aux = resto - 10;
        flujo += aux * 2;
        resto -= aux;
    }
    flujo += resto * 4;
    return flujo;
}
