import React from 'react';
import { createStyles, Container, Group, ActionIcon, rem, useMantineColorScheme, Text } from '@mantine/core';
import { IconDna, IconBrandInstagram, IconBrandTiktok, IconChevronUp, IconMail } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

export function Footer() {
    const { classes } = useStyles();
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const goToAnchor = () => {
        window.location.href = "#gototop";
    };

    return (
        <div className={classes.footer}>
            <Container className={classes.inner} size="xl">
                <Text fz="lg" align="center" className="logo-title">
                    EL TORO VALIENTE
                </Text>
                <ActionIcon
                    variant="outline"
                    color={dark ? 'yellow' : 'blue'}
                    onClick={() => goToAnchor()}
                    title="Go to Top"
                >
                    <IconChevronUp size="1.1rem" />
                </ActionIcon>
                <Group spacing="sm" className={classes.links} position="right" noWrap>
                    <ActionIcon title="OFA Profile" size="lg" component="a" href="https://ofa.org/advanced-search/?appnum=2442877" target="_blank">
                        <IconDna size="1.35rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon title="Instagram" size="lg" component="a" href="https://www.instagram.com/vesela_5/" target="_blank">
                        <IconBrandInstagram size="1.25rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon title="TikTok" size="lg" component="a" href="https://www.tiktok.com/@vesela.videva" target="_blank">
                        <IconBrandTiktok size="1.25rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon title="Get in Touch" size="lg" component="a" href="mailto:vesela.videva@gmail.com" target="_blank">
                        <IconMail size="1.25rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}