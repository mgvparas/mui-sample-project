import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// import NotFoundPage from './Containers/NotFoundPage/NotFoundPage.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={LoginPage} />
        <Route path='/Register' component={RegistrationPage} />
        <Route path='/Login' component={LoginPage} />
        <Route path='/Home' component={HomePage} />
        {/* <Route path='*' component={NotFoundPage} /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
