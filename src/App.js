import './app.scss';

import Aside from "./components/aside/Aside";
import Map from "./components/map/Map";
import Params from "./components/params/Params";


function App() {

	return (
		<div className="App">
			<Aside />
			<Map />
			<Params />
		</div>
	);
}

export default App;
