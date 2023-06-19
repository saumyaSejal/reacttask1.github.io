import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import Certifications from './Certifications';
import ContactUs from './ContactUs';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
  <Navbar/>

        <Route exact path="/" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/certifications" component={Certifications} />
        <Route path="/contact" component={ContactUs} />
      </div>
    </Router>
  );
};

export default App;
