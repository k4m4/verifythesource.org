import React from 'react'
import PropTypes from 'prop-types'
import { parseISO, format } from 'date-fns'

const DateFormater = ({ dateString }) => {
	const date = parseISO(dateString)
	return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

DateFormater.propTypes = {
	dateString: PropTypes.string.isRequired,
}

export default DateFormater
