import styled from "styled-components"

const StyledProduct = styled.div`
    display: flex;
    color: blue;
`
const Counter = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Product = (props) => {
    return (
        <StyledProduct>
            <h2 style={{ width: '60%' }}>{props.name}</h2>
            <Counter>
                <button onClick={props.increment}>
                    +
                </button>
                <h4>{props.amount}</h4>
                {props.amount > 0 ? (<button onClick={props.decrement}>-</button>
                ) : (
                    undefined
                )}
            </Counter>
        </StyledProduct>

    )
}

export default Product