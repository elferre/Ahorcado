/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  2022-05-29  
 * @description    :  
 *========================================================================**/
docLetraA.addEventListener("click", () => {
    MuestraLetra("a");
});
docLetraB.addEventListener("click", () => {
    MuestraLetra("b");
});
docLetraC.addEventListener("click", () => {
    MuestraLetra("c");
});
docLetraD.addEventListener("click", () => {
    MuestraLetra("d");
});
docLetraE.addEventListener("click", () => {
    MuestraLetra("e");
});
docLetraF.addEventListener("click", () => {
    MuestraLetra("f");
});
docLetraG.addEventListener("click", () => {
    MuestraLetra("g");
});
docLetraH.addEventListener("click", () => {
    MuestraLetra("h");
});
docLetraI.addEventListener("click", () => {
    MuestraLetra("i");
});
docLetraJ.addEventListener("click", () => {
    MuestraLetra("j");
});
docLetraK.addEventListener("click", () => {
    MuestraLetra("k");
});
docLetraL.addEventListener("click", () => {
    MuestraLetra("l");
});
docLetraM.addEventListener("click", () => {
    MuestraLetra("m");
});
docLetraN.addEventListener("click", () => {
    MuestraLetra("n");
});
docLetraÑ.addEventListener("click", () => {
    MuestraLetra("ñ");
});
docLetraO.addEventListener("click", () => {
    MuestraLetra("o");
});
docLetraP.addEventListener("click", () => {
    MuestraLetra("p");
});
docLetraQ.addEventListener("click", () => {
    MuestraLetra("q");
});
docLetraR.addEventListener("click", () => {
    MuestraLetra("r");
});
docLetraS.addEventListener("click", () => {
    MuestraLetra("s");
});
docLetraT.addEventListener("click", () => {
    MuestraLetra("t");
});
docLetraU.addEventListener("click", () => {
    MuestraLetra("u");
});
docLetraV.addEventListener("click", () => {
    MuestraLetra("v");
});
docLetraW.addEventListener("click", () => {
    MuestraLetra("w");
});
docLetraX.addEventListener("click", () => {
    MuestraLetra("x");
});
docLetraY.addEventListener("click", () => {
    MuestraLetra("y");
});
docLetraZ.addEventListener("click", () => {
    MuestraLetra("z");
});

MuestraLetra = (Letra) => {
    if (varPosicionAhorcado == 7) { return; }
    if (varPosicionAhorcadoOK == varAho.Palabra.length) {
        return;
    }
    varEncontrada = false;
    for (let index = 0; index < varAho.Palabra.length; index++) {
        if (varAho.Palabra[index] == Letra) {
            varEncontrada = true;
            varPosicionAhorcadoOK++;
            docImagenLetra[index].setAttribute("src", "imagen/" + Letra + ".png");
            if (varPosicionAhorcadoOK == varAho.Palabra.length) {
                docVueltaCargar.removeAttribute("hidden");
                docFondoAhorcado.setAttribute("class", "FondoAhorcado8");
            }
        }
    }
    if (varEncontrada == true) {
        switch (Letra) {
            case "a":
                docLetraA.setAttribute("class", "letterVerde");
                break;
            case "b":
                docLetraB.setAttribute("class", "letterVerde");
                break;
            case "c":
                docLetraC.setAttribute("class", "letterVerde");
                break;
            case "d":
                docLetraD.setAttribute("class", "letterVerde");
                break;
            case "e":
                docLetraE.setAttribute("class", "letterVerde");
                break;
            case "f":
                docLetraF.setAttribute("class", "letterVerde");
                break;
            case "g":
                docLetraG.setAttribute("class", "letterVerde");
                break;
            case "h":
                docLetraH.setAttribute("class", "letterVerde");
                break;
            case "i":
                docLetraI.setAttribute("class", "letterVerde");
                break;
            case "j":
                docLetraJ.setAttribute("class", "letterVerde");
                break;
            case "k":
                docLetraK.setAttribute("class", "letterVerde");
                break;
            case "l":
                docLetraL.setAttribute("class", "letterVerde");
                break;
            case "m":
                docLetraM.setAttribute("class", "letterVerde");
                break;
            case "n":
                docLetraN.setAttribute("class", "letterVerde");
                break;
            case "ñ":
                docLetraÑ.setAttribute("class", "letterVerde");
                break;
            case "o":
                docLetraO.setAttribute("class", "letterVerde");
                break;
            case "p":
                docLetraP.setAttribute("class", "letterVerde");
                break;
            case "q":
                docLetraQ.setAttribute("class", "letterVerde");
                break;
            case "r":
                docLetraR.setAttribute("class", "letterVerde");
                break;
            case "s":
                docLetraS.setAttribute("class", "letterVerde");
                break;
            case "t":
                docLetraT.setAttribute("class", "letterVerde");
                break;
            case "u":
                docLetraU.setAttribute("class", "letterVerde");
                break;
            case "v":
                docLetraV.setAttribute("class", "letterVerde");
                break;
            case "w":
                docLetraW.setAttribute("class", "letterVerde");
                break;
            case "x":
                docLetraX.setAttribute("class", "letterVerde");
                break;
            case "y":
                docLetraY.setAttribute("class", "letterVerde");
                break;
            case "z":
                docLetraZ.setAttribute("class", "letterVerde");
                break;
        }
    } else {
        switch (Letra) {
            case "a":
                docLetraA.setAttribute("class", "letterRojo");
                break;
            case "b":
                docLetraB.setAttribute("class", "letterRojo");
                break;
            case "c":
                docLetraC.setAttribute("class", "letterRojo");
                break;
            case "d":
                docLetraD.setAttribute("class", "letterRojo");
                break;
            case "e":
                docLetraE.setAttribute("class", "letterRojo");
                break;
            case "f":
                docLetraF.setAttribute("class", "letterRojo");
                break;
            case "g":
                docLetraG.setAttribute("class", "letterRojo");
                break;
            case "h":
                docLetraH.setAttribute("class", "letterRojo");
                break;
            case "i":
                docLetraI.setAttribute("class", "letterRojo");
                break;
            case "j":
                docLetraJ.setAttribute("class", "letterRojo");
                break;
            case "k":
                docLetraK.setAttribute("class", "letterRojo");
                break;
            case "l":
                docLetraL.setAttribute("class", "letterRojo");
                break;
            case "m":
                docLetraM.setAttribute("class", "letterRojo");
                break;
            case "n":
                docLetraN.setAttribute("class", "letterRojo");
                break;
            case "ñ":
                docLetraÑ.setAttribute("class", "letterRojo");
                break;
            case "o":
                docLetraO.setAttribute("class", "letterRojo");
                break;
            case "p":
                docLetraP.setAttribute("class", "letterRojo");
                break;
            case "q":
                docLetraQ.setAttribute("class", "letterRojo");
                break;
            case "r":
                docLetraR.setAttribute("class", "letterRojo");
                break;
            case "s":
                docLetraS.setAttribute("class", "letterRojo");
                break;
            case "t":
                docLetraT.setAttribute("class", "letterRojo");
                break;
            case "u":
                docLetraU.setAttribute("class", "letterRojo");
                break;
            case "v":
                docLetraV.setAttribute("class", "letterRojo");
                break;
            case "w":
                docLetraW.setAttribute("class", "letterRojo");
                break;
            case "x":
                docLetraX.setAttribute("class", "letterRojo");
                break;
            case "y":
                docLetraY.setAttribute("class", "letterRojo");
                break;
            case "z":
                docLetraZ.setAttribute("class", "letterRojo");
                break;
        }
        varPosicionAhorcado++;
        docFondoAhorcado.setAttribute("class", "FondoAhorcado" + varPosicionAhorcado);
        if (varPosicionAhorcado == 7) {
            for (let index = 0; index < varAho.Palabra.length; index++) {
                if (varAho.Palabra[index].charCodeAt(0) == 32) {
                    docImagenLetra[index].setAttribute("src", "imagen/espacio.png");
                } else {
                    docImagenLetra[index].setAttribute("src", "imagen/" + varAho.Palabra[index] + ".png");
                }
            }
            docVueltaCargar.removeAttribute("hidden");
        }
    }
}

docVueltaCargar.addEventListener("click", () => {
    window.location.href = "index.html";
});