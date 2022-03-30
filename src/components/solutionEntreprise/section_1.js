import './section_1.css'
import done_img from '../../images/done_black.png'
<<<<<<< HEAD
import etudiante from '../../images/Etudiante.png'
import brasEtudiante from '../../images/Bras étudiante.png'
import Form from '../Form'
=======
>>>>>>> 23e0a0e5a497a8eb41e19891425e2666cdac759f

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
<<<<<<< HEAD
                    <img className='soluc_ent_section1_partie_droite_img_etudiante' src={etudiante}/>
                    <img className='soluc_ent_section1_partie_droite_img_bras_etudiante' src={brasEtudiante}/>
                    <Form/>
=======
                    partie droite
>>>>>>> 23e0a0e5a497a8eb41e19891425e2666cdac759f
                </div>

            </div>
      
        </div>
    )
}


export default Section_1