import React from 'react';
import './App.css';
import { HeaderMiddle } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {
    return (
        <div className="App">
            <HeaderMiddle links={[
                {link: '/pedigree', label: 'Pedigree'},
                {link: '/shows', label: 'Shows'},
                {link: '/health', label: 'Health'}
            ]}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
