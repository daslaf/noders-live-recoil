import * as React from 'react';

const Cell = ({ id, data, onChange }) => {
  const computed = data?.computed ?? '';
  const value = data?.raw ?? '';

  return (
    <div className="cell">
      <div className="cell__content">
        <p>{id}</p>
        <h2>{computed}</h2>
        <input type="text" value={value} onChange={event => onChange(id, event.target.value)} />
      </div>
    </div>
  )
}

export default Cell;