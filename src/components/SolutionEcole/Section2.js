import './Section1.css'
import EnQuelquesClicks from '../EnQuelquesClics/EnQuelquesClicks'
import Competences from '../../images/ecole/Mes compétences personnelles.svg'
import Screen from '../../images/ecole/Groupe 2945.svg'

const Section2 = () => {

    return (
        <div className="section1_3 section1_1">
            <EnQuelquesClicks />
            <div className='containerImg'>
                <img src={Competences} alt=""/>
                <img src={Screen} alt=""/>
            </div>
        </div>
    )
}


export default Section2