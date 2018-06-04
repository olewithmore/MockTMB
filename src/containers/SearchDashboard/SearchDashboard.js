import React, { Component } from 'react';
import './SearchDashboard.css';

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

import { AppSwitch } from '@coreui/react'

class SearchDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        numContact: "",
        showCustomer: true,
        showGuarantee: true,
        showContact: true
    };

    this.formUpdateFactory = this.formUpdateFactory.bind(this);
    this.formToggleShowSearch = this.formToggleShowSearch.bind(this);
  }

  formToggleShowSearch(key) {
    return (e) => {
      let tempObject = {...this.state};
      console.log(e.target.checked);
      tempObject[key] = e.target.checked;
      this.setState(tempObject);
      console.log("state :", this.state);
    };
  }

  formUpdateFactory(key) {

    return (e) => {
      let tempObject = {...this.state};
      tempObject[key] = e.target.checked;
      this.setState(tempObject);
    };
  }

  searchForm() {
    let tempObject = {...this.state};
    tempObject["showCustomer"] = false;
    tempObject["showGuarantee"] = false;
    tempObject["showContact"] = false;
    this.setState(tempObject);
  }


  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-search"></i> <strong>ค้นหา ลูกค้า</strong>
                <label className="switch switch-sm switch-pill switch-primary float-right">
                  <input type="checkbox" className="switch-input" checked={this.state.showCustomer} onChange={this.formToggleShowSearch("showCustomer")} />
                    <span className="switch-slider"></span>
                </label>
              </CardHeader>
              <Collapse isOpen={this.state.showCustomer} id="collapseFormCustomer">
              <CardBody>
                <Row>
                  <Col xs="12" md="6">
                    <FormGroup>
                      <Label htmlFor="name">บัตรประชาชน</Label>
                      <Input className="form-control-sm" type="text" id="name" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="3">
                    <FormGroup>
                      <Label htmlFor="name">ชื่อ</Label>
                      <Input className="form-control-sm" type="text" id="name" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="3">
                    <FormGroup>
                      <Label htmlFor="name">นามสกุล</Label>
                      <Input className="form-control-sm" type="text" id="name" required />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-search"></i> <strong>ค้นหา หลักประกัน</strong>
                <label className="switch switch-sm switch-pill switch-primary float-right">
                  <input type="checkbox" className="switch-input" checked={this.state.showGuarantee} onChange={this.formToggleShowSearch("showGuarantee")} />
                  <span className="switch-slider"></span>
                </label>
              </CardHeader>
              <Collapse isOpen={this.state.showGuarantee} id="collapseGuarantee">
                <CardBody>
                <Row>
                  <Col xs="12" md="4">
                    <FormGroup>
                      <Label htmlFor="name">รหัสหลักประกัน</Label>
                      <Input className="form-control-sm" type="text" id="name" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="4">
                    <FormGroup>
                      <Label htmlFor="name">วันครบกำหนดประเมิณ</Label>
                      <Input className="form-control-sm" type="date" id="name" required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="4">
                    <FormGroup>
                      <Label htmlFor="name">ประเภทหลักประกัน</Label>
                      <select className="form-control form-control-sm">
                        <option>เลือกประเภทหลักประกัน</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-search"></i> <strong>ค้นหา นิติกรรมสัญญา</strong>
                <label className="switch switch-sm switch-pill switch-primary float-right">
                  <input type="checkbox" className="switch-input" checked={this.state.showContact} onChange={this.formToggleShowSearch("showContact")} />
                  <span className="switch-slider"></span>
                </label>
              </CardHeader>
              <Collapse isOpen={this.state.showContact} id="collapseContact">
                <CardBody>
                  <Row>
                    <Col xs="12" md="4">
                      <FormGroup>
                        <Label htmlFor="name">เลขที่งาน</Label>
                        <Input className="form-control-sm" type="text" id="name" required onChange={this.formUpdateFactory("numContact")} />
                      </FormGroup>
                    </Col>
                    <Col xs="12" md="4">
                      <FormGroup>
                        <Label htmlFor="name">วันที่ทำสัญญา</Label>
                        <Input className="form-control-sm" type="date" id="name" required />
                      </FormGroup>
                    </Col>
                    <Col xs="12" md="4">
                      <FormGroup>
                        <Label htmlFor="name">วันที่อนุมัติ</Label>
                        <Input className="form-control-sm" type="date" id="name" required />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>
        <Row>
          <div class="col-md-3 offset-md-3">
            {/*<button type="button" className="btn btn-primary btn-block">Search</button>*/}
          </div>
          <div class="col-md-3 offset-md-3">
            <button type="button" className="btn btn-primary btn-block" onClick={()=> { this.searchForm() }}>Search</button>
          </div>
        </Row>
        <br/>

        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
                <CardBody>
                  <Row>
                    <Col xs="12" md="6" className="resultProfileImg">
                      <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" height="200" alt=""/>
                    </Col>
                    <Col xs="12" md="6" className="resultProfileDetail">

                    </Col>
                  </Row>
                </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default SearchDashboard;
