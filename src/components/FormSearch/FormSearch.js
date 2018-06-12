/**
 * Created by olewithmore on 6/12/2018.
 */
import React, { Component } from 'react';

import {
  Card,
  CardBody,
  CardHeader,
  Collapse,
  Form
} from 'reactstrap';

class FormSearch extends Component {

  render(){
    const className = ['form-horizontal'];

    if(this.props.embedClass) className.push(this.props.embedClass);

    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <i className="fa fa-search"/> <strong>ค้นหารายการ</strong>
            <label className="switch switch-sm switch-pill switch-primary float-right">
              <input type="checkbox" className="switch-input" checked={this.props.showSearch} onChange={this.props.toggleSearch} />
              <span className="switch-slider"/>
            </label>
          </CardHeader>
          <Collapse isOpen={this.props.showSearch} id="collapseSearchForm">
            <CardBody>
              <Form action="" method="post" className={className.join(' ')}>
                {this.props.children}
              </Form>
            </CardBody>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }

};

export default FormSearch;