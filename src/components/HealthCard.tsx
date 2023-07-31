import React from "react";
import { ThemeIcon, Text } from "@mantine/core";

interface HealthCardProps {
    icon: React.FC<any>;
    color: string;
    title: React.ReactNode;
    description: string[];
}

export function HealthCard({ icon: Icon, color, title, description }: HealthCardProps) {
    return (
        <div>
            <ThemeIcon variant="light" color={color} size={40} radius={40}>
                <Icon size="1.3rem" stroke={1} />
            </ThemeIcon>
            <Text mt="sm" mb={7}>
                {title}
            </Text>
            <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
                {description.map((d: any) => <><span>{d}</span><br/></>)}
            </Text>
        </div>
    );
}
