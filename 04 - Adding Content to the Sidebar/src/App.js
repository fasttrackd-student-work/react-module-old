import { Route, Switch } from 'react-router-dom';

import Home from './Screens/Customer/Home';
const App = () => (
  <div className="App">
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </div>
)


export default App;
