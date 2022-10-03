import "./Product.css"

const Product = (props) => {
    return (
        <div className="Product">
            <h2>{props.name}</h2>
            <div className="Count">
                <button onClick={props.increment}>
                    +
                </button>
                <h4>{props.amount}</h4>
                <button onClick={props.decrement}>
                    -
                </button>
            </div>
        </div>

    )
}

export default Product