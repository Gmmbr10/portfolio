import { About } from "./components/About";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
	return (
		<>
			<Presentation />
			<About />
			<Skills />
			<Projects />
		</>
	);
}

export default App;
