import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './components/App.js';
import Menu from './components/sitePages/menu';
import AboutUs from './components/sitePages/aboutUs';
import Promotion from './components/sitePages/promotion';

const Routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/menu" component={Menu} />
                <Route path="/promotion" component={Promotion} />
                <Route path="/aboutUs" component={AboutUs} />
            </Switch>
        </div>
    </Router>
  )

ReactDOM.render(
    Routing,
    document.querySelector('#root')
);
