import * as React from 'react';

const Converter = ({ label, value, onChange }) => {
  return (
    <div className="converter__item">
      <label className="converter__label">
        <input
          className="converter__field"
          type="number"
          value={value.toFixed(2)}
          onChange={event => onChange(+event.target.value)}
        />
        <span className="converter__text">{label}</span>
      </label>
    </div>
  )
}

export default Converter;
