import styled, { keyframes } from "styled-components";

import { ReactComponent as WaveSVG } from '../assets/wave.svg'
import Fill from './Fill'

const waveFront = keyframes`
    100% {
        transform: translate(-50%, 0);
    }
`
const waveBack = keyframes`
    100% {
        transform: translate(50%, 0);
    }
`

const Wave = styled(WaveSVG)`
    width: 200%;
    position: absolute;
    bottom: 100%;
    margin: -2px;
    &.front {
        fill: ${({ frontFill }) => frontFill};
        left: 0;
        animation: ${waveFront} 3s infinite linear;
    }
    &.back {
        fill: ${({ backFill }) => backFill};
        right: 0;
        animation: ${waveBack} 1.5s infinite linear;
    }
`
const OffSet = styled(Fill)`
    transform: translate(
        0,
        ${({ percent }) => `${percent === 100 ? 110 : percent}%`}
    );
    transition: transform 0.8s;
`


const Liquid = ({ percent, bg, opacity, frontFill, backFill }) => {
    return (
        <OffSet percent={percent} bg={bg} opacity={opacity}>
            <Wave className='front' frontFill={frontFill} />
            <Wave className='back' backFill={backFill} />
        </OffSet>
    )
}

export default Liquid