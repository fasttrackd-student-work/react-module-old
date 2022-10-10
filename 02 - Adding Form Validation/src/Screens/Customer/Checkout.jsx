import { Fragment, useState } from "react";
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

const initialFormError = {
    isError: false,
    message: '',
    field: ''
}

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
            placeholder: '123-456-7890',
            type: 'tel',
            pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}'
        }
    })

    const [formError, updateFormError] = useState(initialFormError)

    const resetError = () => updateFormError(initialFormError)

    if (!cartItems || cartItems.length === 0) {
        return <Redirect to='/' />
    }

    const validateForm = () => {
        if (!form.firstName.value || !form.lastName.value || !form.email.value || !form.phone.value) {
            updateFormError({
                ...formError,
                isError: true,
                message: 'All fields are required'
            })
        }
    }

    const handleFormSubmit = () => {
        validateForm()
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