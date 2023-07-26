import React from 'react';
import './App.css';
import { HeaderMiddle } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Anchor, Text } from "@mantine/core";

function App() {
    return (
        <div className="App">
            <Text id="gototop">
                <Anchor href="#gototop" aria-hidden="true"></Anchor>
            </Text>
            <HeaderMiddle links={[
                { link: '#pedigree', label: 'Pedigree' },
                { link: '#health', label: 'Health' },
                { link: '#shows', label: 'Shows' },
                { link: '#titles', label: 'Titles' },
            ]}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
