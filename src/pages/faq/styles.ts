import styled from "styled-components";

export const DL = styled.dl`
  margin-left: 1rem;
  color: #C63337;

  dt {
    margin-top: 1rem;
  }

  dd {
    margin-left: 1rem;
    max-width: 46rem;
    color: black;
    
    &::before {
      content: 'R: ';
    }
  }
`