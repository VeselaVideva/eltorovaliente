import { Timeline, Text, Container, Grid, Space } from '@mantine/core';
import { IconGitBranch } from '@tabler/icons-react';

export function ShowsTimeline() {
    return (
        <Container my="md">
            <Grid>
                <Grid.Col span={6} className="timeline-left-column">
                    <Timeline active={-1} bulletSize={36} lineWidth={1} align="right">
                        <Timeline.Item bullet={<IconGitBranch size={18}/>} title="2021.02.18">
                            <Text color="dimmed" size="md">Puppy class</Text>
                            <Space h="xl" />
                            <Space h="xl" />

                        </Timeline.Item>
                        <Timeline.Item bullet={<IconGitBranch size={18}/>} title="2021.02.18">
                            <Text color="dimmed" size="md">Puppy class</Text>
                            <Space h="xl" />
                            <Space h="xl" />

                        </Timeline.Item>
                        <Timeline.Item bullet={<IconGitBranch size={18}/>} title="2021.02.18">
                            <Text color="dimmed" size="md">Puppy class</Text>
                            <Space h="xl" />
                            <Space h="xl" />
                            {/*<Text size="sm" mt={4}>Puppy class</Text>*/}
                        </Timeline.Item>
                    </Timeline>
                </Grid.Col>
                <Grid.Col span={6} className="timeline-right-column">
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