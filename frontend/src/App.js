/*

src/App.js

*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import JobDetails from './pages/JobDetails/JobDetails';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/common/NavBar/NavBar';
import { images } from './assets/images/images';

function App() {
  return (
    <Router>
      <NavBar logo={images.logo_svg} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} /> {/* preparing the route to job id*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
