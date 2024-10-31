import React, { useRef, useState, useEffect } from "react";

/**
 * 
 * @param {Object} property 
 * @param {React.RefObject<HTMLDivElement>} property.navRef
 */
const Menu = ({ navRef }) => {
  const categories = ["Combo", "Coffee", "Tea", "PhinDi", "Desert"]

  /**
   * @type {Map<string, Item[]>}
   */
  const menu = {
    "Combo": [
      {
        img: "/assets/home/banner.png",
        name: "Freeze Matcha",
        price: 50000
      },
      {
        img: "/assets/home/banner.png",
        name: "Freeze Matcha"
      },
      {
        img: "/assets/home/banner.png",
        name: "Freeze Matcha"
      },
      {
        img: "/assets/home/banner.png",
        name: "Freeze Matcha"
      },
      {
        img: "/assets/home/banner.png",
        name: "Freeze Matcha"
      }
    ],
    "Coffee": [
      {
        img: "/assets/home/banner.png"
      },
      {
        img: "/assets/home/banner.png"
      },
      {
        img: "/assets/home/banner.png"
      },
      {
        img: "/assets/home/banner.png"
      },
      {
        img: "/assets/home/banner.png"
      }
    ],
    "Tea": [
      {
        img: "/assets/home/banner.png"
      },
      {
        img: "/assets/home/banner.png"
      },
      {
        img: "/assets/home/banner.png"
      },
      {
        img: "/assets/home/banner.png"
      },
      {
        img: "/assets/home/banner.png"
      }
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
                      <h5 className="card-text fw-bold">{`${new Intl.NumberFormat("es-ES").format(item.price)}$`}</h5>
                      <button
                            className="btn btn-primary rounded-circle p-0"
                            style={{ width: '20px', height: '20px', fontSize: '10px' }}
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
