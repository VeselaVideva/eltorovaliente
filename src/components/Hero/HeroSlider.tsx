import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Container, Image } from "@mantine/core";

export function HeroSlider() {
    return (
        <Container size="xl" style={{ height: 'auto', display: 'flex' }}>
            <Carousel
                sx={{ flex: 1 }}
                height="100%"
                slideSize="100%"
                slideGap="xl"
                withIndicators
                loop
                breakpoints={[
                    { maxWidth: 'md', slideSize: '100%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: "xs" },
                ]}
            >
                <Carousel.Slide><Image src="/images/bg_01.jpg"/></Carousel.Slide>
                <Carousel.Slide><Image src="/images/bg_02.jpg"/></Carousel.Slide>
                <Carousel.Slide><Image src="/images/bg_03.jpg"/></Carousel.Slide>
                <Carousel.Slide><Image src="/images/bg_04.jpg"/></Carousel.Slide>
                <Carousel.Slide><Image src="/images/bg_05.jpg"/></Carousel.Slide>
            </Carousel>
        </Container>
    );
}