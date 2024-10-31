import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import BottomNav from "../components/BottomNav";
import "./Home.scss";
import Menu from "./home/Menu";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    setNavRefState(navRef);
    setBottomNavRefState(bottomNavRef);
  }, [])

  return (
    <div>
      <NavBar ref={navRef}/>
      <Menu navRef={navRefState} />
      <div style={{ height: `${bottomNavRefState?.current?.offsetHeight}px` }}></div>
      <BottomNav activeIndex={activeIndex} onSelect={onSelect} ref={bottomNavRef}/>
    </div>
  )
};

export default Home;
