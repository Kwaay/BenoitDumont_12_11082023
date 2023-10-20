import PropTypes from 'prop-types';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

export default function TinyLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="70%" className="line-container">
      <LineChart data={data}>
        <XAxis
          dataKey="day"
          tickMargin={20}
          tickLine={false}
          axisLine={false}
          padding={{ left: 13, right: 13 }}
        />
        <Tooltip
          contentStyle={{ backgroundColor: 'white' }}
          itemStyle={{
            color: 'black',
            textAlign: 'center',
            fontFamily: 'Roboto',
          }}
          labelFormatter={() => ''}
          separator=""
          formatter={(value) => ['', `${value} min`]}
          cursor={false}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.11)" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <Line
          type="monotone"
          dataKey="sessionLength"
          strokeWidth={2}
          stroke="url(#gradient)"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
TinyLineChart.propTypes = {
  data: PropTypes.array,
};
TinyLineChart.defaultProps = {
  data: [],
};
