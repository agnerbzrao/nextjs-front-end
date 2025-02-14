import Image from "next/image";
import styles from "./aside.module.scss";

// import parceiroPrixLogo from "./parceiroPrixLogo.svg";
const AZURE_BLOB_URL = process.env.NEXT_PUBLIC_AZURE_BLOB_URL;
export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image
        alt="parceiro-prix-logo"
        src={`${AZURE_BLOB_URL}/front-end-images/login-page/parceiroPrixLogo.svg`}
        width={0}
        height={0}
        className={styles.imgParceiroPrixLogo}
      />
    </aside>
  );
};
