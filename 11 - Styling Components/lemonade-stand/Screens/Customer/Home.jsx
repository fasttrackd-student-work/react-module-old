import { useState } from "react"

import Card from "../../components/Card"
import Product from "../../components/Product"

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
        <div className="Home">
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
        </div>
    )
}

export default Home