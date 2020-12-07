import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Overview from './pages/Overview';
import CreateAsset from './pages/CreateAsset';
import CreateRecord from './pages/CreateRecord';

function App() {
    return (
        <Router>
            <div className="container">
                <h2>MERN-Stack Maint Tracker</h2>
                <Route path="/" exact component={Overview}/>
                <Route path="/create_asset" component={CreateAsset}/>
                <Route path="/create_record" component={CreateRecord}/>
            </div>
        </Router>
    );
}

export default App;
