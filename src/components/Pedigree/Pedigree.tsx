import React from "react";
import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Text, createStyles, Space, Anchor, Box } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    skeleton: {
        '&::after': {
            opacity: theme.colorScheme === 'dark' ? 0.1 : 0.1,
        },
    },
}));

const BASE_HEIGHT = 1008;
const getSubHeight = (children: number, spacing: number) => BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function Pedigree() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <Container size="xl">
            <Text id="pedigree" fz="xl" align="center" className="section-title">
                Pedigree
                <Anchor href="#pedigree" aria-hidden="true"></Anchor>
            </Text>
            <Space h="xl" />
            <Space h="xl" />
            <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
                <Stack>
                    <Skeleton className={classes.skeleton} height={getSubHeight(2, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Karballido Staffs Mambo Golden Legend</Text>
                            <Text fz="sm" color="dimmed">LOE 2223368</Text>
                            <Text fz="sm" color="dimmed">NCL-A Clear</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(2, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Karballido Staffs Queen Of Hearts</Text>
                            <Text fz="sm" color="dimmed">LOE 2444673</Text>
                            <Text fz="sm" color="dimmed">NCL-A Carrier</Text>
                        </Box>
                    </Skeleton>
                </Stack>
                <Stack>
                    <Skeleton className={classes.skeleton} height={getSubHeight(4, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Karballido Staffs Pomerland Secret Weapon</Text>
                            <Text fz="sm" color="dimmed">LOE 2152001</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(4, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Citadela King Of Ring's</Text>
                            <Text fz="sm" color="dimmed">LOE 2023370 - JR 7000592 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(4, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Alpine's LBK Living On The Road</Text>
                            <Text fz="sm" color="dimmed">AKC RN 29302101</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(4, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Karballido Staffs Electra Natchios</Text>
                            <Text fz="sm" color="dimmed">LOE 2029126</Text>
                        </Box>
                    </Skeleton>
                </Stack>
                <Stack>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Cuda's Playboy</Text>
                            <Text fz="sm" color="dimmed">ROI 09/51046</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Or Starlight "Red Mist" King Of Ring's</Text>
                            <Text fz="sm" color="dimmed">LOE 2064023 - JR 702392 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Don King Of Ring's</Text>
                            <Text fz="sm" color="dimmed">JR 76275 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Francesca Of Eagle Blend</Text>
                            <Text fz="sm" color="dimmed">JR 75920 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Sbigstaff Enuf Is Enuf For LBK</Text>
                            <Text fz="sm" color="dimmed">AKC RN 20061701</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Alpine's Isn't She Lovely</Text>
                            <Text fz="sm" color="dimmed">AKC RN 20431405</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Builder's Best Heavenly Rider Long Step</Text>
                            <Text fz="sm" color="dimmed">JR 77655 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Karballido Staffs Quite Easy</Text>
                            <Text fz="sm" color="dimmed">LOE 1914498</Text>
                        </Box>
                    </Skeleton>
                </Stack>
                <Stack>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Builder's Best Heavenly Rider Long Step</Text>
                            <Text fz="sm" color="dimmed">JR 77655 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Bloody Merry Of Nimiloxus</Text>
                            <Text fz="sm" color="dimmed">ROI 08/90522 - JR 77090 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Paton King Of Ring's</Text>
                            <Text fz="sm" color="dimmed">JR 78747 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Golden Heart Long Step</Text>
                            <Text fz="sm" color="dimmed">JR 78505 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Lari Long Step</Text>
                            <Text fz="sm" color="dimmed">JR 75834 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Cool Wind Kennel Tara</Text>
                            <Text fz="sm" color="dimmed">JR 754284 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Picasso Of Eagle Blend</Text>
                            <Text fz="sm" color="dimmed">JR 75112 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Srcky's Shady Lady</Text>
                            <Text fz="sm" color="dimmed">JR ... AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Alpine's Rio Grande</Text>
                            <Text fz="sm" color="dimmed">AKC RN 15899501</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Castle Rocks Precious Gem</Text>
                            <Text fz="sm" color="dimmed">AKC RN 09183405 - MET 738/H/09</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Alpine's Ring Of Fire</Text>
                            <Text fz="sm" color="dimmed">AKC RN 18739603</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Sindelar's Sweet Child O Mine</Text>
                            <Text fz="sm" color="dimmed">AKC RN 14023605</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">White Head Long Step</Text>
                            <Text fz="sm" color="dimmed">JR 75805 AST</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Ko Bo's Europa</Text>
                            <Text fz="sm" color="dimmed">MET 9125/06</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">John Bull Fekete Domino</Text>
                            <Text fz="sm" color="dimmed">MET 9330/06</Text>
                        </Box>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Box className="pedigree-name">
                            <Text fz="md">Karballido Staffs Honey Moon</Text>
                            <Text fz="sm" color="dimmed">LOE ...</Text>
                        </Box>
                    </Skeleton>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}