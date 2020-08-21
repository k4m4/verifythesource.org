import React from 'react'
import PropTypes from 'prop-types'

const PostTitle = ({ children }) => (
	<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
		{children}
	</h1>
)

PostTitle.propTypes = {
	children: PropTypes.node.isRequired,
}

export default PostTitle
