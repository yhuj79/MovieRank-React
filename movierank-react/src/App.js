import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import YearTab from './YearTab';
import Home from './Components/Home';
import List2021 from './Components/List2021';
import List2020 from './Components/List2020';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <YearTab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2021" element={<List2021 />} />
          <Route path="/2020" element={<List2020 />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;