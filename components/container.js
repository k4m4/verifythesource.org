import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children }) => <div className="container mx-auto px-5">{children}</div>

Container.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Container
