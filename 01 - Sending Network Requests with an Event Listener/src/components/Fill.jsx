import styled from "styled-components";

const Fill = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ bg }) => bg};
    height: 100%;
    width: 100%;
    transform: translate(0, ${({ percent }) => `${percent}%`});
    transition: all 0.4s;
    opacity: ${({ opacity }) => opacity}
`
export default Fill