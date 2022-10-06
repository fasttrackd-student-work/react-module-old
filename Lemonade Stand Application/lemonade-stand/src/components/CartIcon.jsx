import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as IconSVG } from '../assets/cart.svg'

const StyledCart = styled(Link)`
    position: absolute;
    top: 25px;
    right: 5%;
    border: 2px solid #333;
    border-radius: 50%;
    padding: 5px;
    background: #F96E46;
    z-index: 10;
`
const StyledIcon = styled(IconSVG)`
    height: 40px;
    width: 40px;
`

const CartIcon = ({ to }) => (
    <StyledCart to={to}>
        <StyledIcon />
    </StyledCart>
)

export default CartIcon