import React from 'react'

const StatsGraph = (props) => {
	let className = "stats-graph " + props.className
	return (
		<canvas className={className}></canvas>
	)
}

export default StatsGraph