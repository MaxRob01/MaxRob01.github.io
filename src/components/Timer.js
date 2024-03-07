import React, { useState, useEffect } from "react";

function Timer() {
	const [timerValue, setTimerValue] = useState(60);
	const [running, setRunning] = useState(false);
	useEffect(() => {
		const timer =
			timerValue > 0 &&
			running &&
			setInterval(() => setTimerValue(timerValue - 1), 1000);

		return () => clearInterval(timer);
	}, [timerValue, running]);
	console.log("works");

	return (
		<div>
			<h1>Tiempo: {timerValue}</h1>
			<button onClick={() => setRunning(!running)}>
				{running ? "Stop" : "Start"}
			</button>
		</div>
	);
}

export default Timer;
