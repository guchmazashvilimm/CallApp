import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';

import Fetch from './component/fetch';
import PieChartPage from './component/Chart';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Fetch/>}/>
          <Route path='/piechart' element={<PieChartPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
