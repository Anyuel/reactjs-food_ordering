import React from "react";
import { localeMoney } from "../../../lib/utils";

const MenuSearch = ({ items, searchKey, setSearchKey, onItemSelect }) => {
  const onSelect = (item) => {
    setSearchKey("");
    onItemSelect(item);
  }

  return (
    <section>
        { items && items.filter(item => item.name.toLowerCase().includes(searchKey.trim().toLowerCase()) || item.description.includes(searchKey.trim().toLowerCase())).map((item, index) => 
            <div className="card" key={index} onClick={() => onSelect(item)}>
              <div className="card-body row">
                <img alt="item" className="col-2" src={item.img}/>
                <h5 className="card-title col">{item.name}</h5>
                <h5 className="card-text fw-bold col">{`${localeMoney(item.price)}$`}</h5>
              </div>
            </div>
        )}
    </section>
  )
};

export default MenuSearch;
