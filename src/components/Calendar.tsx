import { useState } from 'react'
import './Calendar.scss'

type Props = {
	userId: string
}

const Calendar = ({ userId }: Props) => {
	const [days, setDays] = useState([])

	return(
		<div className="calendar">
			{/* times column */}
			{/* header */}
			{/* body */}
		</div>
	)
}

export default Calendar