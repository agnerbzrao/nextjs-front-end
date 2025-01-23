import Image from "next/image";
import styles from "./aside.module.scss";

import parceiroPrixLogo from "./parceiroPrixLogo.svg";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
      <Image src={parceiroPrixLogo} alt="Logo da Code Connect" />
    </aside>
  );
};
