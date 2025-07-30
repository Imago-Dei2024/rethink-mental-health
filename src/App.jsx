import React from 'react'; 
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'; 
import Header from './components/layout/Header';
import NavigationMenu from './components/layout/NavigationMenu'; 
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';  
import { AboutPage } from './pages/about/AboutPage'; 
import { ServicesPage } from './pages/services/ServicesPage'; 
import { FirstResponderPage } from './pages/services/first-responder/FirstResponderPage'; 
import WellnessPage from './pages/wellness/WellnessPage'; 
import { FAQPage } from './pages/faq/FAQPage'; 
import { ReviewsPage } from './pages/reviews/ReviewsPage'; 
import { ContactPage } from './pages/contact/ContactPage'; 

import './App.css'; 

function App() {
  return ( 
    <Router> 
      <div className="app flex flex-col min-h-screen"> 
        <Header /> 
        <NavigationMenu /> 
        <main className="flex-grow"> 
          <Switch> 
            <Route path="/" exact component = {HomePage} /> 
            <Route path="/AboutPage" component = {AboutPage} /> 
            <Route path="/ServicesPage" component = {ServicesPage} /> 
            <Route path="/FirstRespondersPage" component = {FirstResponderPage} /> 
            <Route path="/WellnessPage" component = {WellnessPage} /> 
            <Route path="/FAQPage" component = {FAQPage} />  
            <Route path="/ReviewsPage" component = {ReviewsPage} />   
            <Route path="/ContactPage" component = {ContactPage} />  
          </Switch>
        </main> 
        <Footer /> 
      </div>
    </Router>
  ); 
}

export default App;
