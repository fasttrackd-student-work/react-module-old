import styled from 'styled-components'

const Card = styled.div`
   height: ${({ h }) => h};
    width: ${({ w }) => w};
    background: ${({ bg }) => bg};
    border: ${({ b }) => b};
    border-radius: ${({ br }) => br};
    color: ${({ c }) => c};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default Card