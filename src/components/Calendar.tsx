import { useState } from 'react'
import './Calendar.scss'
import { initialData } from '../initialData'
import { CalendarHeader } from '.'

type Props = {
	userId: string
}

const Calendar = ({ userId }: Props) => {
	const [days, setDays] = useState(initialData.days)

	const daysLabels: string[] = days.map(x => x.label)

	return(
		<div className="calendar">
			{/* times column */}
			<CalendarHeader labels={daysLabels} />
			{/* body */}
		</div>
	)
}

export default Calendar