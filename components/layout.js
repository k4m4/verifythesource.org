import React from 'react'
import PropTypes from 'prop-types'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'

const Layout = ({ children }) => (
	<>
		<Meta />
		<div className="min-h-screen min-w-full">
			<NavBar />
			<main>{children}</main>
		</div>
		<Footer />
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
