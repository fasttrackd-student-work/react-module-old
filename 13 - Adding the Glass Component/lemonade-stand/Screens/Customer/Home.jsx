import { useState } from "react"
import styled from "styled-components"
import Button from "../../components/Button"

import Card from "../../components/Card"
import Glass from "../../components/Glass"
import Product from "../../components/Product"

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`


const Home = () => {
    const [products, updateProducts] = useState([
        {
            name: 'Lemons',
            amount: 0
        },
        {
            name: 'Sugar',
            amount: 0
        },
        {
            name: 'Ice Cubes',
            amount: 0
        }
    ])

    const incrementProduct = name => {
        updateProducts(
            products.reduce(
                (acc, product) =>
                    product.name === name
                        ? [...acc, { name, amount: product.amount + 1 }]
                        : [...acc, product],
                []
            )
        )
    }

    const decrementProduct = name => {
        updateProducts(
            products.reduce(
                (acc, product) =>
                    product.name === name && product.amount > 0
                        ? [...acc, { name, amount: product.amount - 1 }]
                        : [...acc, product],
                []
            )
        )
    }

    return (
        <StyledHome>
            <Glass />
            <Card>
                {products.map((product, idx) => (
                    <Product
                        key={product.name + idx}
                        name={product.name}
                        amount={product.amount}
                        increment={() => incrementProduct(product.name)}
                        decrement={() => decrementProduct(product.name)}
                    />
                ))}
            </Card>
            <Button w='200px' h='50px' bg='#F96E46'>Add to Cart</Button>
        </StyledHome>
    )
}

export default Home