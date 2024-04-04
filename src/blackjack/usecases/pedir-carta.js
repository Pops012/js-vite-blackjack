

/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck  Tiene que ser un arreglo de String de cartas
 * @returns {String} Retorna la carta del deck
 */


export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}