import React, { useState } from "react";
import styles from "./styles.module.scss";

function Random6Groups({ data, changePageStatus }) {
  const [selectedList, setSelectedList] = useState([]);
  const renderValues = (values) =>
    values.map((value) => (
      <div className={styles.item} key={value.index}>
        <div className={`${styles.itemWrapper}`}>
          <span
            className={`${
              selectedList.includes(value.index) ? styles.selected : ""
            }`}
            onClick={() => handleSelectValue(value)}
          >
            {value.name}
          </span>
        </div>
      </div>
    ));
  const renderData = () =>
    data.map((item) => (
      <div className={styles.groupsWrapper} key={item.primaryIndex}>
        <div className={styles.item}>
          <div className={`${styles.itemWrapper} ${styles.index}`}>
            <span>{item.primaryIndex}</span>
          </div>
        </div>
        {renderValues(item.values)}
      </div>
    ));

  const handleSelectValue = (value) => {
    const foundInSelectedList = selectedList.indexOf(value.index);
    const cloneSelectedList = [...selectedList];

    if (foundInSelectedList >= 0) {
      cloneSelectedList.splice(foundInSelectedList, 1);
      setSelectedList(cloneSelectedList);
    } else {
      if (selectedList.length === 6) return alert("The selection is full!");

      setSelectedList((prevState) => [...prevState, value.index]);
    }
  };

  const handleChangePageStatus = () => {
    changePageStatus(0);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Confirm your seed phrased?</h3>
        {selectedList.length !== 0 && <span>{selectedList.length}/6</span>}
      </div>
      <div className={styles.list}>{renderData()}</div>
      <div className={styles.action}>
        <button onClick={handleChangePageStatus}>Back</button>
      </div>
    </div>
  );
}

export default Random6Groups;
