import * as React from 'react';

import './App.css';
import { Cells } from './challenges/Cells';
import { TemperatureConverter, TemperatureConverterRecoil } from './challenges/TemperatureConverter';

function App() {
  return (
    <main className="app-container">
      <TemperatureConverter />
      <TemperatureConverterRecoil />
      <Cells />
    </main>
  );
}

export default App;
