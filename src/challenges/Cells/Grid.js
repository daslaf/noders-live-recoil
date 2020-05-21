import * as React from 'react';

import Cell from './Cell';

const columnStart = 65; // "A" charCode
const rowStart = 0;

const makeMatrix = (cols, rows) => {
  const colCoords = Array(cols).fill(columnStart).map((code, index) => String.fromCharCode(code + index));
  const colRows = Array(rows).fill(rowStart).map((value, index) => value + index);

  const matrix = [];

  for (const col of colCoords) {
    for (const row of colRows) {
      matrix.push({ id: `${col}${row}` });
    }
  }

  return matrix;
}

const Grid = ({ cols = 1, rows = 1, values, onChange }) => {
  const matrix = React.useMemo(() => makeMatrix(cols, rows), [cols, rows]);

  return (
    <div className="grid">
      {matrix.map(({ id }) => (
        <Cell
          key={id}
          id={id}
          data={values[id]}
          onChange={onChange}
        />
      ))}
    </div>
  )
}

export default Grid;