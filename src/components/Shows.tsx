import React from "react";
import {Timeline, Text, Container, Grid, Space, Anchor, SimpleGrid, ThemeIcon} from '@mantine/core';
import { IconTrophy } from '@tabler/icons-react';

export function Shows() {
    return (
        <Container size="xl">
            <Text id="shows" fz="xl" align="center" className="section-title">
                Shows
                <Anchor href="#shows" aria-hidden="true"></Anchor>
            </Text>
            <Space h="xl" />
            <Space h="xl" />
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <Timeline active={-1} bulletSize={40} lineWidth={1} align="left">
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CAC The DOG Show – Parvomay, BULGARIA">
                        <Text color="dimmed" size="md">16.10.2021 - Puppy class</Text>
                        <Text color="dimmed" size="md">Very Promising, Puppy BOB, R.BIS Puppy</Text>
                        <Text color="dimmed" size="md">Judge: George Trevor Hiscock (South Africa)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CAC The DOG Show – Parvomay, BULGARIA">
                        <Text color="dimmed" size="md">17.10.2021 - Puppy class</Text>
                        <Text color="dimmed" size="md">Very Promising, Puppy BOB, BIS Puppy 4</Text>
                        <Text color="dimmed" size="md">Judge: Peter Kujumdjiev (Bulgaria)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="Amstaff Major 2022 - Szilvasvarad, HUNGARY">
                        <Text color="dimmed" size="md">16.04.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Very good</Text>
                        <Text color="dimmed" size="md">Judge: Patrik Cederlöf (Sweden)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="Royal Cup AST Speciality - Kraljevo, SERBIA">
                        <Text color="dimmed" size="md">30.04.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 2, R.JCACS</Text>
                        <Text color="dimmed" size="md">Judge: Savvas Shiapanis (Cyprus)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CAC - Kraljevo, SERBIA">
                        <Text color="dimmed" size="md">30.04.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 2, R.JCAC</Text>
                        <Text color="dimmed" size="md">Judge: Peter Lauber (Switzerland)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB - Vranje, SERBIA">
                        <Text color="dimmed" size="md">01.05.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, JBOB</Text>
                        <Text color="dimmed" size="md">Judge: Dejan Gujanicic (Serbia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB - Niš, SERBIA">
                        <Text color="dimmed" size="md">08.05.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, JBOB</Text>
                        <Text color="dimmed" size="md">Judge: Dragan Krstić (Serbia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="Naissa Terrier Show AST Speciality - Niš, SERBIA">
                        <Text color="dimmed" size="md">08.05.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 3</Text>
                        <Text color="dimmed" size="md">Judge: Alin Dumitrescu (Romania)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB - Skopje, NORTH MACEDONIA">
                        <Text color="dimmed" size="md">21.05.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, JBOB, R.BIS Junior</Text>
                        <Text color="dimmed" size="md">Judge: Livija Zizevske (Lithuania)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CAC - Skopje, NORTH MACEDONIA">
                        <Text color="dimmed" size="md">22.05.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, JBOB</Text>
                        <Text color="dimmed" size="md">Judge: Igoris Zizevskis (Lithuania)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB - Skopje, NORTH MACEDONIA">
                        <Text color="dimmed" size="md">22.05.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, JBOB</Text>
                        <Text color="dimmed" size="md">Judge: Oliver Simon (Croatia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB - Skopje, NORTH MACEDONIA">
                        <Text color="dimmed" size="md">23.05.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, JBOB, BIS Junior 3</Text>
                        <Text color="dimmed" size="md">Judge: Milivoje Urosevic (Serbia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB - Thessaloniki, GREECE">
                        <Text color="dimmed" size="md">18.06.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, JBOB</Text>
                        <Text color="dimmed" size="md">Judge: Antonio Mracevic (Montenegro)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB - Thessaloniki, GREECE">
                        <Text color="dimmed" size="md">19.06.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, JBOB, BOS</Text>
                        <Text color="dimmed" size="md">Judge: Calin Mitra Valentin (Romania)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CAC - Thessaloniki, GREECE">
                        <Text color="dimmed" size="md">19.06.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, JBOB, BOS</Text>
                        <Text color="dimmed" size="md">Judge: Suncica Lazic (Serbia)</Text>
                    </Timeline.Item>
                </Timeline>

                <Timeline active={-1} bulletSize={36} lineWidth={1} align="left">
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CAC – Ploiesti, ROMANIA">
                        <Text color="dimmed" size="md">16.07.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 2, R.JCAC</Text>
                        <Text color="dimmed" size="md">Judge: Jeff Horswell (United Kingdom)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB – Ploiesti, ROMANIA">
                        <Text color="dimmed" size="md">16.07.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 2, R.JCAC</Text>
                        <Text color="dimmed" size="md">Judge: Tino Pehar (Croatia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB – Ploiesti, ROMANIA">
                        <Text color="dimmed" size="md">17.07.2022 - Junior class</Text>
                        <Text color="dimmed" size="md">Excellent 1, JCAC, BOS</Text>
                        <Text color="dimmed" size="md">Judge: George Schogol (Georgia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="NDS – Plovdiv, BULGARIA">
                        <Text color="dimmed" size="md">05.11.2022 - Intermedia class</Text>
                        <Text color="dimmed" size="md">Excellent 1, CW, BOB, BOG 3</Text>
                        <Text color="dimmed" size="md">Judge: Trevor Hiscock (South Africa)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="NDS – Plovdiv, BULGARIA">
                        <Text color="dimmed" size="md">06.11.2022 - Intermedia class</Text>
                        <Text color="dimmed" size="md">Excellent 1, CW, BOB, BOG 3</Text>
                        <Text color="dimmed" size="md">Judge: Zlatko Jojkic (Serbia)</Text>
                    </Timeline.Item>
                </Timeline>

                <Timeline active={-1} bulletSize={36} lineWidth={1} align="left">
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="Amstaff Major 14th – Andrevlje, SERBIA">
                        <Text color="dimmed" size="md">29.04.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Very good</Text>
                        <Text color="dimmed" size="md">Judge: Olaf Verhorevoort (Netherlands)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="Amstaff Major 15th – Andrevlje, SERBIA">
                        <Text color="dimmed" size="md">30.04.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Excellent 2, R.CACS</Text>
                        <Text color="dimmed" size="md">Judge: Bob Busby (USA)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB - Vranje, SERBIA">
                        <Text color="dimmed" size="md">01.05.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Excellent 1, CAC, CACIB</Text>
                        <Text color="dimmed" size="md">Judge: Dalibor Antić (Serbia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="XIII DERBY AST Speciality – Indjija, SERBIA">
                        <Text color="dimmed" size="md">13.05.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Excellent 4</Text>
                        <Text color="dimmed" size="md">Judge: Piergiorgio Lievore (Italy)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="10-breed EDS – Budapest, HUNGARY">
                        <Text color="dimmed" size="md">03.06.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Very good 8 / 13 entries</Text>
                        <Text color="dimmed" size="md">Judge: Connie Clark (USA)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="Karakan Club Show – Budapest, HUNGARY">
                        <Text color="dimmed" size="md">04.06.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Excellent 4</Text>
                        <Text color="dimmed" size="md">Judge: Billie Kellog Kneale (USA)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB – Thessaloniki, GREECE">
                        <Text color="dimmed" size="md">10.06.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Excellent 1, R.CAC, R.CACIB</Text>
                        <Text color="dimmed" size="md">Judge: Julija Aidietiene (Lithuania)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB – Thessaloniki, GREECE">
                        <Text color="dimmed" size="md">11.06.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Excellent 1, CAC, CACIB, BOB, BOG</Text>
                        <Text color="dimmed" size="md">Judge: Sissi Adramitli (Greece)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CAC – Pirot, SERBIA">
                        <Text color="dimmed" size="md">01.07.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Excellent 1, CAC, BOB, BOG</Text>
                        <Text color="dimmed" size="md">Judge: Olivera Stojanovic (Serbia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CAC – Aleksinac, SERBIA">
                        <Text color="dimmed" size="md">22.07.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Excellent 1, CAC, BOS</Text>
                        <Text color="dimmed" size="md">Judge: Nenad Matejevic (Serbia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB – Sokobanja, SERBIA">
                        <Text color="dimmed" size="md">22.07.2023 - Open class</Text>
                        <Text color="dimmed" size="md">Excellent 2, R.CAC, R.CACIB</Text>
                        <Text color="dimmed" size="md">Judge: Marija Radovanović (Serbia)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB – Ohrid, NORTH MACEDONIA">
                        <Text color="dimmed" size="md">31.08.2023 - Champion class</Text>
                        <Text color="dimmed" size="md">...</Text>
                        <Text color="dimmed" size="md">Judge: ... (...)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB – Ohrid, NORTH MACEDONIA">
                        <Text color="dimmed" size="md">01.09.2023 - Champion class</Text>
                        <Text color="dimmed" size="md">...</Text>
                        <Text color="dimmed" size="md">Judge: ... (...)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB – Chalkidiki, GREECE">
                        <Text color="dimmed" size="md">09.09.2023 - ... class</Text>
                        <Text color="dimmed" size="md">...</Text>
                        <Text color="dimmed" size="md">Judge: ... (...)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={<ThemeIcon variant="light" size={40} radius={40}><IconTrophy size="1.3rem" stroke={1}/></ThemeIcon>}
                        title="CACIB – Chalkidiki, GREECE">
                        <Text color="dimmed" size="md">10.09.2023 - ... class</Text>
                        <Text color="dimmed" size="md">...</Text>
                        <Text color="dimmed" size="md">Judge: ... (...)</Text>
                    </Timeline.Item>
                </Timeline>
            </SimpleGrid>
        </Container>
    );
}