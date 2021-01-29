/*
este codigo permite agrupar numeros iguales, teniendo en cuenta el orden del array user_id_balance, si la posicion 0, hay un 4,
entonces buscara todos los 4 y se agruparan en la posicion 0 y asi sucesivamente.
*/

const user_id_balance= [4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8 ]; // original

var final= [];
var unique 
var repeat
var new_array = [];

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



// Funcion de valores No repetidos
function onlyUnique(value, index, array) { 
    if (array.indexOf(value) === index){
        //return array.indexOf(value) === index;  //asi deveuelve array valores repetidos
       //console.log("valor noRe fun", value)
       return value
    }else{
        return false;
    }
}

// Funcion de valores  repetidos
function repeatValue(value, index, array) { 
    if (array.indexOf(value) != index){
        //console.log("valor Rep fun", value)
        return value 
        // return array.indexOf(value) != index; 
    }else{
        return false;
    }
}



count_repeat = 0;

for (let i = 0; i < user_id_balance.length; i++) {
    new_array.push(user_id_balance[i])

    console.log("user_id_balance[i]",user_id_balance[i])

    // verificamos si el numero actual se repite o no, Retorna un array
    unique = new_array.filter( onlyUnique );
    repeat = new_array.filter( repeatValue );
    // Para cuando se repite y es un array
    lastNumRepeat= repeat[repeat.length-1] //  ultimo numerooooo
    postion= findNumberMatriz(final,lastNumRepeat) // llamamos a la funcion
    console.log("postion",postion)
    console.log("tipoo",typeof(postion))
    console.log(final[postion])
    console.log(final[final.length-1])
    console.log("lastNumRepeat", lastNumRepeat)

 
    /*     if (position != null  )*/
    if (typeof(final[postion]) == 'object' && user_id_balance[i] == lastNumRepeat) {
    //if (typeof(final[final.length-1]) == 'object' && user_id_balance[i] == lastNumRepeat) {
        final[postion].push(lastNumRepeat)
        var bandera = true;
        console.log("7777777777777777777777777777777777777777", final)
    }
    console.log("postion",postion)


    // Para cuando se reagrupan numeros separados en el array original
    if (typeof(final[postion]) == 'number' && user_id_balance[i] != lastNumRepeat) {
            ref= final.indexOf(repeat[repeat.length-1])

            final[postion].push(lastNumRepeat)
            var bandera = true;
            console.log("7777777777777777777777777777777777777777", final)
        }
  
    // para cuando no se repite
    if (user_id_balance[i] != lastNumRepeat && repeat != "") {
        final.push(user_id_balance[i])
        bandera = false;
        console.log("8989999999999999999999999999999999999", final)
    }
    
    // se compara para saber si se repite, funciona para cuando es numero y no array
    if (user_id_balance[i] == final[final.indexOf(user_id_balance[i])] && bandera == false && user_id_balance[i] == lastNumRepeat) {
        console.log("9999999999999999999999999999999999999", final)
        ref= final.indexOf(repeat[repeat.length-1])
        final.splice(ref, 1, [repeat[repeat.length-1]]); // convertimos numero en array [numero]
        console.log("9999999999999999999999999999999999999", final)
        console.log(repeat)
        console.log(repeat.length)
        final[final.length-1].push(repeat[repeat.length-1]) // push numero repetido
    }
    

    if (repeat == ""){ // si son vacios, pasa  al inicio
        final.push(user_id_balance[i])
        bandera = false;
    }   
    console.log("unique",unique)
    console.log("repeat",repeat)
    console.log("final",final) ///  ultimo numerooooo
     console.log("****************")
}

console.log(unique)
console.log("final",final)



