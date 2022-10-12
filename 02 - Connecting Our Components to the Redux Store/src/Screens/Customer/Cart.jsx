import { Fragment } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Backdrop from "../../components/Backdrop"
import Button from "../../components/Button"
import Card from "../../components/Card"
import CartItem from "../../components/CartItem"
import CloseButton from "../../components/CloseButton"
import SideBar from "../../components/SideBar"

const Cart = () => {

    const cartItems = useSelector(state => state.cartItems)

    return (
        <Fragment>
            <Backdrop to='/' />
            <SideBar >
                <CloseButton to='/'>X</CloseButton>
                <h1>Cart</h1>
                <Card h='70%' w='90%' b='2px solid #ccc' br='25px' jc='flex-start'>
                    {cartItems.map((cartItem, idx) => (
                        <CartItem key={idx} {...cartItem}></CartItem>
                    ))}
                </Card>
                <h2>Total Price: {' '}
                    {new Intl.NumberFormat(
                        'en-US',
                        { style: 'currency', currency: 'USD' })
                        .format(
                            cartItems.reduce((acc, { price }) => acc + price,
                                0
                            )
                        )}
                </h2>
                <Link to='/checkout' style={{ width: '80%' }}>
                    <Button
                        w='100%'
                        h='50px'
                        bg='#F96E46'
                        disabled={cartItems.length === 0}
                    >
                        Checkout
                    </Button>
                </Link>
            </SideBar>
        </Fragment>
    )
}

export default Cart