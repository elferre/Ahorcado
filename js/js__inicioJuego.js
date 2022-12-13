/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  2022-05-29  
 * @description    :  
 *========================================================================**/
varAho = JSON.parse(localStorage.String);
varGuiones = "";
for (let index = 0; index < varAho.Palabra.length; index++) {
    if (varAho.Palabra[index].charCodeAt(0) == 32) {
        varGuiones += `<img src="imagen/espacio.png" width="32" alt="" class="ImagenLetra${index}">`;
        varPosicionAhorcadoOK++;
    } else {
        varGuiones += `<img src="imagen/guion.png" width="32" alt="" class="ImagenLetra${index}">`;
    }
}
docLetrasAhorcado.innerHTML = varGuiones;
setTimeout(() => {
    varAho = JSON.parse(localStorage.String);
    if (varAho.definiciones[0] == undefined) {
        docDPista1.innerHTML = "";
    } else {
        docDPista1.innerHTML = varAho.definiciones[0].definicion;
    }
    if (varAho.definiciones[1] == undefined) {
        docDPista2.innerHTML = "";
    } else {
        docDPista2.innerHTML = varAho.definiciones[1].definicion;
    }
}, 1000);

docPistas12.addEventListener("click", () => {
    docPistas12.setAttribute("hidden", "");
});

docLetterPista.addEventListener("click", () => {
    let MuestraNiv = "";
    switch (Number(localStorage.Nivel)) {
        case 1:
            MuestraNiv = varAho.Ayuda.Nivel4;
            break
        case 2:
            MuestraNiv = varAho.Ayuda.Nivel5;
            break
        case 3:
            MuestraNiv = varAho.Ayuda.Nivel6;
            break
        case 4:
            MuestraNiv = varAho.Ayuda.Nivel7;
            break
        case 5:
            MuestraNiv = varAho.Ayuda.Nivel8;
            break

    }
    docPistas[2].innerHTML = `
        <div class="TPista3">Letras no Usadas
        <div class="DPista3">${MuestraNiv}</div>
    </div>
    `;
    docPistas12.removeAttribute("hidden");
});