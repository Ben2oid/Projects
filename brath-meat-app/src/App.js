import React, { useEffect, useState } from "react";
import Breakline from "./components/break-line";
import Button from "./components/button";
import Carousel from "./components/carousel-img";
import TextCarousel from "./components/carousel-txt";
import CompMain from "./components/comp-main";
import Lightroom from "./components/lightroom";
import Navbar from "./components/navbar"
import Nightmode from "./components/nightmode";
import Parallax from "./components/parallax";
import PopUp from "./components/pop-up";
import "./styles/main.css"

function App() {

  const [nightmode, setNightmode] = useState(true);

  const accentColor = "#B50014"
  const primaryColor = nightmode ? "#0e0e0e" : "#fff"
  const none = "none"
  const left = "left"
  const right = "right"

  return (
    <div className={nightmode ? "" : "night-deact"}>
      <Nightmode setNightmode={setNightmode}/>
      <PopUp />
      <Navbar />
      <div className="special-container">
        <div className="special-work-hours">
          <p><span className="clock material-symbols-outlined">
schedule
</span><strong>Opentime:</strong>Di. - Fr.: 07:00-13:00  und 15:00-18:30.    Sa.:	 07:30	-	12:30</p>
        </div>
        <div className="special-work-hours mobile">
          <p><strong>Christmas opentime: </strong></p>
          <p> Di. - Fr.: 07:00-13:00  und 15:00-18:30.    Sa.:	 07:30	-	12:30</p>
        </div>
      </div>
        <div className="carousel-main-container">
          <Carousel />
        </div>
      <CompMain
        mainBackgroundColor={primaryColor}
        leftBackgroundColor={none}
        leftBackground={none}
        leftPosition={left}
        left={
          <>
              <div className="text-container-left blacktext">
                <h1>Dry aged</h1>
                <h2>Alte Wutz, Dry Aged</h2>
                <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.</p>
                <p>id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.</p>
              </div>
              <div className="button-container-left">
                <Button text={<p>Dry aged</p>} look={"filled"}/>
                <Button text={<p>Alte Wurtz</p>} look={"filled"}/>
            </div>

          </>
        }
        rightBackgroundColor={primaryColor}
        rightBackground={none}
        rightPosition = {none}
        right={
          <>
            <div className="lightroom-container">
              <div className="lightroom">
                <Lightroom />
              </div>
            </div>


          </>          
        }
      />
      <CompMain
        mainBackgroundColor={none}
        leftBackgroundColor={accentColor}
        leftBackground={none}
        leftPosition={left}
        left={
          <>
            <div className="text-container-left">
              <h1>Buchen Sie den</h1>
              <h1>Grillkurs jetzt</h1>
              <ul>
                <li>
                  <p>professioneller Lehrer</p>
                </li>
                <li>
                  <p>ausgezeichneter Metzger</p>
                </li>
                <li>
                  <p>1 Tag lernen</p>
                </li>
                <li>
                  <p>Sie die Kunst des Grillens</p>
                </li>
              </ul>
            </div>
            <div className="button-container-left">
                <Button text={<p>Grillkurs</p>} look={"outlined"}/>
            </div>
          </>
        }
        rightBackgroundColor={none}
        rightBackground={none}
        rightPosition = {right}
        right={
          <>
            <div className="background">
              <img className="background-image" alt="skewers" src="/Images/victoria-shes-UC0HZdUitWY-unsplash copy@2x 1.png"></img>
            </div>
          </>
        }
      />
      <CompMain
      mainBackgroundColor={primaryColor}
      main={
        <>
          <div className="object-container">
            <h1>Das Handwerk</h1>
            <h2>alles über unsere Hausgemachte Produkte</h2>
            <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.</p>
            <p>Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart.</p>
            <p>id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior</p>
            <Button text={<p>Das Handwerk</p>} look={"filled"}/>
          </div>
        </>
      }
      leftBackgroundColor={none}
      leftBackground={none}
      leftPosition={none}
      rightBackgroundColor={none}
      rightBackground={none}
      rightPosition={none}
      />
      <Breakline />
      <CompMain 
        mainBackgroundColor={primaryColor}
        main={
          <>
          <div className="picture-row">
            <div className="picture-container">
                  <img src="/Images/Group 658@2x.png" alt="Rind"></img>
                  <img src="/Images/Group 659@2x.png" alt="Schwein"></img>
                  <img src="/Images/Group 660@2x.png" alt="Hahnchen"></img>
                  <img src="/Images/Group 661@2x.png" alt="Wurstchen"></img>
              </div>          
          </div>  
          </>
        }
      />
      <CompMain
      leftBackground={none}
      left={
        <>
          <div className="background">
            <img className="background-image" alt="skewers" src="/Images/spices.jpg"></img>
          </div>        
        </>        
      }
      rightBackgroundColor={accentColor}
      rightBackground={none}
      rightPosition={right}
      right={
        <>
          <div className="text-container-right">
            <h1>Custome spices for your meat</h1>
            <h2>Turnbeutel nostrud exercitation ullamco 
Sprechen Sie deutsch</h2>
            <p>Odio principes iracundia Müller Rice pri. Ut vel solum mandamus, Kartoffelkopf natum adversarium ei ius, diam Schmetterling honestatis eum.</p>
            <p>Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.</p>
          </div>
        </>
      }
      />
      <Parallax image={"/Images/victoria-shes-XgFFJKSPkNk-unsplash.jpg"}/>
      <div className="parallax-object-frame">
        <div className='parallax-object-container'>
            <h1>Fleischversand</h1>
            <Button text={<p>Jetzt Bestellen</p>} look={"filled"} className="parallax-button"/>
        </div>
      </div>

      <CompMain
        mainBackgroundColor={primaryColor}
        left={
          <>
            <div className="object-container">
              <img className="genussnetz" alt="genussnetz" src="/Images/genussnetz logo 1.png"></img>
            </div>
          </>
        }
        right={
          <>
            <div 
              className="object-container">
                <h1>Metzgerei Brath ist Mitglied im Genussnetzwerk</h1>
                <Button text={<p>Gehen zu site</p>} look={"filled"}/>
            </div>
          </>
        }
      />
      <Breakline />
      <CompMain
        mainBackgroundColor={primaryColor}
        main={
          <>
            <div className="prize-container">
              <div className="all-container">
                <h1>Auszeichnungen</h1>
                <div className="images-prize">
                  <div className="prize-item">
                    <img src="/Images/nagrada1.png" alt="prize" className="image-prize"></img>
                    <p>Tollit argumentum genau Saepe lobortis</p>
                  </div>
                  <div className="prize-item">
                    <img src="/Images/nagrada2.png" alt="prize" className="image-prize"></img>
                    <p>Schneewittchen denique</p>
                  </div>
                  <div className="prize-item">
                    <img src="/Images/nagrada3.png" alt="prize" className="image-prize"></img>
                    <p>Grimms Märchen expetenda</p>
                  </div>
                  <div className="prize-item">
                    <img src="/Images/nagrada4.png" alt="prize" className="image-prize"></img>
                    <p>Mettwurst mei ullum gloriatur.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
      <Breakline />
      <CompMain
        mainBackgroundColor={primaryColor}
        main={
          <>
            <div className="text-carousel-container">
              <p>Empfehlungs</p>
              <h1>Was die Leute über uns sagen</h1>
              <TextCarousel />
            </div>
          </>
        }
      />
          <div className="last-button">
            <Button text={<p>Alle Berichte</p>} look={"filled"}/>
          </div>
      <div className="footer-container">
        <div className="details">
          <a href="https://goo.gl/maps/HNG4QdTVFdDJqKuM9" target={"_blank"} rel="noreferrer"><div className="location"><span className=" mini-logo material-symbols-outlined">
home_pin
</span><p>Klauprechtstraße 25 76137 Karlsruhe, Germany</p></div></a>
          <div className="number"><span className="mini-logo material-symbols-outlined">
smartphone
</span><p>+49 721 358060</p></div>
          <div className="email"><span className="mini-logo material-symbols-outlined">
mail
</span><p>info@partyservice-brath.de</p></div>
        </div>
        <div className="footer-logo">
          <img alt="Brath logo" src="Images/logo-trans.png"></img>
        </div>
        <div className="social">
          <p>Besuchen Sie uns auf:</p>
            <div className="social-logos">
            <img alt="Twitter logo" src="/Images/Group 613.png"></img>
            <img alt="Facebook logo" src="/Images/Group 616.png"></img>
            <img alt="Instagram logo" src="/Images/Group 627.png"></img>
            <img alt="YouTube logo" src="/Images/Group 610.png"></img>
          </div>
        </div>
      </div>
      <div className="credit">
        <p>© 2020 by Metzgerei Heiko Brath  GmbH, Deutschland</p>
        <p>Code and design by <a href="https://www.studiopresent.com" target={"_blank"} rel="noreferrer">StudioPresent</a></p>
      </div>
    </div>
  );
}

export default App;
