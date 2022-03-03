import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import YearTab from './Components/YearTab';
import Home from './Components/Home';

import List2021 from './Components/List/List2021';
import List2020 from './Components/List/List2020';
import List2019 from './Components/List/List2019';
import List2018 from './Components/List/List2018';
import List2017 from './Components/List/List2017';
import List2016 from './Components/List/List2016';
import List2015 from './Components/List/List2015';
import List2014 from './Components/List/List2014';
import List2013 from './Components/List/List2013';
import List2012 from './Components/List/List2012';

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
          <Route path="/2019" element={<List2019 />} />
          <Route path="/2018" element={<List2018 />} />
          <Route path="/2017" element={<List2017 />} />
          <Route path="/2016" element={<List2016 />} />
          <Route path="/2015" element={<List2015 />} />
          <Route path="/2014" element={<List2014 />} />
          <Route path="/2013" element={<List2013 />} />
          <Route path="/2012" element={<List2012 />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;