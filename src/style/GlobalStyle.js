import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    font-weight:bold;
    @media ${(props) => props.theme.mobile}{
      font-size:18px;
    }
    @media ${(props) => props.theme.tablet}{
      font-size:20px;
    }
    @media ${(props) => props.theme.desktop}{
      font-size:22px;
    }
  }
`
export default GlobalStyle;