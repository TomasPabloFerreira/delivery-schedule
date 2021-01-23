import { TimeFrame } from '../types'
import './TimeFrameCell.scss'

type Props = {
	data: TimeFrame
}

const TimeFrameCell = ({ data }: Props) => {

	let statusClass = 'timeFrameCell__status'

	switch(data.status) {
		case 1:
			statusClass = `${statusClass}--active`
			break
		case 2:
			statusClass = `${statusClass}--locked`
			break
	}

	return(
		<div className="timeFrameCell">
			<div className={statusClass}></div>
		</div>
	)
}

export default TimeFrameCell
