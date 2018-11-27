import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from './components/home';
import Hot from './components/hot';
import Search from './components/search';



class Router extends React.Component {
  render() {
    return <div>
       	<Switch>
       			<Route exact path='/' component={Home}/>
       			<Route path='/hot' component={Hot}/>
       			<Route path='/search' component={Search}/>
       	</Switch>
      </div>;
   
  }
}

export default Router;
