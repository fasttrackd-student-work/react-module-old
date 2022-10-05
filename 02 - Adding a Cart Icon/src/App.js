import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Screens/Customer/Home';
const App = () => (
  <div className="App">
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cart" element={
        <Fragment>
          <h1>Cart Page!</h1>
          <Home />
        </Fragment>
      } />
    </Routes>
  </div>
)


export default App;
