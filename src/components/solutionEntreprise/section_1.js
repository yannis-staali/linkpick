import './section_1.css'
import done_img from '../../images/done_black.png'

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
                    partie droite
                </div>

            </div>
      
        </div>
    )
}


export default Section_1