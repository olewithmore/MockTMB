
import React, { Component } from 'react';

import FormSearch from '../../../components/FormSearch/FormSearch';
import InputElement from '../../../components/Input/Input';

import {
  Col,
  FormGroup,
  Row
} from 'reactstrap';

class SearchForm extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let searchForm =[];

    for(let key in this.props.searchForm){

      let o = this.props.searchForm[key];
      let labelSize = o.labelSize || "2";
      let inputSize = o.inputSize || "3";
      let classes = o.getClass || "form-control-sm";
      let eventChange = (typeof o.changed == 'function')? o.changed(key) : () => {};

      let dateRangeEnd = null;
      if(o.rangeDate && typeof o.rangeDate === 'object'){
        dateRangeEnd = (
          <React.Fragment>
            <Col md={"1"} className="labelSearch">
              {o.rangeDate.label}
            </Col>
            <Col md={inputSize}>
              <InputElement elementType={o.rangeDate.elementTypes} classes={classes} placeholder={o.rangeDate.placeHolder} changed={eventChange} options={o.rangeDate.options} value={o.rangeDate.value}  />
            </Col>
          </React.Fragment>
        );
      }

      let element = (
          <FormGroup row key={key}>
            <Col md={labelSize} className="labelSearch">
              {o.label}
            </Col>
            <Col md={inputSize}>
              <InputElement elementType={o.elementTypes} classes={classes} placeholder={o.placeHolder} changed={eventChange} options={o.options} value={o.value}  />
            </Col>
            {dateRangeEnd}
          </FormGroup>
      );

      searchForm.push(element);
    }

    let ButtonRow = (
      <React.Fragment>
        <Row>
          <div className="col-md-8">
            {/*<button type="button" className="btn btn-primary btn-block">Search</button>*/}
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-danger btn-block" onClick={()=> {}}>ล้าง</button>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-primary btn-block" onClick={()=> { this.props.clickSearch() }}>ค้นหา</button>
          </div>
        </Row>
        <Row>
          <br/>
        </Row>
      </React.Fragment>
    );

    let SearchForm = (
      <React.Fragment>
        <Row>
          <Col xs="12">
            <FormSearch showSearch={this.props.showSearch} toggleSearch={this.props.toggleSearch}>
              {searchForm}
            </FormSearch>
          </Col>
        </Row>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        {ButtonRow}
        {SearchForm}
      </React.Fragment>
    );
  }

};

export default SearchForm;