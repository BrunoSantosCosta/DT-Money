import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  @media screen and (max-width: 745px) { 
    grid-template-columns: inherit;
  }

`;