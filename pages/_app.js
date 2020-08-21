import React from 'react'
import PropTypes from 'prop-types'
import withDarkMode from 'next-dark-mode'
import '../styles/index.css'

const App = ({ Component, pageProps }) => <Component {...pageProps} />

App.propTypes = {
	Component: PropTypes.elementType,
	pageProps: PropTypes.object,
}

export default withDarkMode(App)
