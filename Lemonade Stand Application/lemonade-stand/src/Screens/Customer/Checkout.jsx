import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { resetCartItems } from "../../store/cartItemsReducer";

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

const initialFormError = {
    isError: false,
    message: '',
    field: ''
}

const initialFormState = {
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
        placeholder: '123-456-7890',
        type: 'tel',
        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}'
    }
}

const Checkout = () => {

    const cartItems = useSelector(state => state.cartItems)

    const dispatch = useDispatch()

    const [form, updateForm] = useState(initialFormState)

    const [formError, updateFormError] = useState(initialFormError)

    const history = useHistory()

    const resetError = () => updateFormError(initialFormError)

    if (!cartItems || cartItems.length === 0) {
        return <Redirect to='/' />
    }

    const formIsValid = () => {
        if (!form.firstName.value ||
            !form.lastName.value ||
            !form.email.value ||
            !form.phone.value
        ) {
            updateFormError({
                ...formError,
                isError: true,
                message: 'All fields are required'
            })
            return false
        } else if (
            !form.email.value.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            )
        ) {
            updateFormError({
                ...formError,
                isError: true,
                message: 'Email must be in format a-z@a-z.com',
                field: 'email'
            })
        }
        return true
    }

    const handleFormSubmit = () => {
        if (formIsValid()) {
            fetch('http://localhost:8080/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "lemonadeStandId": 1,
                    "firstName": form.firstName.value,
                    "lastName": form.lastName.value,
                    "email": form.email.value,
                    "phone": form.phone.value,
                    "lemonades": cartItems.map(item => ({
                        ingredients: item.products.map(product => ({
                            name: product.name,
                            unit: product.unit,
                            quantitySelected: product.amount
                        }))
                    }))
                })
            })
                .then(data => data.json())
                .then(response => {
                    updateForm(initialFormState)
                    dispatch(resetCartItems())
                })
                .then(history.push('/order-success'))
                .catch(error => console.log(error))
        }
    }

    return (
        <StyledCheckout>
            <BackButton to='/'>{'<'}Back</BackButton>
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
                    <Fragment>
                        <Input
                            key={key}
                            {...props}
                            onChange={event => {
                                updateForm({
                                    ...form,
                                    [key]: { ...props, value: event.target.value }
                                })
                                resetError()
                            }}
                        />
                        {formError.isError && formError.field === key ? (
                            <p
                                style={{
                                    color: 'palevioletred',
                                    width: '100%',
                                    textAlign: 'center'
                                }}
                            >
                                {formError.message}
                            </p>
                        ) : (
                            ''
                        )}
                    </Fragment>
                ))}
                <p>After you order we'll make your lemonade and you can pay us at the stand.</p>
                <Button onClick={handleFormSubmit} h='50px' w='100%' bg='#F96E46'>
                    Place Order
                </Button>
                {formError.isError && !formError.field ? <p style={{ color: 'palevioletred', width: '100%', textAlign: 'center' }}>{formError.message}</p> : ''}
            </Card>
        </StyledCheckout>
    )
}

export default Checkout