import { Fragment } from "react"
import Backdrop from "../../components/Backdrop"
import Button from "../../components/Button"
import Card from "../../components/Card"
import CartItem from "../../components/CartItem"
import CloseButton from "../../components/CloseButton"
import SideBar from "../../components/SideBar"

const Cart = ({ cartItems }) => {

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
                <Button
                    w='80%'
                    h='50px'
                    bg='#F96E46'
                >
                    Checkout
                </Button>
            </SideBar>
        </Fragment>
    )
}

export default Cart