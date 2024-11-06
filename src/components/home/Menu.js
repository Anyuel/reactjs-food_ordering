import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchItems } from "../../api/items";
import MenuBody from "./menu/MenuBody";
import MenuSearch from "./menu/MenuSearch";

/**
 * 
 * @param {Object} property 
 * @param {React.RefObject<HTMLDivElement>} property.navRef
 * @param {function(Item): void} property.onItemSelect
 */
const Menu = ({ navRef, onItemSelect }) => {
  const [categories, setCategories] = useState(["Freeze"]);
  const [currCategory, setCurrCategory] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const { data: items } = useQuery({
    queryKey: "items",
    queryFn: fetchItems
  });

  useEffect(() => {
    const allCategories = new Set();

    if (items) {
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        allCategories.add(item.category);
      }
    }

    setCategories([...allCategories]);
    setCurrCategory([...allCategories][0]);
  }, [items])

  return (
    <>
      <section className="bg-primary">
        <div className="p-2">
          <div className="border rounded-pill bg-white d-flex">
            <i className="bi bi-search ms-2 my-2 text-secondary" />
            <input type="search" placeholder="Search" className="search-input flex-fill mx-3" value={searchKey} onChange={e => setSearchKey(e.target.value)}/>
          </div>
        </div>
      </section>
      { searchKey.length === 0 ?
         <MenuBody categories={categories} items={items} navRef={navRef} onItemSelect={onItemSelect} currCategory={currCategory} setCurrCategory={setCurrCategory}/> :
         <MenuSearch items={items} onItemSelect={onItemSelect} searchKey={searchKey} setSearchKey={setSearchKey}/>
      }
    </>
  )
};

export default Menu;
