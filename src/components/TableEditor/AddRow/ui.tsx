import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRow } from "../../../store/tableSlice";
import styles from "./styles.module.scss";

const AddRow: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleAddRow = () => {
    if (name && value) {
      dispatch(addRow({ name, value }));
      setName("");
      setValue("");
    } else {
      alert("Both name and value are required.");
    }
  };

  return (
    <div className={styles.addRow}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default AddRow;
