import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  grid-gap: 20px;
  grid-template-columns: 1fr auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;
export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: 0.3s;
  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
  }
  &:active {
    filter: brightness(130%);
  }
`;
