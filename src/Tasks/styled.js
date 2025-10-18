import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
    margin: 0;
    padding: 0;
`;
export const Item = styled.li`
  display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;
    padding: 10px 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
    
        ${({ hidden, theme }) => hidden && `
          display: none;
        `}
    `;
    export const Content = styled.span`
    ${({ done }) => done && css`
      text-decoration: line-through;
    `}  
    `;
    export const button = styled.button`
    border: none;
    color: ${({ theme }) => theme.colors.blue};
    width: 30px;
    height: 30px; 
    padding: 0;
    transition: filter 0.3s;

    ${({ toggleDone }) => toggleDone && css`
      background: ${({ theme }) => theme.colors.green};
    `}

    ${({ remove }) => remove && css`
    background: ${({ theme }) => theme.colors.red};
    `}
    
    &:hover {
      filter: brightness(110%);
    }
    &:active {
      filter: brightness(130%);
    }
    `;