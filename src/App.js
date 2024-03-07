import "./App.css";
import TextContainer from "./Text-container";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import MainContainer from "./MainContainer";

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
