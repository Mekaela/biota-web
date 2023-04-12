import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './container/createAccount/CreateAccount';
import ResetPassword from './container/resetPassword/resetPassword';
import Home from './container/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='createaccount' element={<CreateAccount />} />
            <Route index element={<Home />} />
            <Route path='resetPassword' element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
