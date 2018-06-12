/**
 * Created by olewithmore on 6/12/2018.
 */
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Search from './Appraise';

class Main extends Component{
  render() {

    console.log("check props :", this.props);

    return (
        <Switch>
          <Route path="/" name="Search" component={Search} />
        </Switch>
    );
  }
};

export default Main;