import { Dialog } from "@mui/material";
import styled from "styled-components";

export const StyledDialog = styled(Dialog)`
  .MuiPaper-elevation {
    width: 100%;
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;

    h1 {
      font-size: 1.5rem;
    }

    border-bottom: 1px solid #000;
    margin-bottom: 1rem;
  }

  main {
    height: 24rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    section {
      display: flex;
      flex-direction: column;
      
      gap: 1rem;

      div {
        display: flex;
        flex-direction: row;
        gap: .5rem;
      }
    }
  }
`