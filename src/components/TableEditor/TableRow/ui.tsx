import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editRow,
  deleteRow,
  moveRowUp,
  moveRowDown,
} from "../../../store/tableSlice";
import styles from "./styles.module.scss";
import { ITableRow } from "./types";

const TableRow: React.FC<ITableRow> = ({ row, index }) => {
  const dispatch = useDispatch();
  const [editingRowName, setEditingRowName] = useState<number | null>(null);
  const [editingRowValue, setEditingRowValue] = useState<number | null>(null);

  const handleEditRow = (index: number, key: string, value: string) => {
    dispatch(editRow({ index, key, value }));
  };

  const handleDeleteRow = (index: number) => {
    dispatch(deleteRow(index));
  };

  const handleMoveRowUp = (index: number) => {
    dispatch(moveRowUp(index));
  };

  const handleMoveRowDown = (index: number) => {
    dispatch(moveRowDown(index));
  };

  return (
    <tr key={index}>
      <td className={styles.edit}>
        <input
          type="text"
          value={row.name}
          onChange={(e) => handleEditRow(index, "name", e.target.value)}
          disabled={editingRowName !== index}
        />
        <button
          onClick={() =>
            setEditingRowName(editingRowName === index ? null : index)
          }
        >
          {editingRowName === index ? "Save" : "Edit"}
        </button>
      </td>
      <td className={styles.edit}>
        <input
          type="text"
          value={row.value}
          onChange={(e) => handleEditRow(index, "value", e.target.value)}
          disabled={editingRowValue !== index}
        />
        <button
          onClick={() =>
            setEditingRowValue(editingRowValue === index ? null : index)
          }
        >
          {editingRowValue === index ? "Save" : "Edit"}
        </button>
      </td>
      <td className={styles.arrowButtons}>
        <button onClick={() => handleMoveRowUp(index)}>↑</button>
        <button onClick={() => handleMoveRowDown(index)}>↓</button>
        <button
          className={styles.deleteButton}
          onClick={() => handleDeleteRow(index)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
