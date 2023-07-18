import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title={dark ? 'Switch to Light' : 'Switch to Dark'}
        >
            {dark ? <IconSun size="1.1rem" /> : <IconMoon size="1.1rem" />}
        </ActionIcon>
    );
}