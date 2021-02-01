import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html {
    font-family: var(--font-1);
    color: var(--text-color);
    background: var(--bg-color);
    font-size: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-size: var(--copy);
    line-height: var(--line-height);
  }

  /* Images */

  .gatsby-image-wrapper {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
  }


  /* Layout */

  .spacing-outer {
    margin: var(--v-spacing-S);
  }

  .spacing-inner {
    padding: var(--spacing-XXS);
  }

  .spacing-removed {
    margin-left: calc(var(--v-spacing-S) * -1);
    margin-bottom: calc(var(--v-spacing-S) * -1);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-cols), 1fr);
    gap: var(--spacing-XS);

    * {
      grid-column: 1 / calc(var(--grid-cols) + 1);
    }
  }

  .dark {
    color: var(--text-color);
    background: var(--bg-color);
  }

`;

export default GlobalStyles;
