import React from "react";
import { ThemeIcon, Text, Image, Group } from "@mantine/core";

interface TitleCardProps {
    flag: string;
    title: string;
    number: string;
    finished: boolean;
}

export function TitleCard({ flag, title, number, finished }: TitleCardProps) {
    return (
        <Group noWrap>
            <ThemeIcon variant="light" size={60} radius={60} opacity={finished ? 1 : .35}>
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
