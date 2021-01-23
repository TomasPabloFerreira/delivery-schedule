import { Day } from "../types"
import './DayColumn.scss'
import { TimeFrameCell } from "."

type Props = {
	data: Day
}

const DayColumn = ({ data }: Props) => {
	console.log(data)
	return (
		<div className="dayColumn">
			{data.timeFrames.map((x, i) => (
				<TimeFrameCell data={x} key={i} />
			))}
		</div>
	)
}

export default DayColumn
