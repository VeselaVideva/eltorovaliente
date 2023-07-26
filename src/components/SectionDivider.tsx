import React from "react";
import { Container, Divider, Space } from "@mantine/core";

export function SectionDivider() {
    return (
        <Container size="xl">
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            <Divider my="sm"/>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
        </Container>
    );
}