import { useState } from "react"
import styled from "styled-components"

import Card from "../../components/Card"
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
        </StyledHome>
    )
}

export default Home