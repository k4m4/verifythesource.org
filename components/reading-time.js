import React from 'react'
import PropTypes from 'prop-types'
import readingtime from 'reading-time'

const ReadingTime = ({ content }) => (
	<div className="text-italic">
		<p>{readingtime(content).text}</p>
	</div>
)

ReadingTime.propTypes = {
	content: PropTypes.string.isRequired,
}

export default ReadingTime
