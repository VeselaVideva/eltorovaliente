import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    skeleton: {
        '&::after': {
            opacity: theme.colorScheme === 'dark' ? 0.1 : 0.1,
        },
    },
}));

const BASE_HEIGHT = 1008;
const getSubHeight = (children: number, spacing: number) => BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function PedigreeGrid() {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <Container my="md">
            <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
                <Stack>
                    <Skeleton className={classes.skeleton} height={getSubHeight(2, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Karballido Staffs Mambo Golden Legend</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(2, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Karballido Staffs Queen Of Hearts</Text>
                    </Skeleton>
                </Stack>
                <Stack>
                    <Skeleton className={classes.skeleton} height={getSubHeight(4, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Karballido Staffs Pomerland Secret Weapon</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(4, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Citadela King Of Ring's</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(4, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Alpine's LBK Living On The Road</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(4, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Karballido Staffs Electra Natchios</Text>
                    </Skeleton>
                </Stack>
                <Stack>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Cuda's Playboy</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Or Starlight "Red Mist" King Of Ring's</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Don King Of Ring's</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Francesca Of Eagle Blend</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Sbigstaff Enuf Is Enuf For LBK</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Alpine's Isn't She Lovely</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Builder's Best Heavenly Rider Long Step</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(8, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Karballido Staffs Quite Easy</Text>
                    </Skeleton>
                </Stack>
                <Stack>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Builder's Best Heavenly Rider Long Step</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Bloody Merry Of Nimiloxus</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Paton King Of Ring's</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Golden Heart Long Step</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Lari Long Step</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Cool Wind Kennel Tara</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Picasso Of Eagle Blend</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Srcky's Shady Lady</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Alpine's Rio Grande</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Castle Rocks Precious Gem</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Alpine's Ring Of Fire</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Sindelar's Sweet Child O Mine</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">White Head Long Step</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Ko Bo's Europa</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">John Bull Fekete Domino</Text>
                    </Skeleton>
                    <Skeleton className={classes.skeleton} height={getSubHeight(16, px(theme.spacing.md))} radius="md"
                              animate={false}>
                        <Text className="pedigree-name" fz="md">Karballido Staffs Honey Moon</Text>
                    </Skeleton>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}