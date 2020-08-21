import React from 'react'
import useDarkMode from 'use-dark-mode'

const DarkModeToggle = () => {
	const { value, toggle } = useDarkMode(false)

	return (
		<button type="button" onClick={toggle}>
			{value ? (
				<span className="text-black">
					☀
				</span>
			) : (
				<span className="text-white">
					☾
				</span>
			)}
		</button>
	)
}

export default DarkModeToggle
