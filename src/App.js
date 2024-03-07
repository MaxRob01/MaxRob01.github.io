import "./App.css";
import TextContainer from "./components/Text-container";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";

function App() {
	return (
		<MainContainer>
			<Header className="App-header">Typing Speed Test</Header>
			<Body className="App-body">
				<Sidebar></Sidebar>
				<TextContainer>
					<h1>"Hello"</h1>
				</TextContainer>
				<Sidebar></Sidebar>
			</Body>
			<Footer></Footer>
		</MainContainer>
	);
}

export default App;
