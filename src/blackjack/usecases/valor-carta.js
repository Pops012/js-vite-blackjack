
/**
 * Obtener el valor numerico de una carta
 * @param {string} carta Ejemplo: '10C'
 * @returns {Number} valor de la carta Ejemplo: 10
 */

export const valorCarta = ( carta ) => {

    if( !carta || carta.length === 0 )
    throw new Error('Carta es obligatorio para obtener');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}