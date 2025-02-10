import * as React from 'react';
import { LineChart } from '@mui/x-charts/';

const uData = [2, 6, 2, 5, 2, 0, 1, 4];
const pData = [0, 2, 1, 4, 5, 2, 0, 2];
const xLabels = [
  '30 грудня',
  '31 грудня',
  '1 січня',
  '2 січня',
  '3 січня',
  '4 січня',
  '5 січня',
  '6 січня',
];

export default function GraphSales() {
  return (
    <LineChart
      //width={500}
      height={200}
      series={[
        { data: pData, label: 'Доставлено' },
        { data: uData, label: 'Замовлено' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}

