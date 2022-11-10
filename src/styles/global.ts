import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-blue: #4EA8DE;
    --color-blue-dark: #1E6F9F;

    --color-purple: #8284FA;
    --color-purple-dark: #5E60CE;

    --color-danger: #E25858;

    --color-gray-100: #F2F2F2;
    --color-gray-200: #D9D9D9;
    --color-gray-300: #808080;
    --color-gray-400: #333333;
    --color-gray-500: #262626;
    --color-gray-600: #1A1A1A;
    --color-gray-700: #0D0D0D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--color-gray-600);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

`;

export default GlobalStyle;
