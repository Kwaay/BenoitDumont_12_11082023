import PropTypes from 'prop-types';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';

export default function RChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="50%" data={data} width="100%" height="100%">
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#e60000"
          fill="#e60000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

RChart.propTypes = {
  data: PropTypes.array,
};
RChart.defaultProps = {
  data: [],
};
