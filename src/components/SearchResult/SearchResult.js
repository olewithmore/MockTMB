/**
 * Created by olewithmore on 6/12/2018.
 */
import React, { Component } from 'react';

import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';

class SearchResult extends Component {

  render(){
    let classes = this.props.classes || "fa fa-database";

    return (
      <Card>
        <CardHeader>
          <i className={classes}/> <strong>{this.props.textHeader}</strong>
        </CardHeader>
        <CardBody>
          {this.props.children}
        </CardBody>
      </Card>
    );
  }
};

export default SearchResult;