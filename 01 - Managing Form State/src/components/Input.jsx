import styled from "styled-components";

const Input = styled.input`
    width: 80%;
    border: none;
    border-bottom: 2px solid #333;
    color: #ebebd3;
    background: transparent;
    text-align: center;
    font-size: 1.5em;
    margin: 10px;
    &::placeholder {
        color: #ebebd3;
    }
    &:focus {
        outline: none;
    }
`

export default Input