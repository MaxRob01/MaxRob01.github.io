import React, { useState, useEffect } from "react";

function Timer() {
	const [timerValue, setTimerValue] = useState(60);
	const [running, setRunning] = useState(false);

	useEffect(() => {
		const startTimer = () => setRunning(true);
		window.addEventListener("keydown", startTimer);
		return () => window.removeEventListener("keydown", startTimer);
	}, []);

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
		</div>
	);
}

export default Timer;
