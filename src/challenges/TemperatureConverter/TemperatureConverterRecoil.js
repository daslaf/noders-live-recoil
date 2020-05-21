import * as React from 'react';
import { atom, RecoilRoot, useRecoilState } from 'recoil';

import './TemperatureConverter.css';

import { celsiusToFahrenheit, fahrenheitToCelsius } from './utils';
import Converter from './Converter';
import Card from '../../ui/Card';

const temperature = atom({
  key: 'temperature',
  default: 0,
});

const TemperatureConverter = () => {
  return (
    <Card title="Temperature Converter">
      <div className="converters">
        <RecoilRoot>
          <CelsiusConverter />
          <span>=</span>
          <FahrenheitConverter />
        </RecoilRoot>
      </div>
    </Card>
  )
};

const CelsiusConverter = () => {
  const [absoluteTemperature, setAbsoluteTemperature] = useRecoilState(temperature)

  return (
    <Converter
      label="Celsius"
      value={absoluteTemperature}
      onChange={setAbsoluteTemperature}
    />
  )
}

const FahrenheitConverter = () => {
  const [absoluteTemperature, setAbsoluteTemperature] = useRecoilState(temperature)

  return (
    <Converter
      label="Fahrenheit"
      value={celsiusToFahrenheit(absoluteTemperature)}
      onChange={value => setAbsoluteTemperature(fahrenheitToCelsius(value))}
    />
  )
}

export default TemperatureConverter;
