import React from 'react'; 
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'; 
import Header from './src/components/layout/header';
import NavigationMenu from './src/components/layout/NavigationMenu'; 
import Footer from './src/components/layout/footer';
import HomePage from './src/pages/homePage';  
import { AboutPage } from './src/pages/about/aboutPage'; 
import { ServicesPage } from './src/pages/services/servicesPage'; 
import { FirstResponderPage } from './src/pages/services/first-responder/firstResponderPage'; 
import WellnessPage from './src/pages/wellness/wellnessPage'; 
import { FAQPage } from './src/pages/faq/faqPage'; 
import { ReviewsPage } from './src/pages/reviews/reviewsPage'; 
import { ContactPage } from './src/pages/contact/contactPage'; 

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
