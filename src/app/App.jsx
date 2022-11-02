import styles from "./styles.module.scss";
import "./App.css";
import Random24Items from "components/Random24Items";
import jsonFile from "assets/jsonFile.json";
import randomItem from "common/utils/randomItem";
import { useCallback, useState } from "react";
import Random6Groups from "components/Random6Groups";

function App() {
  const [pageStatus, setPageStatus] = useState(0);
  const { items, groups } = randomItem(jsonFile);

  const cbSetPageStatus = useCallback((value) => setPageStatus(value), []);

  return (
    <div className="App">
      <div className={styles.container}>
        {pageStatus === 0 ? (
          <Random24Items data={items} changePageStatus={cbSetPageStatus} />
        ) : (
          <Random6Groups data={groups} changePageStatus={cbSetPageStatus} />
        )}
      </div>
    </div>
  );
}

export default App;
