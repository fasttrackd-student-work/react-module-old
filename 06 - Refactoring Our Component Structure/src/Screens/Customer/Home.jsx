import styled from "styled-components"

import Button from "../../components/Button"
import Card from "../../components/Card"
import Fill from "../../components/Fill"
import Glass from "../../components/Glass"
import Liquid from "../../components/Liquid"
import Product from "../../components/Product"
import IceBox from "../../components/IceBox"
import CartIcon from "../../components/CartIcon"

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const Home = ({ products, calcTotalPrice, calcPercent, incrementProduct, decrementProduct, handleAddToCart }) => {
    return (
        <StyledHome>
            <CartIcon to='/cart' />
            <h1>Total Price {calcTotalPrice()}</h1>
            <Glass h='450px' w='300px'>
                <Liquid
                    bg='#FFc85c'
                    percent={calcPercent(products[0].amount, products[0].max)}
                    backFill='#FFC85C'
                    frontFill='#FFD974'
                />
                <Fill
                    bg='#fff'
                    opacity='70%'
                    percent={calcPercent(products[1].amount, products[1].max, 30)}
                />
                <IceBox iceCubes={products[2].amount} />
            </Glass>
            <Card bg='#16697a' b='3px solid #333' br='50px' c='#ebebd3' h='300px' w='400px'>
                {products.map((product, idx) => (
                    <Product
                        key={product.name + idx}
                        {...product}
                        increment={() => incrementProduct(product.name)}
                        decrement={() => decrementProduct(product.name)}
                    />
                ))}
            </Card>
            <Button w='200px' h='50px' bg='#F96E46' onClick={handleAddToCart} disabled={products.reduce((acc, curr) => acc + curr.amount, 0) === 0} >Add to Cart</Button>
        </StyledHome>
    )
}

export default Home