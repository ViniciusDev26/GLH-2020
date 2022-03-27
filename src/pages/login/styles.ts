import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100vh;
  width: 50vw;

  max-width: 35%;
  margin: 0 auto;
  margin-top: 15%;
  text-align: center;

  h2 {
    font: bold;
    font-size: 1.3rem;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
  
    input {
      border: 1px solid #ccc;
      padding: .3rem .5rem;
      line-height: 1.5rem;
    }

    button {
      margin-top: 10px;
      border-radius: .3rem;
      padding: .5rem 1rem;
      color: white
    }
  }

  button {
    background-color: blue;
  }
`