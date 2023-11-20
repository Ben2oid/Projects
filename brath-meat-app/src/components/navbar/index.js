import {React, useState } from 'react'


function Navbar() {

    const [button, setButton] = useState(window.innerWidth <= 1300)
    const [buttonClick, setButtonClick] = useState(false)
    const [downloadShow, setDownloadShow] = useState(true)

    const clickHandler = () => setButtonClick((prevState) => !prevState)
    const closeNav = () => setButton(false)
    
    const showButton = () => {
        if (window.innerWidth <= 1300) {
            setButton(true)
        } else {
            setButton(false)
        }
    }

    const showDownload = () => {
        if (buttonClick === true && window.innerWidth <= 800) {
            setDownloadShow(false)
        } else {
            setDownloadShow(true)
        }
    }

    window.addEventListener("resize", showButton)
    window.addEventListener("resize", showDownload)
    
    return (
        <div className='navbar'>
            <a href='/'><img src="./Images/logo-trans.png" className='main-logo'></img></a>
            <div className='nav-container'>
                <ul>
                    <div className="nav-menu">
                        <div className={!button ? "nav-menu-dis" : (buttonClick ? "nav-menu-mobile-active" : "nav-menu-mobile-disabled")}>
                            <li>
                                <a href='' className='navbutton' onCanPlay={closeNav}>
                                    <p>Die Metzgerei</p>
                                </a>
                            </li>
                            <li>
                                <a href='' className='navbutton'>
                                    <p>Dry Aged</p>
                                </a>
                            </li>
                            <li>
                                <a href='' className='navbutton'>
                                    <p>Fleischversand</p>
                                </a>
                            </li>
                            <li>
                                <a href='' className='navbutton'>
                                    <p>Events/Kurse</p>
                                </a>
                            </li>
                            <li>
                                <a href='' className='navbutton'>
                                    <p>Partyservice</p>
                                </a>
                            </li>
                            <li>
                                <a href='' className='navbutton'>
                                    <p>Tagesessen</p>
                                </a>
                            </li>
                            <li>
                                <a href='' className='navbutton'>
                                    <p>Impressum</p>
                                </a>
                            </li>
                            <li>
                                <a href='' className='navbutton'>
                                    <p>Kontakt</p>
                                </a>
                            </li>
                        </div>
                    </div>
                    <li>
                        {downloadShow ? <a href='' className='download'>
                            <p><img src="/Images/Frame.png" className='icon'></img>Download</p>
                        </a> : ""}
                        
                    </li>
                </ul>
            </div>
            {button && <button className='nav-button'><span className="hamb-icon material-symbols-outlined" onClick={clickHandler}>{!buttonClick ? "menu" : "close"}</span></button>}
        </div>
    )
}

export default Navbar
