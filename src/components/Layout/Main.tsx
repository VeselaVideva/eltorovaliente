import React from "react";
import { Amstaff } from "./Amstaff";
import { HeroSlider } from "../Hero/HeroSlider";
import { Pedigree } from "../Pedigree/Pedigree";
import { Health } from "../Health/Health";
import { Shows } from "../Shows/Shows";
import { Titles } from "../Titles/Titles";
import { SectionDivider } from "./utils/SectionDivider";

export function Main() {
    return (
        <>
            <Amstaff/>
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