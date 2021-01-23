import { useState } from 'react'
import './Calendar.scss'
import { initialData } from '../initialData'
import { CalendarHeader, DayColumn, TimesColumn } from '.'
import useDaysData from '../hooks/useDaysData'

type Props = {
	userId: string
}

const Calendar = ({ userId }: Props) => {
	const [timeRange] = useState(initialData.timeRange)
	const [timeFrameDuration] = useState(initialData.timeFrameDuration)
	const { days, toggleTimeFrameStatus } = useDaysData(userId)

	const daysLabels: string[] = ['Time', ...days.map(x => x.label)]
	return(
		<div className="calendar">
			<CalendarHeader labels={daysLabels} />

			<section className="calendar__body">
				<TimesColumn timeRange={timeRange} timeFrameDuration={timeFrameDuration} />
				{ days.map(x => (
					<DayColumn data={x} key={x._id} handleClick={toggleTimeFrameStatus} />
				))}
			</section>
		</div>
	)
}

export default Calendar
