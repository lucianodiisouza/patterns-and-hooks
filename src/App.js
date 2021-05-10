// import { Component } from 'react';
import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
	const [reverse, setReverse] = useState(false);
	const reverseClass = reverse && 'reverse';
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
				<button type="button" onClick={() => setReverse(!reverse)}>
					Reverse {reverseClass}
				</button>
			</header>
		</div>
	);
}

// class App extends Component {
// 	state = {
// 		reverse: true,
// 	};

// 	render() {
// 		const { reverse } = this.state;
// 		const reverseClass = reverse && 'reverse';

// 		return (
// <div className="App">
// <header className="App-header">
// <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
// <button type="button" onClick={() => this.setState({ reverse: !reverse })}>
//	Reverse {reverseClass}
// 	</button>
// </header>
// </div>

// 		);
// 	}
// }

export default App;
