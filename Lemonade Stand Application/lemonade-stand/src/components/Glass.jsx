import styled from "styled-components";

const GlassDiv = styled.div`
    border-radius: 10px;
    border: 1px solid #bbb;
`

const Background = styled(GlassDiv)`
    background: #fff;
`

const GlassBack = styled(GlassDiv)`
    background: rgba(0, 0, 0, .1);
    border-top: 1px solid #ddd;
    padding: 3px 5px 15% 5px;
`
const GlassFront = styled(GlassDiv)`
    height: ${({ h }) => h};
    width: ${({ w }) => w};
    background: rgba(255,255,255,.5);
    position: relative;
    overflow: hidden;
`

const Glass = ({ h, w, children }) => {
    return (
        <Background>
            <GlassBack>
                <GlassFront h={h} w={w}>
                    {children}
                </GlassFront>
            </GlassBack>
        </Background>
    )
}

export default Glass