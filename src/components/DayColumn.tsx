import { Day } from "../types"
import './DayColumn.scss'

type Props = {
	data: Day
}

const DayColumn = ({ data }: Props) => {
	console.log(data)
	return (
		<div className="dayColumn">
			{data.timeFrames.map((x, i) => (
				<div key={i}>{i}</div>
			))}
		</div>
	)
}

export default DayColumn
