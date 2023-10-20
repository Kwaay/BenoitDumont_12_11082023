import PropTypes from 'prop-types';
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts';

export default function RBarChart({ todayScore }) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <RadialBarChart
        innerRadius="50%"
        outerRadius="50%"
        barSize={12}
        startAngle={580}
        endAngle={220}
        data={[{ todayScore, fill: 'red' }]}
        className="score-chart"
      >
        <RadialBar
          angleAxisId={0}
          minAngle={100}
          label={{ position: 'insideStart', fill: '#fff' }}
          dataKey="todayScore"
          clockWise
          cornerRadius={5}
          background
        />
        <foreignObject width="100%" height="100%">
          <div className="percent-container">
            <p xmlns="http://www.w3.org/1999/xhtml" className="percent">
              {todayScore * 100}%
            </p>
            <p xmlns="http://www.w3.org/1999/xhtml" className="percent-text">
              de votre <br /> objectif
            </p>
          </div>
        </foreignObject>

        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          dataKey="todayScore"
          angleAxisId={0}
          tick={false}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

RBarChart.propTypes = {
  todayScore: PropTypes.number,
};
RBarChart.defaultProps = {
  todayScore: 0,
};
