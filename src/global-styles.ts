import { css } from "@emotion/react";

export const globalStyles = css`
:root {
    --beige: #DDD3C7;
    --white: white;
    --black: rgba(0, 0, 0, 0.800);
    --shadow-color: rgba(0, 0, 0, 0.300);
    --grey: #C6C5C1;
    --green: #96A467;
    --brown: #816A58;
    --red: #C23131;
}

body {
	color: rgba(0, 0, 0, 0.8);
	font-size: 16px;
    min-height: 100vh;
    background-color: var(--beige);
    font-family: "Roboto", sans-serif;
    width: 100%;
    height: 100%;
}
`;
