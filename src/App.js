import './App.css';
import Board from './components/Board';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Intro/>
            </Route>

            <Route exact path="/Board">
              <Board/>
            </Route>
            
          </Switch>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
