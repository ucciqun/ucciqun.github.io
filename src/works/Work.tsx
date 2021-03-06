import React from "react";
import styles from "./Work.module.css";

import Badge from "../atoms/Badge";
import { Divider } from "@material-ui/core";

interface WorkProps {
  icon: string;
  title: string;
  badge: string[];
  description: string;
  picture?: string;
  image: string[];
  createdAt: string;
  color: string;
}
const Work: React.FC<WorkProps> = ({
  icon,
  title,
  badge,
  description,
  picture,
  image,
  createdAt,
  color,
}) => {
  return (
    <div id={title}>
      <img
        src={picture}
        alt=""
        className={styles.mediaPC}
        style={{
          position: "absolute",
          width: 300,
          right: 10,
          // filter: "blur(4px)",
        }}
      />
      <div className={styles.card}>
        <div className={styles.main}>
          <img src={icon} alt="" className={styles.icon} />
          <div className={styles.detail}>
            <div className={styles.titleAndCreatedAt}>
              <div className={styles.iconAndTitle}>
                <img src={icon} alt="" className={styles.iconSSP} />
                <h2 className={styles.title} style={{ color: color }}>
                  {title}
                </h2>
              </div>
              <p className={styles.createdAt}>{`createdAt ${createdAt}`}</p>
            </div>
            <div className={styles.badgeContainer}>
              {badge.map((d, i) => (
                <Badge title={d} color="orange" key={i} />
              ))}
            </div>
            <p className={`${styles.description} ${styles.mediaPC}`}>
              {description}
            </p>
          </div>
        </div>
        <p className={`${styles.description} ${styles.mediaSP}`}>
          {description}
        </p>
        <Divider />
        <div className={styles.images}>
          {image.map((d, i) => (
            <img src={d} alt="" className={styles.image} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
