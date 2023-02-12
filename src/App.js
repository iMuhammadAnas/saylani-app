import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Account } from './components/Account';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { NotFound } from './components/NotFound';
import { SignUp } from './components/SignUp';
import { Store } from './components/Store';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact={true} element={<Main/>} />
          <Route path='signup' exact={true}  element={<SignUp/>} />
          <Route path='login' exact={true}  element={<Login/>} />
          <Route path='store' exact={true}  element={<Store/>} />
          <Route path='cart' exact={true}  element={<Cart/>} />
          <Route path='account' exact={true}  element={<Account />} />
          <Route path='*' exact={true}  element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
