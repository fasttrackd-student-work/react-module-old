import { Fragment, useState } from "react"
import styled from "styled-components"

import Button from "../../components/Button"
import Card from "../../components/Card"
import Fill from "../../components/Fill"
import Glass from "../../components/Glass"
import Liquid from "../../components/Liquid"
import Product from "../../components/Product"
import IceBox from "../../components/IceBox"
import CartIcon from "../../components/CartIcon"
import { Link, Route } from "react-router-dom"
import SideBar from "../../components/SideBar"
import Backdrop from "../../components/Backdrop"
import CloseButton from "../../components/CloseButton"

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
            name: 'Lemon Juice',
            amount: 0,
            max: 8,
            unit: 'oz',
            price: .30
        },
        {
            name: 'Sugar',
            amount: 0,
            max: 12,
            unit: 'tsp',
            price: .15
        },
        {
            name: 'Ice Cubes',
            amount: 0,
            max: 12,
            unit: 'cubes',
            price: .05
        }
    ])

    const incrementProduct = name => {
        updateProducts(
            products.reduce(
                (acc, product) =>
                    product.name === name
                        ? [
                            ...acc,
                            {
                                ...product,
                                amount:
                                    product.amount <= product.max
                                        ? product.amount + 1
                                        : product.max
                            }
                        ]
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
                        ? [...acc,
                        {
                            ...product,
                            amount: product.amount >= 0
                                ? product.amount - 1
                                : 0
                        }
                        ]
                        : [...acc, product],
                []
            )
        )
    }

    const calcPercent = (amount, max, maxFill = 100) => 100 - (amount / max) * maxFill

    const calcTotalPrice = () =>
        new Intl.NumberFormat(
            'en-US',
            { style: 'currency', currency: 'USD' })
            .format(
                products.reduce((acc, { amount, price }) => acc + (amount * price), 0))


    return (
        <Fragment>
            <Route path='/cart' render={() =>
                <Fragment>
                    <Backdrop to='/' />
                    <SideBar >
                        <CloseButton to='/'>X</CloseButton>
                        <h1>Cart</h1>
                        <Card h='70%' w='80%' b='2px solid #ccc' br='25px'>
                            <p>Item 1</p>
                            <p>Item 2</p>
                        </Card>
                        <h2>Total Price $5.00</h2>
                        <Button w='80%' h='50px' bg='#F96E46'>Checkout</Button>
                    </SideBar>
                </Fragment>
            } />

            <StyledHome>
                <CartIcon to='/cart' />
                <h1>Total Price {calcTotalPrice()}</h1>
                <Glass>
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
                <Button w='200px' h='50px' bg='#F96E46'>Add to Cart</Button>
            </StyledHome>
        </Fragment>
    )
}

export default Home