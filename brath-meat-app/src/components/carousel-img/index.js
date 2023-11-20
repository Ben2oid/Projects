import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const images = [
  { number: 0, name: "image", url: "./Images/image0.png" },
  { number: 1, name: "image", url: "./Images/image1.png" },
  { number: 2, name: "image", url: "./Images/image2.png" },
  { number: 3, name: "image", url: "./Images/image3.jpg" },
];

const numItems = images.length;

function Carousel() {
  const widthCheck = () => setScreenWidth(window.innerWidth);
  window.addEventListener("resize", widthCheck);

  const [count, setCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const clickHandlerNeg = () => {
    if (count <= 0) {
      setCount(numItems - 1);
    } else {
      setCount(count - 1);
    }
  };
  const clickHandlerAdd = () => {
    setCount((count + 1) % numItems)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count + 1) % numItems)
    }, 4500);
    return () => {
      clearInterval(interval)
    };
  }, [count]);

  return (
    <div className="carousel-container">
      <div className="carousel-buttons-container">
        <div className="carousel-buttons">
          <div className="carousel-button-prev" onClick={clickHandlerNeg}>
              <button className="prev-btn">
                <span className="arrow material-symbols-outlined">
                  arrow_circle_left
                </span>
              </button>
            </div>
          <div className="carousel-pagination-container">
            <div className="carousel-pagination">
              {images.map((pag) => (
                <span 
                  onClick={
                    () => setCount(pag.number)
                  }
                  className={`material-symbols-outlined pag${pag.number} pagination`}
                  key={uuid()} 
                  src="/Images/Ellipse 71.png"
                  style={{
                    backgroundColor: `pag${pag.number}` === `pag${count}` ? "#B50014" : "none",
                    borderRadius: "50%",
                    cursor: "pointer"
                  }}>
                radio_button_unchecked
                </span>
              ))}
            </div>
          </div>
          <div className="carousel-button-next">
            <button className="next-btn" onClick={clickHandlerAdd}>
              <span className="arrow material-symbols-outlined">
                arrow_circle_right
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="carousel">
        <div className="image-container">
            <div 
              className="items"
              style={{
                transform: `translateX(-${count * screenWidth}px)`
            }}>
                {images.map((image) => (
                <img
                    key={uuid()}
                    alt={image.name}
                    src={image.url}
                    className={image.name}
                    style={{
                      width: "100vw"
                    }}
                    ></img>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
