import './section_2.css'
import Partenaires from '../Partenaires/Partenaires'
import Newsletter from '../Newsletter/Newsletter'
import {Footer} from '../Footer'


const Section_1 = () =>{

    return(

        <div className="soluc_ent_section2_containeur">
            <Partenaires/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}


export default Section_1