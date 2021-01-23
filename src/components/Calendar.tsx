import { useEffect, useState } from 'react'
import './Calendar.scss'
import { initialData } from '../initialData'
import { CalendarHeader, DayColumn, TimesColumn } from '.'
import { Day, TimeFrame } from '../types'

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
	const [timeRange] = useState(initialData.timeRange)
	const [timeFrameDuration] = useState(initialData.timeFrameDuration)

	const daysLabels: string[] = ['Time', ...days.map(x => x.label)]

	useEffect(() => {
		const newDays = getTimeFramesStatus(initialData.days, userId)
		setDays(newDays)
	}, [userId])

	const toggleTimeFrameStatus = (dayId: string, timeFrameIndex: number) => {
		let newDays: Day[] = [...days]
		const dayIndex = newDays.findIndex(x => x._id === dayId)
		const day = newDays[dayIndex]
		const timeFrame: TimeFrame = day.timeFrames[timeFrameIndex]

		if(timeFrame.status === 2) return

		timeFrame.reservations.includes(userId)
			? newDays[dayIndex].timeFrames[timeFrameIndex] = {
				reservations: timeFrame.reservations.filter(x => x !== userId),
				status: getTimeFrameStatus(timeFrame.reservations.filter(x => x !== userId), userId)
			}
			: newDays[dayIndex].timeFrames[timeFrameIndex] = {
				reservations: timeFrame.reservations.concat(userId),
				status: getTimeFrameStatus(timeFrame.reservations.concat(userId), userId)
			}

		setDays(newDays)
	}

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