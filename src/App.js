import "./App.css";
import React, { useState } from "react";
import TextContainer from "./components/Text-container";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Timer from "./components/Timer";

function App() {
	const [resetKey, setResetKey] = useState(0);

	const handleReset = () => {
		// Incrementing the key will cause the child components to re-mount and reset their internal states.
		setResetKey((prevKey) => prevKey + 1);
	};
	return (
		<MainContainer>
			<Header className="App-header">Typing Speed Test</Header>
			<Body className="App-body">
				<Sidebar></Sidebar>
				<TextContainer key={resetKey}></TextContainer>
				<button
					onClick={handleReset}
					style={{
						maxHeight: "30px",
						marginTop: "100px",
						marginRight: "150px",
					}}
				>
					Restart
				</button>
				<Sidebar>
					<Timer key={resetKey} />
				</Sidebar>
			</Body>

			<Footer></Footer>
		</MainContainer>
	);
}

export default App;
