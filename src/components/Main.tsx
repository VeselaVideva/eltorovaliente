import React from "react";
import { HeroSlider } from "./HeroSlider";
import { Pedigree } from "./Pedigree";
import { Health } from "./Health.";
import { Shows } from "./Shows";
import { Titles } from "./Titles";
import { SectionDivider } from "./SectionDivider";

export function Main() {
    return (
        <>
            <HeroSlider/>
            <SectionDivider/>
            <Pedigree/>
            <SectionDivider/>
            <Health/>
            <SectionDivider/>
            <Shows/>
            <SectionDivider/>
            <Titles/>
        </>
    );
}