import Image from "next/image";
import styles from "./main.module.scss";
import AZURE_BLOB_URL from "@/app/config/blob";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.headerMain}>
        <div className={styles.headerMainLevelOneLeft}>
          <div className={styles.headerMainLevelTwoLeftName}>
            <p className={styles.olaName}>Olá,</p>
            <p className={styles.userName}>User Name</p>
          </div>
          <div className={styles.headerMainLevelTwoRightButtonLogout}>
            <Image
              src={`${AZURE_BLOB_URL}/front-end-images/login-page/exit_icon.svg`}
              alt="multiplos-triangulos"
              width={0}
              height={0}
              className={styles.imgTriangulos}
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.headerMainLevelOneRight}></div>
    </main>
  );
};
