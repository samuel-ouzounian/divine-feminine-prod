import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import styled from 'styled-components';
import { SharedImage } from '../constants/image-constant';
import { HeaderMenuWrapper, HeaderMenuWrapper2 } from './menu';
import { Container } from './container';
import { Between, Row } from './layout';
import { LogoWrapperHeader } from './Logo';
import ConnectWallet from './connectWallet';
const {Logo } = SharedImage;


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [showDropDown, setShowDropDown] = useState(false)


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1300) {
            setButton(false);
            setShowDropDown(false)
        } else {
            setButton(true);
            setShowDropDown(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/'>
                        <img className={click ? 'navbar-logo active' : 'navbar-logo'} src={Logo}></img>
                    </Link>
                    {showDropDown ? (<></>) : (<HeaderMenuWrapper id="social-menu" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <a href='https://discord.gg/3eRZjpdSMm' target='_blank' rel="noreferrer">
                        <i class="fab fa-discord" style={{ fontSize: 'calc(1.8vw + 10px)', color: 'white' }}></i>
                        </a>
                        <a href='https://twitter.com/NFT_DivineFemme' target='_blank' rel="noreferrer">
                            <i class="fab fa-twitter" style={{ fontSize: 'calc(1.8vw + 10px)', color: 'white' }}></i>

                        </a>
                        <a href='https://medium.com/@thedivinefemininenft/what-is-the-divine-feminine-a-white-paper-d849a2163e78' target='_blank' rel="noreferrer">
                            <i class="fas fa-scroll" style={{ fontSize: 'calc(1.8vw + 10px)', color: 'white' }} alt='celestial-social'></i>
                        </a>
                    </HeaderMenuWrapper>)}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <div className='nav-dropdown'>
                                <Link
                                    to='/'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </Link>
                                <ul>
                                    <li><a style={{ textDecoration: 'none', color: 'white', fontFamily: "Josefin Sans" }} href="/#about">Intro</a></li>
                                    <li><a style={{ textDecoration: 'none', color: 'white', fontFamily: "Josefin Sans" }} href="/#utility">Utility</a></li>
                                    <li><a style={{ textDecoration: 'none', color: 'white', fontFamily: "Josefin Sans" }} href="/#tiers">Celestial Tiers</a></li>
                                    <li><a style={{ textDecoration: 'none', color: 'white', fontFamily: "Josefin Sans" }} href="/#roadmap">Roadmap</a></li>
                                    <li><a style={{ textDecoration: 'none', color: 'white', fontFamily: "Josefin Sans" }} href="/#teams">Team</a></li>
                                </ul>
                            </div>
                        </li>
                        {!showDropDown ? (<></>) : <li className='nav-item'>
                            <div className='nav-dropdown'>
                                <Link
                                    to='/'
                                    className='nav-links'
                                >
                                    Socials
                                </Link>
                                <ul>
                                    <li><a style={{ textDecoration: 'none', color: 'white', fontFamily: "Josefin Sans" }} href='https://twitter.com/NFT_DivineFemme' target='_blank' rel="noreferrer">Twitter</a></li>
                                    <li><a style={{ textDecoration: 'none', color: 'white', fontFamily: "Josefin Sans" }} href='https://discord.gg/3eRZjpdSMm' target='_blank' rel="noreferrer">Discord</a></li>
                                </ul>
                            </div>
                        </li>}
                        {!showDropDown ? (<></>) : (<li className='nav-item'>
                            <div className='nav-dropdown'>
                                <Link
                                    to='/'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    DOCS
                                </Link>
                                <ul>
                                    <li><a style={{ textDecoration: 'none', color: 'white', fontFamily: "Josefin Sans" }} href="https://medium.com/@thedivinefemininenft/what-is-the-divine-feminine-a-white-paper-d849a2163e78" target='_blank' rel="noreferrer">White Paper</a></li>
                                    <li><a style={{ textDecoration: 'none', color: 'white', fontFamily: "Josefin Sans" }} href="https://gateway.pinata.cloud/ipfs/QmeDUSoD2sX4SkpmGYUtR63ve21f9VA5TP8REdodtVU273" target='_blank' rel="noreferrer">Ownership Agreement</a></li>
                                </ul>
                            </div>
                        </li>)}
                        <li className='nav-item'>
                            <Link
                                to='/PreMint'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Pre-Mint
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/MyDivineNFTs'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                My Divine
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/Leaderboard'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Leaderboard
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/Marketplace'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Marketplace
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/DAO'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                The Divine DAO
                            </Link>
                        </li>
                    </div>
                    <div className={click ? 'wallet-selector-container active' : 'wallet-selector-container'}>
                        <ConnectWallet />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;