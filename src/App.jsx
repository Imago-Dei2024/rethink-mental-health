import React from 'react'; 
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'; 
import { header } from './components/layout/header'; 
import NavigationMenu from './components/layout/NavigationMenu'; 
import { footer } from './components/layout/footer'; 
import { homePage } from './pages/HomePage'; 
import { aboutPage } from './pages/about/AboutPage'; 
import { appointmentPage } from './pages/appointment/AppointmentPage'; 
import { contactPage } from './pages/contact/ContactPage'; 
import { faqPage } from './pages/faq/FAQPage'; 
import { leaveReviewPage } from './pages/leave-review/LeaveReviewPage'; 
import { reviewsPage } from './pages/reviews/ReviewsPage'; 
import { servicesPage } from './pages/services/ServicesPage'; 
import wellnessPage from './pages/wellness/WellnessPage'; 
import './App.css'; 

function App() {
  return ( 
    <Router> 
      <div className="app flex flex-col min-h-screen"> 
        <Header /> 
        <NavigationMenu /> 
        <main className="flex-grow"> 
          <Switch> 
            <Route path="/" exact_component={homePage} /> 
            <Route path="/aboutPage" exact_component={aboutPage} /> 
            <Route path=""
          </Switch>
        </main>
      </div>
    </Router>
  ); 
}

export default App;
