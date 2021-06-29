import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 16px;
    }
    html, body {
        padding: 0;
        margin: 0;
    }
    body {
        min-height: 100vh;
        width: 100%;
    }
`;

export const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: sans-serif;
`;

export const BodyContainer = styled.div`
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    min-width: 0;
    min-height: 100vh;
`;
