import styled from "styled-components"
import Button from "./Button"

const StyledProduct = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
`
const Counter = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Product = (props) => {
    const buttonWidth = '30px'
    const buttonHeight = '30px'

    return (
        <StyledProduct>
            <h2 style={{ width: '60%' }}>{props.name}</h2>
            <Counter>
                <Button
                    onClick={props.increment}
                    disabled={props.amount >= props.max}
                    w={buttonWidth}
                    h={buttonHeight}
                    bg='lightgreen'
                >
                    +
                </Button>
                <h4>{props.amount} {props.unit}</h4>
                <Button
                    onClick={props.decrement}
                    disabled={props.amount <= 0}
                    w={buttonWidth}
                    h={buttonHeight}
                    bg='palevioletred'
                >
                    -
                </Button>
            </Counter>
        </StyledProduct>

    )
}

export default Product