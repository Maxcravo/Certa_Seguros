import React from "react"
import styles from "../components/Rodape.module.css"
import whats from "../imagens/whatsappimage.png"
import insta from "../imagens/instagramimage.png"
import face from "../imagens/face.png"

export default function Rodapepage() {
  return(


  <footer className={styles.cordefundo}>
    <h4>Certa Corretora de Seguros Ltda. Todos os direitos reservados. 2021.</h4>
    <div className={styles.contato_rodape}>
      <p>(21) 9 7949-1819 <br></br>(21) 9 8325 2114</p>
      <div className={styles.icone}>
        <ul className={styles.imagens_rodape}>
          <li>
            <a href="https://wa.me/5521983252114"> <img alt='whatssap_image' className={styles.what} src={whats}></img> </a>
          </li> 
          <li>
            <a href="https://www.facebook.com/certacorretora/ "> <img  alt='facebook_img' className={styles.faceimg} src={face}></img> </a>
          </li>
          <li>
            <a href="https://www.instagram.com/certa.seguros/ "> <img   alt='instagram_img' className={styles.instag} src={insta}></img> </a>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.assinatura}>
      <a className={styles.assin_texto} href="https://www.signaljunior.com.br/">Made by &copy;Signal Junior</a>
    </div>
  </footer>
  )
}

