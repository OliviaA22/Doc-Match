import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { AuthProvider } from './components/contexts/authContext';
import Login from './components/layouts/Login';
import Register from './components/layouts/Register';
import PrivateRoute from './PrivateRoute';

// Home
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
// Blog
const Blog = React.lazy(() => import("./components/pages/Blog"));
const Blogstandard = React.lazy(() => import("./components/pages/Blogstandard"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
// About
const About = React.lazy(() => import("./components/pages/About"));
// Services
const Services = React.lazy(() => import("./components/pages/Services"));
const Servicedetails = React.lazy(() => import("./components/pages/Servicedetails"));
// FAQ's
const Faqs = React.lazy(() => import("./components/pages/Faqs"));
// Appointment
const Appointment = React.lazy(() => import("./components/pages/Appointment"));
// Doctors
const Doctorgrid = React.lazy(() => import("./components/pages/Doctorgrid"));
// Doctor Management
const DoctorCreate = React.lazy(() => import('./components/pages/DoctorManagement/DoctorCreate'));
const DoctorRead = React.lazy(() => import('./components/pages/DoctorManagement/DoctorRead'));
const DoctorUpdate = React.lazy(() => import('./components/pages/DoctorManagement/DoctorUpdate'));
const DoctorDelete = React.lazy(() => import('./components/pages/DoctorManagement/DoctorDelete'));
// Contact
const Contact = React.lazy(() => import("./components/pages/Contact"));
// Extra
const Errorpage = React.lazy(() => import("./components/pages/Errorpage"));

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})


function App() {
  return (
    <AuthProvider>
      <Router basename={"/Doc-Match/"}>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              {/* Home */}
              <Route exact path="/" component={Home} />
              <Route exact path="/home-v2" component={Hometwo} />
              {/* Blog */}
              <Route exact path="/blog/cat/:catId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
              <Route exact path="/blog/tag/:tagId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
              <Route exact path="/blog/search/:query" component={props => (<Blog {...props} key={window.location.pathname} />)} />
              <Route exact path="/blog/author/:authorId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog-standard" component={Blogstandard} />
              <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname} />)} />
              {/* About */}
              <Route exact path="/about" component={About} />
              {/* Services */}
              <Route exact path="/service/cat/:catId" component={props => (<Services {...props} key={window.location.pathname} />)} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/service-details/:id" component={props => (<Servicedetails {...props} key={window.location.pathname} />)} />
              {/* FAQ's */}
              <Route exact path="/faqs" component={Faqs} />
              {/* Appointment */}
              <Route exact path="/appointment" component={Appointment} />
              {/* Doctors */}
              <Route exact path="/doctor/cat/:catId" component={props => (<Doctorgrid {...props} key={window.location.pathname} />)} />
              <PrivateRoute exact path="/doctor-grid" component={Doctorgrid} />
              {/* Doctormanagement */}
              <Route exact path="/doctor-management/create" component={DoctorCreate} />
              <Route exact path="/doctor-management/read" component={DoctorRead} />
              <Route exact path="/doctor-management/update/:id" component={DoctorUpdate} />
              <Route exact path="/doctor-management/delete/:id" component={DoctorDelete} />
              {/* Contact */}
              <Route exact path="/contact" component={Contact} />
              {/* Extra */}
              <Route exact path="/error-page" component={Errorpage} />
              <Route exact component={Errorpage} />
            </Switch>
          </ScrollToTop>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
