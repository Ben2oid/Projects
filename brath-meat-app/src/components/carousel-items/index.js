import React, { useEffect } from 'react'
import {v4 as uuid} from "uuid"

const items = [
    {num: 0, 
      text: "Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.",
      name: "Maria Kartofeln"},
    {num: 1,
      text: "Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco .",
      name: "Halling Tobias Koch"},
    {num: 2,
      text: "Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.",
      name: "Rene Weinstein"},
    {num: 3,
      text: "Ipsum lorem very good yea lorem ipsum. Ipsum lorem very good yea lorem ipsum",
      name: "Gooboi Bolton"},
    {num: 4,
      text: "Ipsum lorem very good yea lorem ipsum. Ipsum lorem very good yea lorem ipsum",
      name: "Hot boi goodie"},
    {num: 5,
      text: "Ipsum lorem very good yea lorem ipsum. Ipsum lorem very good yea lorem ipsum",
      name: "Gooboi Bolton"},
    {num: 6,
      text: "Ipsum lorem very good yea lorem ipsum. Ipsum lorem very good yea lorem ipsum",
      name: "Hot boi goodie"},
]


function CarouselItems( {count, setNumOfItems, widthOfComments, marginSize} ) {

  useEffect(() => {
    setNumOfItems(items.length)
  }, [setNumOfItems]);

  return (
    <>
        {items.map((item) => (
            <div
                style={{
                  width: `${widthOfComments}px`,
                  margin: `${marginSize}px`
                }}
                className={
                  (count === item.num)
                  ? `comments-act comments comm${item.num}`
                  : `comments comm${item.num}`
                }
                key={uuid()}
                >
                  {count === item.num
                  ?
                  <>
                    <div className='act-img-container'>
                        <img alt="grill" className='activated-image' src='/Images/grillkurs_icon.png'></img>
                        <img alt="stars" className='activated-image' src='/Images/zvezdice.png'></img>
                    </div>
                    <div className='quotation-mark'>
                      <img src='/Images/znak.png'></img>
                    </div>
                  </>
                  : ""
                  }
                  <p>{item.text}</p>
                  <p><strong>{item.name}</strong></p>
            </div>
        ))}
    </>
  )
}

export default CarouselItems