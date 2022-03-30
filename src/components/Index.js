import React from 'react';
import Section1 from './landing/Section_1';
import Section3 from './landing/Section3';
import Section4 from './landing/Section_4';
import {Footer} from './Footer';
import Section_2 from './landing/Section_2';
import Partenaires from './Partenaires/Partenaires';
import Newsletter from './Newsletter/Newsletter';

function Index() {
    return (
    <div>
        <Section1/>
        <Section_2/>
        <Section3/>
        <Section4/>
        <Partenaires/>
        <Newsletter />
        <Footer/>
    </div>
    )
}

export default Index