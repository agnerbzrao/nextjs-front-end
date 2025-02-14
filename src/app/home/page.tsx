"use client";
import { Aside } from "@/app/components/Aside";
import { Main } from "../components/main";
import styles from "./home.module.scss";
export default function HomePage() {
  return (
    <div className={styles.home}>
      <Aside />
      <Main />
    </div>
  );
}
