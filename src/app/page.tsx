import Image from "next/image";
import styles from "./page.module.scss";
export default function LoginPage() {
  console.log(process.env.NEXT_PUBLIC_AZURE_BLOB_URL);
  return (
    <>
      <Image
        src={`${process.env.NEXT_PUBLIC_AZURE_BLOB_URL}/front-end-images/login-page/bg_login.svg`}
        alt="multiplos-triangulos"
        width={0}
        height={0}
        className={styles.imgTriangulos}
      ></Image>
      <div className={styles.rightColumn}>
        <div className={styles.rightContent}>
          <Image
            src={`${process.env.NEXT_PUBLIC_AZURE_BLOB_URL}/front-end-images/login-page/parceiroPrixLogo.svg`}
            alt="parceiro-prix-logo"
            width={100}
            height={100}
            className={styles.imgParceiroPrixLogo}
          ></Image>
          <button type="button" className={styles.buttonlogin}>
            <span>Já sou parceiro Prix.</span>
            <span>Entrar.</span>
          </button>

          <p style={{ color: "white", textAlign: "center" }}>
            Está com dificuldades no seu acesso?&nbsp;
            <a
              style={{ color: "white", textDecorationLine: "underline" }}
              href={`${process.env.NEXT_PUBLIC_AZURE_BLOB_URL}/documentos/tutorial-acesso-porta-parceiro-prix.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Clique aqui.
            </a>
          </p>
          <br />
          <a
            style={{ width: "100%" }}
            href="https://www.toledobrasil.com/seja-um-parceiro"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <span>Quero ser um parceiro Prix</span>
              <Image
                src={`${process.env.NEXT_PUBLIC_AZURE_BLOB_URL}/front-end-images/login-page/star_icon.svg`}
                alt="star-icon"
                width={100}
                height={100}
                style={{ marginLeft: 20, width: 30 }}
              />
            </button>
          </a>
          <a href="/api/acesso/oidc/login">
            <span>Acesso para colaborador Toledo do Brasil</span>
          </a>
        </div>
      </div>
    </>
  );
}
