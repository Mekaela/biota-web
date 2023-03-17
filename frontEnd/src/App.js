import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './container/createAccount/CreateAccount';
import Home from './container/home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='createaccount' element={<CreateAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
