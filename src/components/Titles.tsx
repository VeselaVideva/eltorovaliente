import React from "react";
import { Text, Container, SimpleGrid, Anchor } from '@mantine/core';
import { titlesData } from "./titlesData";
import { TitleCard } from "./TitleCard";

export function Titles() {
    const titles = titlesData.map((title, index) => < TitleCard {...title} key={index}/>);

    return (
        <Container size="xl">
            <Text id="titles" fz="xl" align="center" className="section-title">
                Titles
                <Anchor href="#titles" aria-hidden="true"></Anchor>
            </Text>
            <SimpleGrid
                mt={60}
                cols={3}
                spacing={50}
                breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: 'xl' },
                    { maxWidth: 755, cols: 1, spacing: 'xl' },
                ]}
            >
                { titles }
            </SimpleGrid>
        </Container>
    );
}