import { Fragment, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Cart from './Cart'
import Checkout from './Checkout'
import Home from './Home'
import OrderSuccess from './OrderSuccess'

const initialState = [
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
]

const Customer = () => {
    const [products, updateProducts] = useState(initialState)
    const [cartItems, updateCartItems] = useState([])

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
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(
            products.reduce((acc, { amount, price }) => acc + amount * price, 0))


    const handleAddToCart = () => {
        updateCartItems([
            ...cartItems,
            {
                glass: {
                    percentLemonJuice: calcPercent(
                        products[0].amount,
                        products[0].max,
                        90
                    ),
                    percentSugar: calcPercent(products[1].amount, products[1].max, 30),
                    numberOfIceCubes: products[2].amount
                },
                products,
                price: products.reduce((acc, { amount, price }) => acc + amount * price, 0)
            }])
        updateProducts(initialState)
    }
    return (
        <Fragment>
            <Route path='/cart' render={() => <Cart cartItems={cartItems} updateCartItems={updateCartItems} />} />
            <Switch>
                <Route path='/checkout' render={() => <Checkout cartItems={cartItems} />} />
                <Route path='/order-success' render={() => <OrderSuccess>
                    <h1>Order Success! We'll see you soon. </h1>
                    <br />
                    <Link to='/'>Return Home</Link>
                </OrderSuccess>} />
                <Route path='/' render={() =>
                    <Home
                        products={products}
                        calcPercent={calcPercent}
                        calcTotalPrice={calcTotalPrice}
                        incrementProduct={incrementProduct}
                        decrementProduct={decrementProduct}
                        handleAddToCart={handleAddToCart}
                    />} />
            </Switch>
        </Fragment>
    )
}

export default Customer