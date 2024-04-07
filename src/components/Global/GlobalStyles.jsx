import { Global } from '@emotion/react';

export default function GlobalStyles() {
  return (<Global styles="
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  " />);
}
