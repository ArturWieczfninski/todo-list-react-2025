import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  `;

export const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue};
  border: none;
  margin: 0 0 0 20px;
  transition: filter 0.3s;

  @Media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }
  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }
    &:active {
      filter: brightness(130%);
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.silver};
    }
  `;