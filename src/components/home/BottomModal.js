import React, { useEffect, useRef, useState } from "react";
import "./BottomModal.scss";
import { localeMoney } from "../../lib/utils";

/**
 * 
 * @param {Object} property
 * @param {Item} property.item 
 * @param {boolean} property.show
 * @param {function(): void} property.onClose
 * @param {function(Item, number, string): void} property.onAddItem
 * @returns 
 */
const BottomModal = ({ show, onClose, item, onAddItem }) => {
  const [amount, setAmount] = useState(1);
  const noteRef = useRef(null);

  const onAmountDecrease = () => {
    setAmount((prev) => Math.max(1, prev - 1));
  }

  const onAmountIncrease = () => {
    setAmount((prev) => prev + 1);
  }

  const onAddToCart = () => {
    onAddItem(item, amount, noteRef.current.value);
    onClose();
  }

  useEffect(() => {
    setAmount(1);
  }, [show])

  return (
      <>
        <div className={`modal fade ${show ? "show" : "modal-hide"}`} style={{ display: 'block' }} role="dialog">
          <div className="modal-dialog fixed-bottom m-0 w-100 modal-dialog-bottom" style={{ maxWidth: '100%'}} role="document">
            <div className="modal-content modal-dialog-bottom">
              <div className="modal-header d-flex bg-white">
                <h5 className="modal-title flex-grow-1 text-center">Details</h5>
                <button type="button" className="btn-close" onClick={onClose} />
              </div>
              <div className="modal-body overflow-y-auto p-0">
                <div style={{backgroundImage: `url(${item?.img})`}} className="background-div m-0">
                  <div style={{ height: '10vh'}}></div>
                  <div className="container-fluid rounded-top bg-secondary mx-0 w-100">
                    <div className="row bg-white rounded-top py-3">
                      <h5 className="col-8 fw-bold m-0">
                        {item?.name}
                      </h5>
                      <h4 className="col-4 text-center m-0">
                        {localeMoney(item?.price)}$
                      </h4>
                    </div>
                    <div className="row bg-white my-2">
                      <h6 className="my-3 fw-bold text-secondary">Description</h6>
                      <p className="text-secondary">{item?.description}</p>
                      <div className="form-floating mb-3 p-1 text-secondary">
                        <input type="text" className="form-control" id="order-note-input" placeholder="Add note" ref={noteRef}/>
                        <label htmlFor="order-note-input">Note</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col">Total</div>
                    <h3 className="col text-end">{localeMoney(amount * item?.price)}$</h3>
                  </div>
                  <div className="row">
                    <div className="col col-auto p-1">
                      <button className="btn btn-outline-primary rounded-circle p-0"
                        style={{ width: '20px', height: '20px', fontSize: '10px' }}
                        onClick={onAmountDecrease}
                        disabled={amount === 1}
                      >
                        -
                      </button>
                    </div>
                    <div className="col col-auto p-1">
                      {amount}
                    </div>
                    <div className="col col-auto p-1">
                      <button className="btn btn-outline-primary rounded-circle p-0"
                        style={{ width: '20px', height: '20px', fontSize: '10px' }}
                        onClick={onAmountIncrease}
                      >
                        +
                      </button>
                    </div>
                    <div className="col ms-3">
                      <button type="button" className="btn btn-primary w-100" onClick={onAddToCart}>
                        Add to cart
                      </button>
                    </div>
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

export default BottomModal;
