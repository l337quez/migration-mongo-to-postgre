/*
Este codigo permite agrupar indices. Por ejemplo tenemos un array y su valor hacer referencia a un usuario array_balance= [4,5,5,6,6,6,5,7,7] Necesito migrar datos y cada fila
va representar una linea nueva, por lo tanto debo agruparlos y eso quedaria asi [4,[5,5,5],[6,6,6],[7,7]]. Pero lo que realmente debo agrupar son los id y
los id son incrementales entonces 4 de array balance tiene id usuario 1, 5 id 2 y asi..  por lo tanto el array quedaria [1,[2,3,7],[4,5,6],[8,9]].

Este codigo esta automatizado para hacer esa operacion
*/


const user_id_balance= [4, 5, 5,5,6,5,4,3,2,1,6]; // original


// Rutina para buscar un numero dentro de una Matriz
function findNumberMatriz(array, number) {
var retorna 
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number){
            retorna = i      // si no esta dentro de un array
        }
        if (typeof(array[i]) == 'object'){
            isArray=array[i]
            if (isArray[array[i].length-1] == number){
                retorna = i // posicion
            }
            if (array.length == i){ // else no puede ser, si hay u arrya antes dara null
                retorna = null  // no hubo coincidencia
            }
        }
    }
    return retorna
}

contador = 0;
result = [];
coincidencias =[];
for (let i = 0; i < user_id_balance.length; i++) {
    contador = 0;
    if ( coincidencias.indexOf(user_id_balance[i]) == -1 ){
        for (let j = 0; j < user_id_balance.length; j++) {

            if (user_id_balance[i] == user_id_balance [j]  ){
                coincidencias.push(user_id_balance [j])
                contador ++;
                 if (contador == 2  ){  // es un sub array
                    result.splice(result.length -1, 1, [firtsNumber, j +1]); // convertimos numero en array [numero]

                }else if (contador > 1){ // es un numero
                    result[result.length -1].push(j +1)

                }   else if (contador == 1){ // es un numero
                    firtsNumber= j+1;
                    result.push(j + 1) // se hace push de la psoicion que comience en 1
                } 
            }
        }
    }
}
console.log(result)
