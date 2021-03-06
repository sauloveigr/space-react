import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --first-grey: #D0D6F9;
        --second-grey: #4D5057;
        --third-grey: #383B4B;
        --fourth-grey: #909296;
        --fifth-grey: #4D4D56;
        --color-white: #FFF;
        --color-black: #000;

        --line-height-1: 1.5625rem; // 25px
        --line-height-2: 6.25rem; // 100px
        --line-height-3: 2.0056rem; // 32.09px
        
        --font-1: 1rem; // 16px
        --font-2: 5rem; // 80px
        --font-3: 0.9375rem; // 15px
        --font-4: 1.25rem; // 20px
        --font-5: 0.875rem; // 14px
        --font-6: 3.5rem; // 56px
        --font-7: 1.75rem; // 28px
        --font-8: 1.5rem; // 24px
        --font-9: 17px; // 17px
    }
`;

export default GlobalStyled;
