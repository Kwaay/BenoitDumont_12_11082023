// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts';

export default function RChart({ data }) {
  return (
    <RadarChart
      cx={200}
      cy={200}
      outerRadius={120}
      width={400}
      height={400}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#e60000"
        fill="#e60000"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}

RChart.propTypes = {
  data: PropTypes.array,
};
RChart.defaultProps = {
  data: [],
};
