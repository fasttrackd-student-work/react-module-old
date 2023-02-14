import { useState } from 'react'
import './ProductList.css'
import Product from "./Product"

const ProductList = () => {
    const [numberOfLemons, updateNumberOfLemons] = useState(0)

    return (
        <div className="ProductList">
            <Product
                name="Lemons"
                amount={numberOfLemons}
                increment={() => updateNumberOfLemons(numberOfLemons + 1)}
                decrement={() =>
                    updateNumberOfLemons(numberOfLemons > 0 ? numberOfLemons - 1 : 0)}
            />
            <Product name="Sugar" amount={0} />
            <Product name="Ice Cubes" amount={0} />
        </div>
    )
}

export default ProductList