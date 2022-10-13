import styled from "styled-components"

import Button from "../../components/Button"
import Card from "../../components/Card"
import Fill from "../../components/Fill"
import Glass from "../../components/Glass"
import Liquid from "../../components/Liquid"
import Product from "../../components/Product"
import IceBox from "../../components/IceBox"
import CartIcon from "../../components/CartIcon"
import { useDispatch, useSelector } from "react-redux"
import { decrementProduct, incrementProduct, initializeProducts, resetProducts } from "../../store/productsReducer"
import { addCartItem } from "../../store/cartItemsReducer"
import { calcPercent, calcTotalPrice, grabAmountAndMax } from "../../utils"
import { useEffect } from "react"

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const Home = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://localhost:8080/lemonadestand/1/inventory')
            .then(data => data.json())
            .then(products =>
                dispatch(initializeProducts(products))
            )
            .catch(e => console.log(e))
    }, [dispatch])

    if (!products || products.length === 0) {
        return (<StyledHome>
            <h3>Loading...</h3>
        </StyledHome>
        )
    }


    return (
        <StyledHome>
            <CartIcon to='/cart' />
            <h1>Total Price {calcTotalPrice(products)}</h1>
            <Glass h='450px' w='300px'>
                <Liquid
                    bg='#FFc85c'
                    percent={calcPercent(...grabAmountAndMax(products, 'Lemon Juice'), 90)}
                    backFill='#FFC85C'
                    frontFill='#FFD974'
                />
                <Fill
                    bg='#fff'
                    opacity='70%'
                    percent={calcPercent(...grabAmountAndMax(products, 'Sugar'), 30)}
                />
                <IceBox iceCubes={grabAmountAndMax(products, 'Ice')[0]} />
            </Glass>
            <Card bg='#16697a' b='3px solid #333' br='50px' c='#ebebd3' h='300px' w='400px'>
                {products.map((product, idx) => (
                    <Product
                        key={product.name + idx}
                        {...product}
                        increment={() => dispatch(incrementProduct(product.name))}
                        decrement={() => dispatch(decrementProduct(product.name))}
                    />
                ))}
            </Card>
            <Button
                w='200px'
                h='50px'
                bg='#F96E46'
                onClick={() => {
                    dispatch(addCartItem(products))
                    dispatch(resetProducts())
                }}
                disabled={products.reduce((acc, curr) => acc + curr.amount, 0) === 0} >Add to Cart</Button>
        </StyledHome>
    )
}

export default Home