import React from "react";
import { ThemeIcon, Text } from "@mantine/core";

interface HealthCardProps {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: string[];
}

export function HealthCard({ icon: Icon, title, description }: HealthCardProps) {
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon size="1.1rem" stroke={1.5} />
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
