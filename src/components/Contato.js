import styles from "../components/Contato.module.css"
import foto from "../imagens/image_principal.png"
import subir from "../imagens/subir.png"

export default function Footer(){
    return(
        <div className={styles.principal}>
            <div className={styles.textos}>
                <h1 id="contato"><strong>Contato</strong></h1>
                <p className={styles.paragrafo1}>Tire todas as suas dúvidas ou envie suas sugestões para nossa equipe</p>
            </div>
            <div className={styles.form_img}>
                <img src={foto} className={styles.picture_body}></img>
                <div className={styles.campo}>
                    <form action="https://formspree.io/f/mvovednb" method="post">
                        <div className={styles.caixa}>
                            <input type="text" name="nome" placeholder="Nome" required></input>
                        </div>
                        <div className={styles.caixa}>
                            <input type="email" name="email" placeholder="E-mail" required></input>
                        </div>
                        <div className={styles.caixa}>
                            <input type="text" name="phone" placeholder="Telefone" required></input>
                        </div>
                        <div>
                            <textarea name="mensagem" placeholder="Mensagem" required></textarea>
                        </div>
                        <button className={styles.botao} type="submit">Enviar mensagem</button>
                    </form>
                </div>
            </div>
            <a href="#top"><img className={styles.botao_subir} src={subir}></img></a>
        </div>
    )
}
