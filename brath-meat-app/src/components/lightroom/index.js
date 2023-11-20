import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import {v4 as uuid} from 'uuid'

const images = [
    {number: 0, name: "image1", url: "/Images/1.jpg", alt: "meat"},
    {number: 1, name: "image2", url: "/Images/2.jpg", alt: "meat"},
    {number: 2, name: "image3", url: "/Images/3.jpg", alt: "grilled-meat" },
    {number: 3, name: "image4", url: "/Images/4.jpg", alt: "Brath grilling"},
]

const objectNum = (images.length - 1)

function Lightroom() {

  const imageRef = useRef(null)
  const [state, setState] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [imageWidth, setImageWidth] = useState(0)

  const changeImage = (e) => setSelectedImage(e)

  const clickHandler = (item) => {
    setState((prevState) => !prevState)
    setSelectedImage(item)
    }


  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        setImageWidth(imageRef.current.clientWidth)
      }
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize)
      window.removeEventListener("resize", handleResize)
    };
  }, []);

  useEffect(() => {
    const handleBodyClass = () => 
    state 
      ? 
      document.body.classList.add("lightroom-activated") 
      : 
      document.body.classList.remove("lightroom-activated");

    handleBodyClass()

    window.addEventListener("scroll", handleBodyClass)
      
    return () => {
      window.removeEventListener("scroll", handleBodyClass)
    };
  }, [state]);

  return (
    <>
      <div className='container-lightroom'>
          <div className='main-image-container'>
              <img
                ref={imageRef}
                onClick={() => clickHandler(images[0])}
                className="main-image" 
                src={images[0].url}
                alt="meat"
                >
              </img>
          </div>
          <div className='bottom-image-container'>
              {(images.map((image) =><img
                                        onClick={() => clickHandler(image)} 
                                        alt={images.alt} key={uuid()} 
                                        className={`bottom-image main-${image.name}`}
                                        src={image.url}
                                        style={{
                                          width: imageWidth/objectNum,
                                          height: (imageWidth/objectNum)/1.5
                                        }}
                                        >
                                      </img>)).slice(1)}
          </div>
      </div>
      <div 
        className={state ? "lightroom-active": "lightroom-inactive"} 
      >
        <div 
          className='exit-lightroom' 
          onClick={clickHandler}><span 
          className="material-symbols-outlined x-symbol"
        >close</span>
        </div>
        <div className='small-images'>
          {images.map((image) => 
            <img 
              alt={image.alt}
              className={`small-image ${image.name}`} 
              key={uuid()} src={image.url}
              onClick={() => changeImage(image)}
              style={
                selectedImage.name === image.name ? {
                  filter: "brightness(1)",
                } : {}
              }
              ></img>
          )}
        </div>
        <img alt={selectedImage.name} src={selectedImage.url}></img>
      </div>
    </>
  )
}

export default Lightroom
