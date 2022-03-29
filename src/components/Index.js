import React from 'react';
import Section1 from './landing/Section_1';
import Section4 from './landing/Section_4';
import {Footer} from './Footer';
import Section3 from './landing/Section3';

function Index() {
    return (
    <div>
        <Section1 />
        <Section3/>
        <Section4 />
        <Footer />
    </div>
    )
}

export default Index