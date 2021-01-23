import './CalendarHeader.scss'

type Props = {
	labels: string[]
}

const Header = ({ labels }: Props) => {
	return (
		<div className="calendar__header">
			{ labels.map((x, i) => (
				<div className="header__cell" key={i}>{x}</div>
			))}
		</div>
	)
}

export default Header
