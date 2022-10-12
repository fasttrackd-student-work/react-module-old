import styled from "styled-components"

import Card from "./Card"
import Glass from "./Glass"
import Liquid from "./Liquid"
import Fill from "./Fill"
import IceBox from "./IceBox"

const StyledCartItem = styled(Card)`
    flex-direction: row;
    width: 90%;
    background: #16697a;
    border: 3px solid #333;
    border-radius: 50px;
    margin: 10px;
    color: #ebebd3;
    padding: 5px 5px 5px 2px;
    & .list-container {
        margin: 5px;
    }
    & ul {
        list-style: none;
        padding: 0;
        
    }
`
const CartItem = ({ glass = {}, products = [], price }) => {
    return (
        <StyledCartItem>
            <Glass h='100px' w='50px'>
                <Liquid
                    bg='#FFc85c'
                    percent={glass.percentLemonJuice}
                    backFill='#FFC85C'
                    frontFill='#FFD974'
                />
                <Fill
                    bg='#fff'
                    opacity='70%'
                    percent={glass.percentSugar}
                />
                <IceBox iceCubes={glass.numberOfIceCubes} />
            </Glass>
            <div className='list-container'>
                <ul>
                    {products.map((item, idx) => <li key={idx}>{item.name}: {item.amount} {item.unit}</li>)}
                    <li>Lemon Juice: 8 oz.</li>
                    <li>Sugar: 4 tsp.</li>
                    <li>Ice Cubes: 5 cubes</li>
                </ul>
                <h3>Price: {' '}
                    {new Intl.NumberFormat(
                        'en-US',
                        { style: 'currency', currency: 'USD' })
                        .format(price)}
                </h3>
            </div>
        </StyledCartItem>
    )
}

export default CartItem