import React from 'react';
import { Bar } from '@visx/shape';
import { scaleBand } from '@visx/scale';

const data = [
  { x: 'A', y: 10 },
  { x: 'B', y: 5 },
  { x: 'C', y: 15 },
  { x: 'D', y: 7 },
];

const width = 500;
const height = 200;

const margin = { top: 20, bottom: 20, left: 30, right: 20 };

// scaleBand를 이용해 x 축의 스케일 설정
const xScale = scaleBand({
  range: [margin.left, width - margin.right],
  round: true,
  domain: data.map(d => d.x),
  padding: 0.4,
});

const BandOnlyBarChart = () => (
  <svg width={width} height={height}>
    {data.map((d, i) => (
      <Bar
        key={i}
        x={xScale(d.x) || 0}
        y={margin.top}
        height={height - margin.bottom - margin.top}
        width={xScale.bandwidth()}
        fill="#61cdbb"
      />
    ))}
  </svg>
);

export default BandOnlyBarChart;

