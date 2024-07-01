import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import TableRow from "../TableRow/ui";
import styles from "./styles.module.scss";

const Table: React.FC = () => {
  const rows = useSelector((state: RootState) => state.table.rows);

  return (
    <table className={styles.table}>
      {rows.length > 0 && (
        <thead>
          <tr>
            <th id={styles.tableName}>Name</th>
            <th id={styles.tableValue}>Value</th>
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, index) => (
          <TableRow key={index} row={row} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
