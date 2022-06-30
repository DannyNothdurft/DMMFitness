import React from 'react';
import profile from '../images/marija.png';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: transparent;
background-image: linear-gradient(15deg, transparent 0%, #d2ccc4 99%);

border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
width: 25%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
font-size: 0.5rem;
margin-left: 2rem;
margin-top: 3rem;

`;

const StyledImg = styled.img`
    width: 200px;
    height: auto;
     margin-top: -2rem;
   /*  border: 2px solid #000;
    border-radius: 50%; */
`;

/* const StyledH1 = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
`; */

const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
    text-shadow: 2px 1px 6px white;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <h2 className="our-names">Marija Gavrilova</h2>
            <StyledH3>Web Developer (Student by DCI)</StyledH3>
        </Container>
    );
}

export default GlassCard;