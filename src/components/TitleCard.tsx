import React from "react";
import { ThemeIcon, Text, Image, Group } from "@mantine/core";

interface TitleCardProps {
    flag: string;
    title: string;
    number: string;
}

export function TitleCard({ flag, title, number }: TitleCardProps) {
    return (
        <Group noWrap>
            <ThemeIcon variant="light" size={80} radius={80}>
                <Image src={flag}/>
            </ThemeIcon>
            <div>
                <Text fz="lg" fw={500}>
                    {title}
                </Text>
                <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                    {number}
                </Text>
            </div>
        </Group>
    );
}
