import React, { useState } from 'react';
import { createStyles, Header, Group, Container, Burger, rem, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ThemeToggle } from "./utils/ThemeSwitch";

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: rem(56),

        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'flex-start',
        },
    },

    links: {
        width: rem(290),

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    social: {
        width: rem(290),

        [theme.fn.smallerThan('sm')]: {
            width: 'auto',
            marginLeft: 'auto',
        },
    },

    burger: {
        marginRight: theme.spacing.md,

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface HeaderMiddleProps {
    links: { link: string, label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState('');
    const { classes, cx } = useStyles();

    const goToAnchor = (link: string) => {
        window.location.href = link;
    };

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                goToAnchor(link.link);
            }}
        >
            { link.label }
        </a>
    ));

    return (
        <Header height={56} mb={120}>
            <Container className={classes.inner} size="xl">
                <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
                <Group className={classes.links} spacing={5}>
                    { items }
                </Group>
                <Text fz="xl" align="center" className="logo-title">
                    EL TORO VALIENTE
                </Text>
                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ThemeToggle />
                </Group>
            </Container>
        </Header>
    );
}