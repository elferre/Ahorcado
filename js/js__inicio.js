/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  2022-05-28 
 * @description    :  
 *========================================================================**/

docNivel1.addEventListener("click", () => {
    localStorage.Nivel = 1;
    JuegoNivel(2, 7);
    SegundaPantalla();
});
docNivel2.addEventListener("click", () => {
    localStorage.Nivel = 2;
    JuegoNivel(5, 9);
    SegundaPantalla();
});
docNivel3.addEventListener("click", () => {
    localStorage.Nivel = 3;
    JuegoNivel(7, 12);
    SegundaPantalla();
});
docNivel4.addEventListener("click", () => {
    localStorage.Nivel = 4;
    JuegoNivel(9, 15);
    SegundaPantalla();
});
docNivel5.addEventListener("click", () => {
    localStorage.Nivel = 5;
    JuegoNivel(12, 20);
    SegundaPantalla();
});
async function SegundaPantalla() {
    docPrimerPaso.setAttribute("hidden", "");
    docSegundoPaso.removeAttribute("hidden");
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
    }, 100);
}

docBotones1.addEventListener("click", () => {
    JuegoNivel(localStorage.Minimo, localStorage.Maximo);
    SegundaPantalla();
    docBotones1.setAttribute("hidden", "");
    setTimeout(() => {
        docBotones1.removeAttribute("hidden");
    }, 10000);
});

docBotones2.addEventListener("click", () => {
    window.location.href = "juego.html";
});