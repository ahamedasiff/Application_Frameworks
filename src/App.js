  // import React from 'react';
  // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  // import './App.css';
  // import Navbar from './component/Navbar';
  // import Footer from './component/Footer';
  // import Home from './Screens/Home';
  // import AstronomyPOD from './Screens/AstronomyPOD';
  // import MarsRoverImages from './Screens/MarsRoverImages';
  // import NasaImages from './Screens/NasaImages';
  // import HomePage from './Screens/HomePage';

  // function App() {
  //   return (
  //     <Router>
  //       <div className="d-flex flex-column min-vh-100">
  //       <Navbar />
  //       <div className="flex-grow-1">
  //       <Routes>
  //         <Route path='/homepage' element={<HomePage />} />
  //         <Route path="/home" element={<Home />} />
  //         <Route path="/apod" element={<AstronomyPOD />} />
  //         <Route path="/mars" element={<MarsRoverImages />} />
  //         <Route path="/nasa" element={<NasaImages />} />
  //         <Route path="/" element={<HomePage />} />
  //       </Routes>
  //       </div>
  //       <Footer />
  //       </div>
  //     </Router>
  //   );
  // }

  // export default App;
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
  import './App.css';
  import Navbar from './component/Navbar';
  import Footer from './component/Footer';
  import Home from './Screens/Home';
  import AstronomyPOD from './Screens/AstronomyPOD';
  import MarsRoverImages from './Screens/MarsRoverImages';
  import NasaImages from './Screens/NasaImages';
  import HomePage from './Screens/HomePage';
  
  function App() {
    return (
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <ConditionalNavbar />
          <div className="flex-grow-1">
            <Routes>
              <Route path='/homepage' element={<HomePage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/apod" element={<AstronomyPOD />} />
              <Route path="/mars" element={<MarsRoverImages />} />
              <Route path="/nasa" element={<NasaImages />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
          <ConditionalFooter />
        </div>
      </Router>
    );
  }
  
  function ConditionalNavbar() {
    const location = useLocation();
    return location.pathname !== '/' ? <Navbar /> : null;
  }
  
  function ConditionalFooter() {
    const location = useLocation();
    return location.pathname !== '/' ? <Footer /> : null;
  }
  
  export default App;
  