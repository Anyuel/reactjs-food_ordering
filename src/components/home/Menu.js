import React, { useRef, useState, useEffect } from "react";
import { localeMoney } from "../../lib/utils";

/**
 * 
 * @param {Object} property 
 * @param {React.RefObject<HTMLDivElement>} property.navRef
 * @param {function(Item): void} property.onItemSelect
 */
const Menu = ({ navRef, onItemSelect }) => {
  const categories = ["Combo", "Coffee", "Tea", "PhinDi", "Desert"]

  /**
   * @type {Map<string, Item[]>}
   */
  const menu = {
    "Combo": [
      {
        id: 0,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        id: 1,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
    ],
    "Coffee": [
      {
        id: 10,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        id: 11,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        id: 12,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
    ],
    "Tea": [
      {
        id: 20,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        id: 21,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        id: 22,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        id: 23,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
    ],
    "PhinDi": [
      {
        id: 30,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      }
    ],
    "Desert": [
      {
        id: 40,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        id: 50,
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
    ]
  }

  const [currCategory, setCurrCategory] = useState(categories[0]);

  const chaptersRef = useRef([]);

  const onCategorySelect = (category) => {
    setCurrCategory(category);
  }

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
  }, []);

  return (
    <div>
      <section className="bg-primary">
        <div className="p-2">
          <div className="border rounded-pill bg-white d-flex">
            <i className="bi bi-search ms-2 my-2 text-secondary" />
            <input type="search" placeholder="Search" className="search-input flex-fill mx-3"/>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center p-3">
          <img src="/assets/home/banner.png" className="w-75" alt="banner"/>
        </div>
      </section>
      <section className="sticky-nav bg-white" style={{ top: navRef && navRef.current ? navRef.current.offsetHeight : 0 }}>
        <div className="d-flex overflow-x-auto text-secondary">
          { categories.map(category => <a key={category} className={`px-3 mx-3 py-2 no-hover link-offset-3 ${currCategory === category ? "link-primary fw-bold" : "text-decoration-none"}`} href={`#${category}`} onClick={() => onCategorySelect(category)}>{category}</a>) }
        </div>
      </section>
      { categories.map((category, index) => {
        /**
         * @type {Item[]}
         */
        const items = menu[category];
        return (
          <section key={category} id={category} ref={el => (chaptersRef.current[index] = el)}>
            <p className="m-2 fw-bold">{category}</p>
            <div className="container">
              <div className="row row-cols-2 row-cols-md-4 g-3">
                { items && items.map((item, index) => <div key={index} className="col">
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
    </div>
  )
};

export default Menu;
