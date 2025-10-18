import styled from "styled-components";

export const Wrapper = styled.div`
margin: 10px 0;
background-color: ${({ theme }) => theme.colors.white};
box-shadow: 0 0 10px ${({ theme }) => theme.colors.silver};
`;

export const Header = styled.header`
border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
display: grid;
grid-template-columns: auto auto;
grid-gap: 20px;
justify-content: space-between;
align-items: center;
padding: 20px;
@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
}
`;
export const Title = styled.h2`
margin: 0;
font-size: 20px;

`;
export const Body = styled.div`
padding: 20px;
`;