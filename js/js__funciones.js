/**========================================================================
 * ?                                ABOUT
 * @author         :  Edgardo Ferreyra
 * @email          :  ed20052006@hotmail.com
 * @repo           :  
 * @createdOn      :  2022-05-28 
 * @description    :  
 *========================================================================**/
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = async function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            await callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function RnD(Min, Max, Dec) {
    /**
     * description
     *
     * Igual al Randomize pero con seleccion de rango
     */
    if (Dec == null || Dec == undefined) Dec = 0;
    const u = Math.random();
    const uu = (u * (Max - Min + 1)) + Min;
    if (Dec <= 0) {
        return Math.floor(uu);
    } else {
        return uu.toFixed(Dec);
    }

}

/**========================================================================
 **                           FUNCTION NAME JuegoNivel
 *?  llena con el valor segun el Nivel
 *@param _Minimo valor numero Minimo de cantidad de letras  
 *@param _Maximo valor numero Maximo de cantidad de letras
 *@param _Intentos valor de cantidad maxima de intentos
 * 
 *========================================================================**/

JuegoNivel = (_Minimo, _Maximo, _Intentos) => {
        let salida = false;
        if (_Intentos == undefined) { _Intentos = 50; }
        let aa = "";
        varLetra = String.fromCharCode(RnD(97, 122, 0));
        readTextFile("dicionario/" + varLetra + ".json", async function(text) {
            const data = await JSON.parse(text);
            aa = data;
            varLen = aa.length - 1;
            for (let index = 0; index < _Intentos; index++) {
                if (salida == false) {
                    varArray = RnD(0, varLen, 0);
                    if (aa[varArray].Palabra.length >= _Minimo && aa[varArray].Palabra.length <= _Maximo) {
                        salida = true;
                    }
                    if (index >= (_Intentos - 1)) {
                        salida = true;
                    }
                    if (salida == true) {
                        localStorage.Array = varArray;
                        localStorage.Archivo = varLetra;
                        localStorage.Minimo = _Minimo;
                        localStorage.Maximo = _Maximo;
                        localStorage.Palabra = aa[varArray].Palabra;
                        localStorage.String = JSON.stringify(aa[varArray]);
                        break
                    }
                }
            }
        });
        return JSON.stringify(aa[varArray]);
    }
    /*============================ END OF FUNCTION ============================ JuegoNivel */