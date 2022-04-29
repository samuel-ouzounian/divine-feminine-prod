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
const { DiscordIco, TwitterIco, InstagramIco, Logo } = SharedImage;

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
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
                    <HeaderMenuWrapper id="social-menu">
                        <a href='https://discord.gg/QY9k3mEt' target='_blank' rel="noreferrer">
                            <img src={DiscordIco} alt="cronos-social" />
                        </a>
                        <a href='https://twitter.com/NFT_DivineFemme' target='_blank' rel="noreferrer">
                            <img src={TwitterIco} alt="cronos-social" />

                        </a>
                        <a href='' target='_blank' rel="noreferrer">
                            <img src={InstagramIco} alt="cronos-social" />

                        </a>
                    </HeaderMenuWrapper>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-bars' : 'fas fa-bars'} />
                    </div>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
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
                                DAO
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/Whitepaper'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Whitepaper
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