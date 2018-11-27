import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {NavLink} from 'react-router-dom';
import Router from './Router';


class App extends Component {
  render() {
    return (
      <div>
      		<header>
      			<div className='logo'>网易云音乐</div>
      			<div className='headright'><span>下载APP</span></div>
      		</header>
      		<nav>
      				<li>
      					<NavLink to='/' exact activeClassName='navselect'>推荐音乐</NavLink>
      				</li>
		       		<li>
      					<NavLink to='/hot' activeClassName='navselect'>热歌榜</NavLink>
      				</li>
      				<li>
      					<NavLink to='/search' activeClassName='navselect'>搜索</NavLink>
      				</li>
       		</nav>
					<Router></Router>
      </div>
    );
  }
}

export default App;
