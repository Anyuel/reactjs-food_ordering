import React from "react";
import "./SmallCart.scss";
import { localeMoney } from "../../lib/utils";

/**
 * @param {Object} properties
 * @param {Map<number, ChosenItem} properties.chosenItems
 * @returns 
 */
const SmallCart = ({ chosenItems, onOpenFullCart }) => {
  return (
    <div className="mb-5 mx-4 rounded shadow bg-white border" onClick={onOpenFullCart}>
      <div className="container-fluid">
        <div className="row py-2">
          <div className="col-auto d-grid align-items-center">
            <i className="bi bi-cart3 position-relative cart-icon">
              <span className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle text-white text-center fst-normal" style={{ fontSize: '10px', height: '20px', width: '20px'}}>
                {Object.keys(chosenItems).map(key => {
                  /**
                   * @type {ChosenItem}
                   */
                  const chosenItem = chosenItems[key];
                  return chosenItem.details.map(detail => detail.amount).reduce((acc, curr) => acc + curr, 0);
                }).reduce((acc, curr) => acc + curr, 0)}
              </span>
            </i>
          </div>
          <div className="col-auto d-grid align-items-center">
            <div className="vertical-divider"></div>
          </div>
          <div className="col d-grid align-items-center">
            <p className="mb-0">Total</p>
            <h5 className="mb-0">{localeMoney(
              Object.keys(chosenItems).map(key => {
                /**
                 * @type {ChosenItem}
                 */
                const chosenItem = chosenItems[key];
                return chosenItem.details.reduce((acc, curr) => acc + curr.amount, 0) * chosenItem.price;
              }).reduce((acc, curr) => acc + curr, 0)
            )}$</h5>
          </div>
          <div className="col-auto d-grid align-items-center mx-2">
            <button className="btn btn-primary">Order</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SmallCart;
