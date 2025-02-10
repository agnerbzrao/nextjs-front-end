import Image from "next/image";
import styles from "./page.module.scss";
export default function LoginPage() {
  return (
    <>
      <div className={styles.leftColumn}>
        <Image
          src={`${process.env.NEXT_PUBLIC_AZURE_BLOB_URL}/front-end-images/login-page/bg_login.svg`}
          alt="multiplos-triangulos"
          width={0}
          height={0}
          className={styles.imgTriangulos}
        ></Image>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.rightContent}>
          <Image
            src={`${process.env.NEXT_PUBLIC_AZURE_BLOB_URL}/front-end-images/login-page/parceiroPrixLogo.svg`}
            alt="parceiro-prix-logo"
            width={0}
            height={0}
            className={styles.imgParceiroPrixLogo}
          ></Image>
          <button type="button" className={styles.buttonlogin}>
            <span className={styles.jaSouParceiro}>Já sou parceiro Prix.</span>
            <span className={styles.entrar}>Entrar.</span>
            <Image
              src={`${process.env.NEXT_PUBLIC_AZURE_BLOB_URL}/front-end-images/login-page/exit_icon.svg`}
              alt="exit-icon"
              width={0}
              height={0}
              className={styles.exitIcon}
            ></Image>
          </button>

          <p className={styles.dificuldadesAcesso}>
            Está com dificuldades no seu acesso?&nbsp;
            <a
              href={`${process.env.NEXT_PUBLIC_AZURE_BLOB_URL}/documentos/tutorial-acesso-porta-parceiro-prix.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Clique aqui.
            </a>
          </p>
          <br />
          <a
            href="https://www.toledobrasil.com/seja-um-parceiro"
            target="_blank"
            rel="noreferrer"
            style={{ textDecorationLine: "none" }}
          >
            <button type="button" className={styles.buttonQueroSerParceiro}>
              <span>Quero ser um parceiro Prix</span>
              <Image
                src={`${process.env.NEXT_PUBLIC_AZURE_BLOB_URL}/front-end-images/login-page/star_icon.svg`}
                alt="star-icon"
                width={0}
                height={0}
                className={styles.starIcon}
              />
            </button>
          </a>
          <a
            href="/api/acesso/oidc/login"
            className={styles.linkAcessoColaborador}
          >
            <span>Acesso para colaborador Toledo do Brasil</span>
          </a>
        </div>
      </div>
    </>
  );
}
