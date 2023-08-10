import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Container, Image } from "@mantine/core";

export function HeroSlider() {
    return (
        <Container size="xl">
            <Carousel slideSize="100%" height="70vh" slideGap="xl" controlsOffset="xl" loop withIndicators>
                <Carousel.Slide><Image src="http://eltorovaliente.com/images/bg.jpg"/></Carousel.Slide>
                <Carousel.Slide><Image src="http://eltorovaliente.com/images/bg.jpg"/></Carousel.Slide>
                <Carousel.Slide><Image src="http://eltorovaliente.com/images/bg.jpg"/></Carousel.Slide>
            </Carousel>
        </Container>
    );
}