import './section_1.css'
import done_img from '../../images/done_black.png'
import etudiante from '../../images/Etudiante.png'
import brasEtudiante from '../../images/Bras étudiante.png'
import hommeSolution from '../../images/homme_solution_entreprise.png'
import femmeSolution from '../../images/femme_solution_entreprise.png'
import Form from '../Form'


const Section_1 = () =>{

    return(

        <div className="soluc_ent_section1_containeur">
            <div className='soluc_ent_section1_containeur_secondaire'>
                <div className='soluc_ent_section1_partie_gauche_containeur'>
                    <div  className='soluc_ent_section1_partie_gauche_contenu'> 
                        <h1  className='soluc_ent_section1_partie_gauche_contenu_h1'>
                           <span>Recrutez et accompagnez</span><br/>
                            facilement vos futurs talents
                        </h1>
                        <h2 className='soluc_ent_section1_partie_gauche_contenu_h2'>
                            <span>Equipez-vous de Linkpick et</span><br/>
                            gérez vos documents facilement
                        </h2>
                        <ul className='soluc_ent_section1_partie_gauche_contenu_liste'>
                            <li>
                                <img src={done_img}/>
                                <p>- Un haut niveau de protection des données privées</p>
                            </li>
                            <li>
                                <img src={done_img}/>
                                <p>- Un haut niveau de protection des données privées</p>
                            </li>
                            <li>
                                <img src={done_img}/>
                                <p>- Un haut niveau de protection des données privées</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* --------partie pour le formulaire */}
                <div className='soluc_ent_section1_partie_droite_containeur'>
                    <img className='soluc_ent_section1_partie_droite_img_etudiante' src={etudiante}/>
                    <img className='soluc_ent_section1_partie_droite_img_bras_etudiante' src={brasEtudiante}/>
                    <img className='soluc_ent_section1_partie_droite_img_homme' src={hommeSolution}/>
                    <img className='soluc_ent_section1_partie_droite_img_femme' src={femmeSolution}/>
                    <Form/>
                </div>

            </div>
      
        </div>
    )
}


export default Section_1