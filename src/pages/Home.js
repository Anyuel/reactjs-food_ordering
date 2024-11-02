import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/common/NavBar";
import BottomNav from "../components/common/BottomNav";
import "./Home.scss";
import Menu from "../components/home/Menu";
import BottomModal from "../components/home/BottomModal";
import SmallCart from "../components/home/SmallCart";
import FullCartModal from "../components/home/FullCartModal";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectItem, setSelectItem] = useState(null);
  /**
   * @type {[Map<number, ChosenItem>, function(function(Map<number, ChosenItem>): Map<number, ChosenItem>): void]}
   */
  const [chosenItems, setChosenItems] = useState({});
  const [showFullCart, setShowFullCart] = useState(false);
  const navRef = useRef(null);
  const bottomNavRef = useRef(null);
  /**
   * @type {[React.RefObject<HTMLDivElement>, CallableFunction]} 
   */
  const [navRefState, setNavRefState] = useState(null);
  /**
   * @type {[React.RefObject<HTMLDivElement>, CallableFunction]} 
   */
  const [bottomNavRefState, setBottomNavRefState] = useState(null);

  const onSelect = (index) => {
    setActiveIndex(index);
  }

  const onCloseModal = () => {
    setShowModal(false);
  }

  /**
   * @param {Item} item 
   */
  const onOpenModal = (item) => {
    setSelectItem(item);
    setShowModal(true);
  }

    /**
   * @param {Item} item 
   * @param {number} amount
   * @param {string} note
   */
  const onAddItem = (item, amount, note) => {
    setChosenItems((prev) => {
      /**
       * @type {ChosenItem}
       */
      const prevItem = prev[item.id] || {
        ...item,
        details: []
      };

      const newDetails = [];
      let hasUpdated = false;
      if (!note) {
        for (let i = 0; i < prevItem.details.length; i += 1) {
          const newDetail = {...prevItem.details[i]};
          if (!newDetail.note) {
            newDetail.amount += amount;
            hasUpdated = true;
          }
          newDetails.push(newDetail);
        }
      }

      return {
        ...prev,
        [item.id]: {
          ...prevItem,
          details: hasUpdated ? newDetails : [...prevItem.details, { amount, note }]
        }
      }
    });
  }

  useEffect(() => {
    setNavRefState(navRef);
    setBottomNavRefState(bottomNavRef);
  }, [])

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "unset";

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      <NavBar ref={navRef}/>
      <Menu navRef={navRefState} onItemSelect={onOpenModal}/>
      <BottomModal show={showModal} onClose={onCloseModal} item={selectItem} onAddItem={onAddItem}/>
      <FullCartModal show={showFullCart} onClose={() => setShowFullCart(false)} chosenItems={chosenItems}/>
      <div style={{ height: `${bottomNavRefState?.current?.offsetHeight}px` }}></div>
      <div className="fixed-bottom z-2">
        {Object.keys(chosenItems).map(key => chosenItems[key].details.map(detail => detail.amount).reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0) > 0 && <SmallCart chosenItems={chosenItems} onOpenFullCart={() => setShowFullCart(true)}/> }
        <BottomNav activeIndex={activeIndex} onSelect={onSelect} ref={bottomNavRef}/>
      </div>
    </>
  )
};

export default Home;
