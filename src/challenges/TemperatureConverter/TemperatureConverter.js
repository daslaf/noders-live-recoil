import * as React from 'react';

import './TemperatureConverter.css';
import { celsiusToFahrenheit, fahrenheitToCelsius } from './utils';
import Converter from './Converter';

import Card from '../../ui/Card';

const TemperatureConverter = () => {
  const [absoluteTemperature, setAbsoluteTemperature] = React.useState(0);

  return (
    <Card title="Temperature Converter">
      <div className="converters">
        <Converter
          label="Celsius"
          value={absoluteTemperature}
          onChange={setAbsoluteTemperature}
        />
        <span>=</span>
        <Converter
          label="Fahrenheit"
          value={celsiusToFahrenheit(absoluteTemperature)}
          onChange={value => setAbsoluteTemperature(fahrenheitToCelsius(value))}
        />
      </div>
    </Card>
  )
};

export default TemperatureConverter;
