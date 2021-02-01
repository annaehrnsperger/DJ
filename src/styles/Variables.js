import { createGlobalStyle } from 'styled-components';

const Variables = createGlobalStyle`

  :root {
    /* Colors */
    --bg-color: #131313;
    --text-color: #fff;

    /* Spacing */
    --spacing-XXS: 1rem;
    --spacing-XS: 2rem;
    --spacing-S: 3rem;
    --spacing-M: 5rem;
    --spacing-L: 8rem;
    --spacing-XL: 13rem;
    --spacing-XXL: 21rem;

    /* Variable Spacing */
    /* Clamp Fallback */ --v-spacing-S: var(--spacing-XS);
    --v-spacing-S: clamp(var(--spacing-XXS), 2vw, var(--spacing-S));
    /* Clamp Fallback */ --v-spacing-M: 4rem;
    --v-spacing-M: clamp(var(--spacing-S), 2vw, var(--spacing-M));
    /* Clamp Fallback */ --v-spacing-L: 10rem;
    --v-spacing-L: clamp(var(--spacing-L), 5vw, var(--spacing-XL));
    /* Clamp Fallback */ --v-spacing-XL: 17rem;
    --v-spacing-XL: clamp(var(--spacing-XL), 5vw, var(--spacing-XXL));

    /* Fonts */
    --font-1: Helvetica, sans-serif;
    /* Clamp Fallback */ --copy: calc(12px + (15 - 12) * (100vw - 375px) / (2560 - 375));
    --copy: clamp(1.2rem, 2vw, 1.5rem);
    --letter-spacing: 0.01rem;
    --line-height: 1.2;
  }
`;

export default Variables;
