import { Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Cart from './Cart'
import Checkout from './Checkout'
import Home from './Home'
import OrderSuccess from './OrderSuccess'


const Customer = () => {
    return (
        <Fragment>
            <Route path='/cart' component={Cart} />
            <Switch>
                <Route path='/checkout' component={Checkout} />
                <Route path='/order-success'
                    render={() => (
                        <OrderSuccess>
                            <h1>Order Success! We'll see you soon. </h1>
                            <Link to='/'>Return Home</Link>
                        </OrderSuccess>
                    )}
                />
                <Route path='/' component={Home} />
            </Switch>
        </Fragment>
    )
}

export default Customer