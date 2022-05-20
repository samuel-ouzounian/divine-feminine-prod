import styled from 'styled-components';
import { HeadingSupper } from "./layout";
import './hero.css'

export default function Hero() {
    return (
        <HeroWrapper>
            <div style={{ width: '100%' }}>
                <HeadingSupper className="wow zoomInUp">
                    <h1 className="header">The Divine Feminine</h1>

                </HeadingSupper>
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
    display:flex;
    flex-direction:column;
    color:white;
    height:90vH;
    background-image:url(./image/hero.jpg);
    background-size:cover;
    background-position:center;
    width:100%;
`