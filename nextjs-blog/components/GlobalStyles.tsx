import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    /* Add your global CSS styles here */
    body {
        font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        background-color: #efefef;
        color: #000000;
    }

    h1 {
        font-weight: lighter;
        letter-spacing: .2rem;
    }
`

export default GlobalStyles
