import { useEffect, useState } from 'react'
import './Calendar.scss'
import { initialData } from '../initialData'
import { CalendarHeader, DayColumn } from '.'
import { Day } from '../types'

type Props = {
	userId: string
}

const getTimeFrameStatus = (reservations: string[], userId: string) => (
	reservations.includes(userId)
		? 1
		: reservations.length >= 8
			? 2
			: 0
)

const getTimeFramesStatus = (days: Day[], userId: string): Day[] => {
	const newDays = days.map(x => ({
		...x,
		timeFrames: x.timeFrames.map(y => ({
			...y,
			status: getTimeFrameStatus(y.reservations, userId)
		})),
	}))
	return newDays
}

const Calendar = ({ userId }: Props) => {
	const [days, setDays] = useState(initialData.days)

	const daysLabels: string[] = days.map(x => x.label)

	useEffect(() => {
		const newDays = getTimeFramesStatus(initialData.days, userId)
		setDays(newDays)
	}, [userId])

	return(
		<div className="calendar">
			{/* times column */}
			<CalendarHeader labels={daysLabels} />

			<section className="calendar__body">
				{ days.map(x => (
					<DayColumn data={x} key={x._id} />
				))}
			</section>
		</div>
	)
}

export default Calendar