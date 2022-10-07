import { Link } from "react-router-dom";
import styled from "styled-components";

const Backdrop = styled(Link)`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 150;
    &:hover {
        cursor: initial;
    }
`
export default Backdrop