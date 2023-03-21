import './Chart.css'
import ChartBar from './ChartBar'
const Chart = (props) => {

    const dataPointsValue = props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMaximum = Math.max(...dataPointsValue)
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoints) => (
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={totalMaximum}
                    label={dataPoints.label}
                />
            ))}
        </div>
    )
}

export default Chart