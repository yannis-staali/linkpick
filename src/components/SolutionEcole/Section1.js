import './Section1.css'
import Form from '../Form'

const Section1 = () => {

    return (
        <div className="section1">
            <Form />
            <div className='section1_container'>
                <h1 className='section_h2'>
                    Recrutez et accompagnez <br/>
                    <span className='section_h1'>
                        facilement vos futurs talents
                    </span>
                </h1>
                <h3 className='section_subtitle_blue'>
                    Equipez-vous de Linkpick et <br/>
                    <span className='section_subtitle_lightblue'>
                        gérez vos documents facilement
                    </span>
                </h3>
                <ul className='section1_list'>
                    <li>
                        Un haut niveau de protection des données privée
                    </li>
                    <li>
                        Une selection des meilleurs profils selon vos besoins
                    </li>
                    <li>
                        Un accompagnement personnalisé
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Section1