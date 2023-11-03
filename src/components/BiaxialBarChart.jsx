import PropTypes from 'prop-types';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function BiaxialBarChart({ data }) {
  const formattedDay = data.map((a) => ({
    ...a,
    day: a.day.split('0')[4],
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={formattedDay}
        margin={{
          top: 20,
          right: 55,
          left: 55,
          bottom: 5,
        }}
        barGap={8}
        startAngle={0}
        endAngle={360}
      >
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          hide={false}
          tickSize={16}
          stroke="#9B9EAC"
        />
        <YAxis
          yAxisId="right"
          dataKey="kilogram"
          orientation="right"
          stroke="#9B9EAC"
          type="number"
          domain={['dataMin - 1', 'dataMax + 1']}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          yAxisId="left"
          dataKey="calories"
          orientation="left"
          stroke=""
          type="number"
          domain={['dataMin - 100', 'dataMax + 20']}
          hide={true}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="square"
          height={50}
          content={({ payload }) =>
            payload.map((entry, index) => (
              <span className="legend-content" key={`item-${index}`}>
                {entry.value === 'kilogram'
                  ? 'Poids (kg)'
                  : 'Calories Brûlées (kCal)'}
              </span>
            ))
          }
          wrapperStyle={{
            textAlign: 'right',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '32px',
            right: '35px',
            top: '10px',
          }}
        ></Legend>
        <Tooltip
          contentStyle={{ backgroundColor: '#ff0101' }}
          itemStyle={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Roboto',
          }}
          labelFormatter={() => ''}
          separator=""
          formatter={(value, name) => [
            '',
            value + (name === 'kilogram' ? 'kg' : 'Kcal'),
          ]}
          itemSorter={(a) => Number(a.dataKey === 'calories')}
        />

        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#000"
          barSize={7}
          className="score-chart"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

BiaxialBarChart.propTypes = {
  data: PropTypes.array,
};
BiaxialBarChart.defaultProps = {
  data: [],
};
