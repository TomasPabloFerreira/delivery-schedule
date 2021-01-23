import './TimesColumn.scss'
import { useMemo } from 'react'
import moment from 'moment'

type Props = {
	timeRange: {
		from: string,
		to: string
	},
	timeFrameDuration: number
}

const generateTimeArray = (
	{ timeRange: { from, to }, timeFrameDuration }: Props
): string[] => {

	const diff = moment(to, 'HH:mm').diff(moment(from, 'HH:mm'), 'minutes')
	const length = diff / timeFrameDuration
	const array = Array(length).fill(null)

	const timeArray = array.reduce((acc, x, i) => {
		const last = acc.length ? acc.slice(-1) : from;
		return acc.concat(
			moment(last, 'HH:mm')
				.add(timeFrameDuration, 'minutes')
				.format('HH:mm'))
	}, [])

	return timeArray
}

const TimesColumn = ({ timeRange, timeFrameDuration }: Props) => {

	const timesArray = useMemo(() => {
		const newTimesArray = generateTimeArray({ timeRange, timeFrameDuration })
		return newTimesArray
	}, [timeRange, timeFrameDuration])

	return (
		<div className="timesColumn">
			{ timesArray.map((x, i) => (
				<div className="timesColumn__cell" key={i}>
					{x}
				</div>
			))}
		</div>
	)
}

export default TimesColumn