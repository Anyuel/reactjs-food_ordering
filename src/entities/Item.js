class Item {
  /**
   * @type {number}
   */
  id;
  /**
   * @type {string}
   */
  img;
  /**
   * @type {string}
   */
  category;
  /**
   * @type {string}
   */
  name;
  /**
   * @type {number}
   */
  price;
  /**
   * @type {string}
   */
  description;
}

class ChosenItem extends Item {
  /**
   * @type {ChosenItemDetail[]} 
   */
  details
}

/**
 * @typedef ChosenItemDetail
 * @param {number} amount
 * @param {string} note
 */