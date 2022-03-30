import React from 'react';
import './Partenaires.css'
import Svg1 from "../../images/partenaires/6nr9r4ucnji06ndx.svg"
import Svg2 from "../../images/partenaires/french-tech.svg"
import Svg3 from "../../images/partenaires/Groupe_2771.svg"
import Svg4 from "../../images/partenaires/sc0mlo39z05d8nje.svg"
import Svg5 from "../../images/partenaires/1jeune1solution.svg"

function Partenaires() {

    return (
        <section>
            <div className='title_container'>
                <h1>Nos partenaires institutionnels</h1>
            </div>
            <div className='partenaires_container'>
                <img src={Svg3} alt="" />
                <img src={Svg1} alt="" />
                <img src={Svg4} alt="" />
                <img src={Svg2} alt="" />
                <img src={Svg5} alt="" />
            </div>
        </section>
    )
}
export default Partenaires