import React from "react";
import styles from "./styles.module.scss";

function Random24Items({ data, changePageStatus }) {
  const renderData = () =>
    data.map((item) => (
      <div className={styles.item} key={item.index}>
        <div className={styles.itemWrapper}>
          <span className={styles.index}>{item.index + 1}</span>
          <span className={styles.name}>{item.name}</span>
        </div>
      </div>
    ));

  const handleChangePageStatus = () => {
    changePageStatus(1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Auto gen seed phrased?</h3>
      </div>
      <div className={styles.list}>{renderData()}</div>
      <div className={styles.action}>
        <button onClick={handleChangePageStatus}>Next</button>
      </div>
    </div>
  );
}

export default Random24Items;
