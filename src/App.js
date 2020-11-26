import React from 'react';
import './App.css';
import Nav from './containers/nav';
import Main from'./containers/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
		<Nav />
		<Main />
		<Footer />
    </div>
  );
}

export default App;
