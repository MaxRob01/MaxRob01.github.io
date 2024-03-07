import "./App.css";
import TextContainer from "./components/Text-container";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Timer from "./components/Timer";

function App() {
	return (
		<MainContainer>
			<Header className="App-header">Typing Speed Test</Header>
			<Body className="App-body">
				<Sidebar></Sidebar>
				<TextContainer></TextContainer>
				<Sidebar>
					{" "}
					<Timer />
				</Sidebar>
			</Body>
			<Footer></Footer>
		</MainContainer>
	);
}

export default App;
