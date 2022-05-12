import styled from 'styled-components';
import { HeadingSupper } from "./layout";
import './hero.css'

export default function Hero() {
    return (
        <HeroWrapper>
            <div style={{ width: '100%', marginTop:'10vh' }}>
                <HeadingSupper className="wow zoomInUp">
                    <h1 className="header">The Divine Feminine</h1>

                </HeadingSupper>
            </div>
            <div className="wow zoomInUp" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <a href="/PreMint">
                    <button className="pre-mint-button"><h1>Pre-Mint Reserve</h1></button>
                </a>
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
    display:flex;
    flex-direction:column;
    color:white;
    height:88vH;
    background-image:url(./image/hero.jpg);
    background-size:cover;
    background-position:center;
    width:100%;
`