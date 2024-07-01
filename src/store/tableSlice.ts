import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TableRow {
  name: string;
  value: string;
}

interface TableState {
  rows: TableRow[];
}

const initialState: TableState = {
  rows: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<TableRow>) => {
      state.rows.push(action.payload);
    },
    editRow: (
      state,
      action: PayloadAction<{ index: number; key: string; value: string }>
    ) => {
      const { index, key, value } = action.payload;
      if (key === "name") {
        state.rows[index].name = value;
      } else if (key === "value") {
        state.rows[index].value = value;
      }
    },
    deleteRow: (state, action: PayloadAction<number>) => {
      state.rows.splice(action.payload, 1);
    },
    moveRowUp: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index > 0) {
        const temp = state.rows[index - 1];
        state.rows[index - 1] = state.rows[index];
        state.rows[index] = temp;
      }
    },
    moveRowDown: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index < state.rows.length - 1) {
        const temp = state.rows[index + 1];
        state.rows[index + 1] = state.rows[index];
        state.rows[index] = temp;
      }
    },
    loadRows: (state, action: PayloadAction<TableRow[]>) => {
      state.rows = action.payload;
    },
  },
});

export const {
  addRow,
  editRow,
  deleteRow,
  moveRowUp,
  moveRowDown,
  loadRows,
} = tableSlice.actions;

export default tableSlice.reducer;
