import React from "react";
import styles from "../../assets/styles/fof/Fourzerofour.module.css";
export default function Not_Found() {
  const { container, fourzerofour } = styles;
  return (
    <div className={container}>
      <div className={fourzerofour}>
        <h1>404</h1>
        <p>page not found</p>
      </div>
    </div>
  );
}
