import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";

const StyledCheckout = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BackButton = styled(Link)`
    position: absolute;
    top: 10px;
    left: 5px;
    font-size: 1.25em;
    text-decoration: none;
    color: #333;
`

const Checkout = ({ cartItems }) => {

    const [form, updateForm] = useState({
        firstName: {
            value: '',
            placeholder: 'First Name',
            type: 'text'
        },
        lastName: {
            value: '',
            placeholder: 'Last Name',
            type: 'text'
        },
        email: {
            value: '',
            placeholder: 'Email',
            type: 'email'
        },
        phone: {
            value: '',
            placeholder: 'Phone',
            type: 'tel'
        }
    })

    if (!cartItems || cartItems.length === 0) {
        return <Redirect to='/' />
    }

    return (
        <StyledCheckout>
            <BackButton to='/home'>{'<'}Back</BackButton>
            <Card
                h='50%'
                w='80%'
                bg='#16697a'
                b='3px solid #333'
                c='#ebebd3'
            >
                <h1>Order Submission</h1>
                <h4>We need to gather some info to ensure you get your order:</h4>
                {Object.entries(form).map(([key, props]) => (
                    <Input
                        key={key}
                        {...props}
                        onChange={e =>
                            updateForm({
                                ...form,
                                [key]: { ...props, value: e.target.value }
                            })
                        } />
                ))}
                <p>After you order we'll make your lemonade and you can pay us at the stand.</p>
                <Button h='50px' w='80%' bg='#F96E46'>
                    Place Order
                </Button>
            </Card>
        </StyledCheckout>
    )
}

export default Checkout