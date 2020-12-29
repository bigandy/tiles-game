import { useState, useMemo } from "react";

import Cell from "../Cell";

import randomFromRange from "../../utils/randomFromRange";

const Cells = (props) => {
  const { columns, rows } = props;

  const totalCells = useMemo(() => {
    return rows * columns;
  }, [rows, columns]);

  const initialNumber = useMemo(() => randomFromRange(0, totalCells - 1), [
    totalCells,
  ]);

  const [activeCell, setActiveCell] = useState(initialNumber);

  const handleClick = (cell) => {
    if (checkIfCanActivate(cell)) {
      setActiveCell(cell);
    }
  };

  const checkIfCanActivate = (cell) => {
    if (cell === activeCell) {
      return;
    }

    const finalRow = totalCells - columns;
    const firstRow = columns;

    if (activeCell <= firstRow && cell === activeCell + columns) {
      console.log("first row");
      return true;
    } else if (activeCell >= finalRow && cell === activeCell - columns) {
      console.log("final row");
      return true;
    } else if (
      (activeCell >= firstRow &&
        activeCell <= finalRow &&
        cell === activeCell - columns) ||
      cell === activeCell + columns
    ) {
      console.log("middle row");
      return true;
    }

    const cellRemainder = cell % columns;

    console.log("here", cellRemainder);

    if (cellRemainder >= 1 && cell === activeCell + 1) {
      return true;
    } else if (
      cellRemainder >= 0 &&
      cellRemainder !== columns - 1 &&
      cell === activeCell - 1
    ) {
      return true;
    }

    return false;
  };

  if (!totalCells) {
    return null;
  }
  return new Array(totalCells).fill().map((_, index) => {
    return (
      <Cell
        location={index}
        handleClick={handleClick}
        activeCell={index === activeCell}
        columns={columns}
        key={`cell-${index}`}
      />
    );
  });
};

export default Cells;
