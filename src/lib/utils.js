/**
 * @param {number} amount 
 * @returns {string}
 */
export const localeMoney = (amount) => {
  return new Intl.NumberFormat("es-ES").format(amount);
}