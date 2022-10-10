import { Link } from "react-router-dom";
import styled from "styled-components";

const CloseButton = styled(Link)`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.75em;
    color: #333;
    text-decoration: none;
    &:hover {
        color: #888;
    }
`
export default CloseButton