import styled from 'styled-components'

const StyledCard = styled.div`
   height: 400px;
    width: 500px;
    background: #ccc;
    border: 1px solid #fff;
    &:hover {
      background: #333;
    }
`

const Card = (props) => {
  return (
    <StyledCard className="Card">
      {props.children}
    </StyledCard >
  )
}

export default Card