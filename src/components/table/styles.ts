import { Dialog } from "@mui/material";
import styled from "styled-components";

export const StyledDialog = styled(Dialog)`
  [role="dialog"] {
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 2rem;
    max-height: 80%;
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    
    h1 {
      font-size: 1.5rem;
      color: white;
    }

    .modalHeader::before {
      content: '';
      border-radius: 2rem;
      display: inline-block;
      margin-right: 1rem;
      height: 20px;
      width: 20px;
      background-color: #00c2cb;
    }

    svg {
      color: white;
    }

    border-bottom: 1px solid #000;
    margin-bottom: 1rem;
  }

  main {
    height: 24rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;

    section {
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 1rem;
      padding: .3rem;
      height: 100%;

      gap: .5rem;

      div {
        display: flex;
        flex-direction: row;
        gap: .5rem;

        label {
          font: bold;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 1rem 0;

    button {
      background-color: #CCC;
      color: blue;
      border: 1px solid #CCC;
      border-radius: 2rem;
      padding: 1rem 2rem;
 
      &:hover {
        background-color: blue;
        color: white;
      }

      &:nth-child(1) {
        color: red
      }

      &:nth-child(1):hover {
        color: white;
        background-color: red;
      }
    }
  }
`