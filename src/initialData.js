import moment from 'moment'

export const initialData = {
	days: [
		{
			_id: '1',
			label: moment().format('dddd MMM Do'),
			timeFrames: [
				{ reservations: [ 'user_1', 'user_2' ] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
			]
		},
		{
			_id: '2',
			label: moment().add(1, 'day').format('dddd MMM Do'),
			timeFrames: [
				{ reservations: [ 'user_1', 'user_2' ] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
				{ reservations: [] },
			]
		}
	]
}