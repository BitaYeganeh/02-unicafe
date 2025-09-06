const StatisticLine = ({ label, value, classNameLabel, classNameValue }) => (
  <tr>
    <td className={classNameLabel}>{label}</td>
    <td className={classNameValue}>{value}</td>
  </tr>
)

export default StatisticLine