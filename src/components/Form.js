import './Form.css'; 

const Form = () => {

    return(
        <section id="form">
            <div className="content-section-form">
                <h2>Vous êtes entreprise ? Nous vous recontactons dès que possible</h2>
                <form action="">
                    <div class="input">
                        <div className="input-mid-width">
                            <div class="input-flex">
                                <div>
                                    <label htmlFor="nom"></label>
                                    <input type="text" name="nom" placeholder="Nom*" required />
                                </div>
                                <div>
                                    <label htmlFor="prenom"></label>
                                    <input type="text" name="prenom" placeholder="Prénom*" required />
                                </div>
                            </div>
                            <div class="input-flex">
                                <div>
                                    <label htmlFor="codepostal"></label>
                                    <input type="number" name="codepostal" placeholder="Code postal*" required />
                                </div>
                                <div>
                                    <label htmlFor="tel"></label>
                                    <input type="tel" name="tel" placeholder="Téléphone portable*" required />
                                </div>
                            </div>
                        </div>
                        <div class="input-full-width">
                            <div>
                                <label htmlFor="codepostalentreprise"></label>
                                <input type="number" name="codepostalentreprise" placeholder="Code postal entreprise*" required />
                            </div>
                            <div>
                                <label htmlFor="domaine-activite"></label>
                                <input type="text" name="domaine-activite" placeholder="Domaine d'activité*" required />
                            </div>
                            <div>
                                <label htmlFor="mail"></label>
                                <input type="email" name="email" placeholder="Adresse mail*" required />
                            </div>
                            <div>
                                <label for="choice">Objet de la demande : </label>
                                <select name="choice" id="choice">
                                    <option value="choix1">Objet de votre demande</option>
                                    <option value="choix2">choix2</option>
                                    <option value="choix3">choix3</option>
                                </select>
                            </div>
                            <div class="champs-obligatoire"> *Champs obligatoire </div>
                            <button>Découvir Linkpink</button>
                            <p class="en-savoir-plus"> En savoirs plus sur la collecte de vos données personelles </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form;