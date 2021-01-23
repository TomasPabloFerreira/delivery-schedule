import { Day } from "../types"
import './DayColumn.scss'

type Props = {
	data: Day
}

const DayColumn = ({ data }: Props) => {
	return (
		<div className="dayColumn">
			{data.timeFrames.map((x, i) => (
				<div key={i}>cell</div>
			))}
		</div>
	)
}

export default DayColumn
