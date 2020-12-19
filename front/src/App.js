import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css';
import Addemp from './components/Addemp';
import Employeedet from './components/Employeedet';
import Employeedir from './components/Employeedir';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/addemp" exact component={Addemp}/>
      <Route component={Employeedir}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
