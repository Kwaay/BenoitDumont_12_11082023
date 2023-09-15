// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';

export default function RBarChart({ todayScore }) {
  return (
    <RadialBarChart
      width={400}
      height={400}
      cx={200}
      cy={200}
      innerRadius={100}
      outerRadius={150}
      barSize={15}
      startAngle={0}
      endAngle={360}
      data={[{ todayScore, fill: 'red' }]}
      className="score-chart"
    >
      <RadialBar
        angleAxisId={0}
        minAngle={15}
        label={{ position: 'insideStart', fill: '#fff' }}
        dataKey="todayScore"
        clockWise
        cornerRadius={10}
        background
      />
      <text
        x="200"
        y="180"
        textAnchor="middle"
        dominantBaseline="middle"
        className="percent"
      >
        {todayScore * 100}%
      </text>
      <text
        x="200"
        y="210"
        textAnchor="middle"
        dominantBaseline="middle"
        className="percent-text"
      >
        de votre objectif
      </text>
      <PolarAngleAxis
        type="number"
        domain={[0, 1]}
        dataKey="todayScore"
        angleAxisId={0}
        tick={false}
      />
    </RadialBarChart>
  );
}

RBarChart.propTypes = {
  todayScore: PropTypes.number,
};
RBarChart.defaultProps = {
  todayScore: 0,
};
