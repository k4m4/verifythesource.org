import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ name }) => (
	<div className="flex items-center">
		<div className="text-l font-semibold italic">
			<span className="font-normal not-italic">By</span> {name}
		</div>
	</div>
)

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
}

export default Avatar
