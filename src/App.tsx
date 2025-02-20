import DoorCode from './Containers/DoorCode/DoorCode.tsx';
import "./App.css";
import { NavLink, Route, Routes } from 'react-router-dom';
import Calculator from './Containers/Calculator/Calculator.tsx';

const App = () => {

  return (
    <>
      <div>
        <header className="header">
          <NavLink to="/">Door code</NavLink>
          <NavLink to="/calculator">Calculator</NavLink>
        </header>
        <Routes>
          <Route path="/" element={<DoorCode/>} />
          <Route path="/calculator" element={<Calculator/>} />
        </Routes>
      </div>

    </>
  );
};

export default App;
