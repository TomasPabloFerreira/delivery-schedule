import { Day } from "../types"
import './DayColumn.scss'
import { TimeFrameCell } from "."

type Props = {
	data: Day
	handleClick: (dayId: string, timeFrameIndex: number) => void
}

const DayColumn = ({ data, handleClick }: Props) => {
	return (
		<div className="dayColumn">
			{data.timeFrames.map((x, i) => (
				<div className="dayColumn__item" key={i} onClick={() => handleClick(data._id, i)}>
					<TimeFrameCell data={x} />
				</div>
			))}
		</div>
	)
}

export default DayColumn
