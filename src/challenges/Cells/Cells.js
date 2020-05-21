import * as React from 'react';

import './Cells.css';
import Grid from './Grid';
import Card from '../../ui/Card';

const Cells = () => {
  const [values, setValues] = React.useState({})

  const handleCellChange = React.useCallback((key, value) => {
    setValues(previous => {
      let computed = '';

      try {
        computed = eval(value)
      } catch (error) {
        computed = `Error: ${error.message}`
      }

      return {
        ...previous,
        [key]: {
          raw: value,
          computed,
        }
      }
    });
  }, [])

  return (
    <Card title="Cells">
      <Grid
        cols={4}
        rows={4}
        values={values}
        onChange={handleCellChange}
      />
    </Card>
  )
}

export default Cells;