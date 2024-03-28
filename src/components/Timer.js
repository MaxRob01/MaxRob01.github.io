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
		let timer;
		if (timerValue > 0 && running) {
			timer = setInterval(() => setTimerValue(timerValue - 1), 1000);
		} else if (timerValue === 0 && running) {
			alert("Time up!");
		}
		return () => clearInterval(timer);
	}, [timerValue, running]);

	return (
		<div>
			<h1>Tiempo: {timerValue}</h1>
		</div>
	);
}

export default Timer;
