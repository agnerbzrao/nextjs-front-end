"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import AZURE_BLOB_URL from "@/app/config/blob";

export default function LoginPage() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const activeAccount = instance.getActiveAccount();

  const handleLoginMsal = () => {
    instance
      .loginRedirect({
        prompt: "create",
        scopes: [],
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div className={styles.containerLogin}>
      <div className={styles.leftColumn}>
        <Image
          src={`${AZURE_BLOB_URL}/front-end-images/login-page/bg_login.svg`}
          alt="multiplos-triangulos"
          width={0}
          height={0}
          className={styles.imgTriangulos}
        ></Image>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.rightContent}>
          <Image
            src={`${AZURE_BLOB_URL}/front-end-images/login-page/parceiroPrixLogo.svg`}
            alt="parceiro-prix-logo"
            width={0}
            height={0}
            className={styles.imgParceiroPrixLogo}
          ></Image>
          <button
            type="button"
            className={styles.buttonlogin}
            onClick={handleLoginMsal}
          >
            <span className={styles.jaSouParceiro}>Já sou parceiro Prix.</span>
            <span className={styles.entrar}>Entrar.</span>
            <Image
              src={`${AZURE_BLOB_URL}/front-end-images/login-page/exit_icon.svg`}
              alt="exit-icon"
              width={0}
              height={0}
              className={styles.exitIcon}
            ></Image>
          </button>

          <p className={styles.dificuldadesAcesso}>
            Está com dificuldades no seu acesso?&nbsp;
            <a
              href={`${AZURE_BLOB_URL}/documentos/tutorial-acesso-porta-parceiro-prix.pdf`}
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
            className={styles.textNotDecorated}
          >
            <button type="button" className={styles.buttonQueroSerParceiro}>
              <span>Quero ser um parceiro Prix</span>
              <Image
                src={`${AZURE_BLOB_URL}/front-end-images/login-page/star_icon.svg`}
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
    </div>
  );
}
