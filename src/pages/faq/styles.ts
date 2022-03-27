import styled from "styled-components";

export const DL = styled.dl`
  margin-left: 1rem;
  color: blue;

  dt {
    margin-top: 1rem;
  }

  dd {
    margin-left: 1rem;
    max-width: 46rem;
  
    &::before {
      content: 'R: ';
    }
  }
`