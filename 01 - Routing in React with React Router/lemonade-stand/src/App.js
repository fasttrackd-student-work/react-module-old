import { NavLink, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Screens/Customer/Home';
const App = () => (
  <div className="App">
    <nav>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to='/cart'>Cart</NavLink>
      <NavLink to='/cart/pay'>Payment</NavLink>
    </nav>
    <Routes>
      <Route path='/cart/pay' element={
        <div>
          <Navigate to='/' />
          <h1>Payment Page</h1>
        </div>
      } />
      <Route path='/cart' element={<h1>Cart Page</h1>} />
      <Route path='/' element={<Home />} />
    </Routes>
  </div>
)


export default App;
