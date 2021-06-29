import React from "react";
import { AppWrapper, BodyContainer, GlobalStyle } from "./AppStyle";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Intro } from "./components/MainContent/Intro";

export const App = () => {
    return (
        <AppWrapper>
            <GlobalStyle />
            <BodyContainer>
                <LandingPage
                    title="Michael Desormeaux"
                    tagline="Actually Awesome Software Developer"
                />
                <Intro />
            </BodyContainer>
        </AppWrapper>
    );
};
