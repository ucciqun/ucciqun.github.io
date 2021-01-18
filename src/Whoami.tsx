import { Divider, IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import styles from "./Whoami.module.css";

const Whoami = () => {
  return (
    <>
      <h2 className={styles.title}>WHO AM I</h2>
      <Divider style={{ backgroundColor: "white" }} />

      <p className={styles.description}>
        東京工業大学 情報理工学院
        数理計算科学系でComputerScienceを学んでいる学生です。
        <br />
        web技術、デザイン、人間拡張(Human Augmentation)にも興味を持っています。
      </p>
      <div className={styles.glassMorphism}>
        <div className={styles.snsIconContainer}>
          <div>
            <IconButton
              style={{ color: "skyblue" }}
              href="https://twitter.com/xxUCQxx"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
          </div>
          <IconButton
            href="https://github.com/ucciqun"
            target="_blank"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <GitHubIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Whoami;
