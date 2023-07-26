import React from "react";
import { Timeline, Text, Container, Grid, Space, Anchor } from '@mantine/core';
import { IconGitBranch } from '@tabler/icons-react';

export function Shows() {
    return (
        <Container size="xl">
            <Text id="shows" fz="xl" align="center" className="section-title">
                Shows
                <Anchor href="#shows" aria-hidden="true"></Anchor>
            </Text>
            <Space h="xl" />
            <Space h="xl" />
            <Grid>
                <Grid.Col span={4} offset={2}>
                    <Timeline active={-1} bulletSize={36} lineWidth={1} align="left">
                        <Timeline.Item bullet={<IconGitBranch size={18}/>} title="Sample title">
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>

                        </Timeline.Item>
                        <Timeline.Item bullet={<IconGitBranch size={18}/>} title="Sample title">
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>

                        </Timeline.Item>
                        <Timeline.Item bullet={<IconGitBranch size={18}/>} title="Sample title">
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            {/*<Text size="sm" mt={4}>2 hours ago</Text>*/}
                        </Timeline.Item>
                    </Timeline>
                </Grid.Col>
                <Grid.Col span={4} offset={1}>
                    <Timeline active={-1} bulletSize={36} lineWidth={1} align="left">
                        <Timeline.Item bullet={<IconGitBranch size={18}/>} title="Sample title">
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>

                        </Timeline.Item>
                        <Timeline.Item bullet={<IconGitBranch size={18}/>} title="Sample title">
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>

                        </Timeline.Item>
                        <Timeline.Item bullet={<IconGitBranch size={18}/>} title="Sample title">
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            <Text color="dimmed" size="md">You&apos;ve created new branch from master</Text>
                            {/*<Text size="sm" mt={4}>2 hours ago</Text>*/}
                        </Timeline.Item>
                    </Timeline>
                </Grid.Col>
            </Grid>
        </Container>
    );
}