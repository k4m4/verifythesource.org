import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<script src="scripts/no_flash.js" />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
