import React from "react";
import { Text, Container, SimpleGrid, Anchor } from '@mantine/core';
import { healthData } from "./healthData";
import { HealthCard } from "./HealthCard";

export function Health() {
    const cards = healthData.map((card, index) => <HealthCard {...card} key={index}/>);

    return (
        <Container size="xl">
            <Text id="health" fz="xl" align="center" className="section-title">
                Health
                <Anchor href="#health" aria-hidden="true"></Anchor>
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
                {cards}
            </SimpleGrid>
        </Container>
    );
}