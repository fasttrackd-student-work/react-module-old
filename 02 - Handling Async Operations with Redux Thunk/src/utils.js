export const calcPercent = (amount, max, maxFill = 100) =>
    100 - (amount / max) * maxFill

export const grabAmountAndMax = (products, name) =>
    products.reduce(
        (acc, curr) =>
            curr.name === name
                ? [curr.amount, curr.max]
                : acc,
        [0, 8]
    )

export const calcTotalPrice = (products) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(
        products.reduce((acc, { amount, price }) => acc + amount * price, 0))
