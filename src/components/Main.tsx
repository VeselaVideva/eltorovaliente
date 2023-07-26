import React from "react";
import { HeroSlider } from "./HeroSlider";
import { Pedigree } from "./Pedigree";
import { Shows } from "./Shows";
import { Health } from "./Health.";
import { SectionDivider } from "./SectionDivider";

export function Main() {
    return (
        <>
            <HeroSlider/>
            <SectionDivider/>
            <Pedigree/>
            <SectionDivider/>
            <Shows/>
            <SectionDivider/>
            <Health/>
        </>
    );
}