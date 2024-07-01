import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { loadRows } from "../../../store/tableSlice";
import styles from "./styles.module.scss";
import { ITableJsonArea } from "./types";

const TableJsonArea: React.FC<ITableJsonArea> = ({
  jsonInput,
  setJsonInput,
}) => {
  const dispatch = useDispatch();
  const rows = useSelector((state: RootState) => state.table.rows);

  const handleLoad = () => {
    try {
      const parsedRows = JSON.parse(jsonInput);
      if (
        Array.isArray(parsedRows) &&
        parsedRows.every((row) => row.name && row.value)
      ) {
        dispatch(loadRows(parsedRows));
      } else {
        alert("Incorrect JSON :(");
      }
    } catch (e) {
      alert("Incorrect JSON :(");
    }
  };

  const handleSave = () => {
    if (rows.length > 0) {
      const jsonRows = JSON.stringify(rows);
      setJsonInput(jsonRows);
    } else {
      alert("Nothing to save :(");
    }
  };

  const handleClear = () => {
    setJsonInput("");
    dispatch(loadRows([]));
  };

  return (
    <div className={styles.jsonAreaWrapper}>
      <label className={styles.label} htmlFor="json-area">
        TextArea
      </label>
      <textarea
        className={styles.jsonArea}
        id="json-area"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='[ { "name": "name2", "value": "value2" } ]'
      />
      <div className={styles.editingButtons}>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleLoad}>Load</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default TableJsonArea;
