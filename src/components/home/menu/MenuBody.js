import React, { useEffect, useRef } from "react";
import { localeMoney } from "../../../lib/utils";

const MenuBody = ( { categories, items, navRef, onItemSelect, currCategory, setCurrCategory }) => {
  const chaptersRef = useRef([]);

  useEffect(() => {
    const currRefs = chaptersRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrCategory(entry.target.id);
        }
      });
    }, {
      threshold: 0.5 // Adjust this value based on when you want the chapter to be considered "in view"
    });

    currRefs.forEach(chapter => {
      if (chapter) {
        observer.observe(chapter);
      }
    });

    return () => {
      currRefs.forEach(chapter => {
        if (chapter) {
          observer.unobserve(chapter);
        }
      });
    };
  }, [setCurrCategory]);

  return (
    <>
      <section className="bg-primary m-0 p-0">
        <div className="container-fluid d-flex justify-content-center p-3">
          <img src="/assets/home/banner.png" className="w-75" alt="banner"/>
        </div>
      </section>
      <section className="sticky-nav bg-white" style={{ top: navRef && navRef.current ? navRef.current.offsetHeight : 0 }}>
        <div className="d-flex overflow-x-auto text-secondary">
          { categories.map(category => <a key={category} className={`px-3 mx-3 py-2 no-hover link-offset-3 ${currCategory === category ? "link-primary fw-bold" : "text-decoration-none"}`} href={`#${category}`} onClick={() => setCurrCategory(category)}>{category}</a>) }
        </div>
      </section>
      { categories.map((category, index) => {
        /**
         * @type {Item[]}
         */
        const filteredItems = items ? items.filter(item => item.category === category) : [];
        return (
          <section key={category} id={category} ref={el => (chaptersRef.current[index] = el)}>
            <p className="m-2 fw-bold">{category}</p>
            <div className="container">
              <div className="row row-cols-2 row-cols-md-4 g-3">
                { filteredItems && filteredItems.map((item, index) => <div key={index} className="col">
                  <div className="card">
                    <img alt="item" src={item.img}/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <h5 className="card-text fw-bold">{`${localeMoney(item.price)}$`}</h5>
                      <button
                            className="btn btn-primary rounded-circle p-0"
                            style={{ width: '20px', height: '20px', fontSize: '10px' }}
                            onClick={() => onItemSelect(item)}
                        >
                            +
                        </button>
                    </div>
                  </div>
                </div>) }
              </div>
            </div>
          </section>
        );
      }) }
    </>
  )
};

export default MenuBody;
