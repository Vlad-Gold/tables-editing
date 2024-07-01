import React, { useState } from "react";
import Table from "../Table/ui";
import TableJsonArea from "../JsonArea/ui";
import AddRow from "../AddRow/ui";
import styles from "./styles.module.scss";

const TableEditor: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>("");

  return (
    <div className={styles.container}>
      <Table />
      <TableJsonArea jsonInput={jsonInput} setJsonInput={setJsonInput} />
      <AddRow />
    </div>
  );
};

export default TableEditor;
