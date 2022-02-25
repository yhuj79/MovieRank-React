import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import YearTab from './Components/YearTab';
import Home from './Components/Home';
import Test2021 from './Components/test2021';
import Test2020 from './Components/test2020';

function App() {
  return (
    <Router>
      <div>
        <YearTab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2021" element={<Test2021 />} />
          <Route path="/2020" element={<Test2020 />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;