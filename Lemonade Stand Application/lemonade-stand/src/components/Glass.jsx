import styled from "styled-components";

const GlassBack = styled.div`
    background: #000;
    opacity: 10%;
    border: 1px solid #bbb;
    border-top: 1px solid #ddd;
    border-radius: 10px;
    padding: 3px 5px 40px 5px;
`
const GlassFront = styled.div`
    height: 400px;
    width: 300px;
    background: #fff;
    opacity: 50%;
    border: 1px solid #bbb;
    border-radius: 10px;
    position: relative;
`

const Glass = ({ children }) => {
    return (
        <GlassBack>
            <GlassFront>
                {children}
            </GlassFront>
        </GlassBack>
    )
}

export default Glass