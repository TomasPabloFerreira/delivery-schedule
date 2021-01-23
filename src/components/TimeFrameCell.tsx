import { TimeFrame } from '../types'
import './TimeFrameCell.scss'

type Props = {
	data: TimeFrame
}

const TimeFrameCell = ({ data }: Props) => {
	return(
		<div className="timeFrameCell"></div>
	)
}

export default TimeFrameCell
