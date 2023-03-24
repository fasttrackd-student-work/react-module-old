import styled from "styled-components";

import IceCube from "./IceCube";

const StyledIceBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap-reverse;
`

const IceBox = ({ iceCubes }) => {
    return (
        <StyledIceBox>
            {Array(iceCubes)
                .fill(undefined)
                .map((_, idx) => (
                    <IceCube key={idx} />
                ))
            }
        </StyledIceBox>
    )
}

export default IceBox