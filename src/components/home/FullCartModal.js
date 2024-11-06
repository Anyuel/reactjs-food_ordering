import React from "react";
import { localeMoney } from "../../lib/utils";

const FullCartModal = ({ show, onClose, chosenItems, onUpdateItem }) => {
  /**
   * 
   * @param {ChosenItem} chosenItem 
   * @param {number} index 
   */
  const createItem = (chosenItem, index) => {
    return (
      <div key={index}>
        <div className="row">
          <div className="col-2">
            <img alt="item-img" src={chosenItem.img} className="w-100 rounded"/>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h5>{chosenItem.name}</h5>
                {
                  chosenItem.details.map((detail, index) => (
                    <p key={index} className="text-secondary m-0">
                      {detail.amount} { detail.note && `x ${detail.note}`}
                    </p>
                  ))
                }
              </div>
              <h4 className="col-auto fw-bold">{localeMoney(chosenItem.details.reduce((acc, curr) => acc + curr.amount, 0) * chosenItem.price)}$</h4>
            </div>
            <div className="row justify-content-between">
              <a className="col-9 text-decoration-none fw-bold" href="#update">Update</a>
              <div className="col-auto">
                <div className="row">
                <div className="col">
                <button className="btn btn-outline-primary rounded-circle p-0"
                  style={{ width: '20px', height: '20px', fontSize: '10px' }}
                >
                  -
                </button>
              </div>
              <div className="col border rounded text-center"> 1 </div>
              <div className="col align-self-end">
                <button className="btn btn-outline-primary rounded-circle p-0"
                  style={{ width: '20px', height: '20px', fontSize: '10px' }}
                >
                  +
                </button>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`modal fade ${show ? "show" : "modal-hide"}`} style={{ display: 'block' }} role="dialog">
        <div className="modal-dialog fixed-bottom m-0 w-100 modal-dialog-bottom" style={{ maxWidth: '100%'}} role="document">
          <div className="modal-content modal-dialog-bottom">
            <div className="modal-header d-flex bg-white">
              <h5 className="modal-title flex-grow-1 text-center">Details</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body overflow-y-auto p-4">
              <div className="row">
                <h6 className="col m-0">Details</h6>
                <a className="col text-end text-decoration-none" href="#delete" onClick={() => console.log("@annt11 delete")}>Delete All</a>
              </div>
              {
                Object.keys(chosenItems).map((key, index) => {
                  /**
                   * @type {ChosenItem}
                   */
                  const chosenItem = chosenItems[key];
                  return createItem(chosenItem, index);
                })
              }
            </div>
            <div className="modal-footer">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col">Total</div>
                  <h3 className="col text-end">{localeMoney(
                    Object.keys(chosenItems).reduce((acc, curr) => {
                      const chosenItem = chosenItems[curr];
                      return acc + chosenItem.details.reduce((dAcc, dCurr) => dAcc + dCurr.amount, 0) * chosenItem.price;
                    }, 0)
                  )}$</h3>
                </div>
                <div className="row">
                  <button type="button" className="btn btn-primary w-100">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${show ? "show" : "modal-hide"}`}></div>
    </>
)
};

export default FullCartModal;
