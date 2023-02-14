import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --background-color: #2F2E41;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
  background-color:var(--background-color);
  
}
`;

export { GlobalStyle };
