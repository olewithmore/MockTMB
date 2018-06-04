import React, { Component } from 'react';
import './SearchDashboard.css';
import dataSelect2 from './data';

import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

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
  Table,
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
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

const doughnut = {
  labels: [
    'นิติกรรมสัญญา',
    'หลักประกัน'
  ],
  datasets: [
    {
      data: [15000000, 10000000],
      backgroundColor: [
        '#ED5243',
        '#0059ED'
      ],
      hoverBackgroundColor: [
        '#ED5243',
        '#0059ED'
      ],
    }],
};

const options = {
  tooltips: {
    mode: 'nearest',
    titleFontSize: 16,
    bodyFontSize: 14,
    displayColors: false,
    callbacks: {
      beforeBody: function(tooltipItem, data) {
        return data['labels'][tooltipItem[0]['index']] + "จำนวน 2 รายการ";
      },
      label: function(tooltipItem, data) {
        let text;
        let total = data['datasets'][0]['data'][tooltipItem['index']] + ".00";
        total = total.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

        if(tooltipItem.index === 0){
          text = `วงเงินกู้ทั้งหมด  ${total} บาท`;
        }else if(tooltipItem.index === 1){
          text = `ราคาที่ประเมินได้ล่าสุดทั้งหมด ${total} บาท`;
        }

        return text;
      },
      enabled: false,

      custom: function(tooltipModel) {
        var tooltipEl = document.getElementById('chartjs-tooltip');
        tooltipEl.innerHTML = "<b>ole</b>";
      }
    }
  }
};

class SearchDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        numContact: "",
        showCustomer: true,
        showGuarantee: true,
        showContact: true,
        showSerach: true,
        searchEnable: false,
        guaranteeType: "",
        docType: "",
        statusType: "",
        actType: ""
    };

    this.formUpdateFactory = this.formUpdateFactory.bind(this);
    this.formToggleShowSearch = this.formToggleShowSearch.bind(this);
    this.chooseGuaranteeType = this.chooseGuaranteeType.bind(this);
  }

  formToggleShowSearch(key) {
    return (e) => {
      let tempObject = {...this.state};
      tempObject[key] = e.target.checked;
      tempObject["searchEnable"] = false;
      this.setState(tempObject);
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
    tempObject["searchEnable"] = true;
    tempObject["showSerach"] = false;
    this.setState(tempObject);
  }

  chooseGuaranteeType(key) {
    return (v) => {
      let tempObject = {...this.state};
      tempObject[key] = v;
      this.setState(tempObject);
    };
  }


  render() {

    let searchResult = null;

    if(this.state.searchEnable){
      searchResult = (
        <React.Fragment>
          <Row>
            <Col xs="12" sm="12" lg="12">
              <Card>
                <CardBody>
                  <Row>
                    <Col xs="12" md="4" className="resultProfileImg">
                      <img src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" height="220" alt=""/>
                    </Col>
                    <Col xs="12" md="6" className="resultProfileDetail">
                      <ul>
                        <li>
                          <Row>
                            <Col xs="4">
                              ชื่อ-นามสกุล :
                            </Col>
                            <Col xs="8">
                              นายขอกู้ ธนาคาร
                            </Col>
                          </Row>
                        </li>
                        <li>
                          <Row>
                            <Col xs="4">
                              บัตรประชาชน :
                            </Col>
                            <Col xs="8">
                              3 2456 77890 98 7
                            </Col>
                          </Row>
                        </li>
                        <li>
                          <Row>
                            <Col xs="4">
                              ที่อยู่ตามทะเบียน :
                            </Col>
                            <Col xs="8">
                              59/306 ถ.สวย ต.ในเมือง อ.เมือง จ.นนทบุรี 1100
                            </Col>
                          </Row>
                        </li>
                        <li>
                          <Row>
                            <Col xs="4">
                              สถานะ :
                            </Col>
                            <Col xs="8">
                              โสด
                            </Col>
                          </Row>
                        </li>
                        <li>
                          <Row>
                            <Col xs="4">
                              วัน/เดือน/ปี เกิด :
                            </Col>
                            <Col xs="8">
                              20 มิถุนายน 2520
                            </Col>
                          </Row>
                        </li>
                        <li>
                          <Row>
                            <Col xs="4">
                              อายุ :
                            </Col>
                            <Col xs="8">
                              41 ปี
                            </Col>
                          </Row>
                        </li>
                        <li>
                          <Row>
                            <Col xs="4">
                              อาชีพ :
                            </Col>
                            <Col xs="8">
                              พนักงานบริษัทเอกชน
                            </Col>
                          </Row>
                        </li>
                        <li>
                          <Row>
                            <Col xs="4">
                              คู่สมรส :
                            </Col>
                            <Col xs="8">
                              นางขอกู้ร่วม ธนาคาร
                            </Col>
                          </Row>
                        </li>
                        <li>
                          <Row>
                            <Col xs="4">
                              เบอร์ติดต่อ :
                            </Col>
                            <Col xs="8">
                              096-234-5632
                            </Col>
                          </Row>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs="12">
              <Card>
                <CardBody>
                  <div className="chartContainer">
                    <Doughnut data={doughnut} height={80} options={options} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-database"></i> <strong>ข้อมูลหลักประกัน</strong>
                </CardHeader>
                <CardBody>
                  <Table responsive size="sm">
                    <thead>
                    <tr>
                      <th>ลำดับ</th>
                      <th>รหัสหลักประกัน</th>
                      <th>ที่ตั้ง</th>
                      <th>ราคาประเมินล่าสุด</th>
                      <th>วันครบกำหนดประเมิน</th>
                      <th>ประเภทหลักประกัน</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>PR0001</td>
                      <td>1 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170</td>
                      <td>10,000,000</td>
                      <td>01/01/2561</td>
                      <td>000001 ที่ดิน</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>PR0002</td>
                      <td>2 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170</td>
                      <td>5,000,000</td>
                      <td>05/01/2561</td>
                      <td>000001 ที่ดิน</td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-database"></i> <strong>ข้อมูลนิติกรรมสัญญา</strong>
                </CardHeader>
                <CardBody>
                  <Table responsive size="sm">
                    <thead>
                    <tr>
                      <th>ลำดับ</th>
                      <th>เลขที่งาน</th>
                      <th>วันที่ทำสัญญา</th>
                      <th>วันที่อนุมัติ</th>
                      <th>วงเงินกู้</th>
                      <th>คณะกรรมการ</th>
                      <th>เลขขอประเมิน</th>
                      <th>CA No.</th>
                      <th>เลขรับ Workflow</th>
                      <th>คณะกรรมการลงวันที่</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>53-4310-00001</td>
                      <td>01/01/2561</td>
                      <td>10/01/25561</td>
                      <td>5,000,000</td>
                      <td>สินเชื่อรายย่อย</td>
                      <td>AR-000001</td>
                      <td>000010153</td>
                      <td>1111/2561</td>
                      <td>10/01/25561</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>53-4310-00001</td>
                      <td>01/01/2561</td>
                      <td>10/01/25561</td>
                      <td>5,000,000</td>
                      <td>สินเชื่อรายย่อย</td>
                      <td>AR-000001</td>
                      <td>000010153</td>
                      <td>1111/2561</td>
                      <td>10/01/25561</td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </React.Fragment>
      );
    }

    return (
      <div className="animated fadeIn">

        <Row>
          <div className="col-md-3 offset-md-3">
            {/*<button type="button" className="btn btn-primary btn-block">Search</button>*/}
          </div>
          <div className="col-md-3 offset-md-3">
            <button type="button" className="btn btn-primary btn-block" onClick={()=> { this.searchForm() }}>Search</button>
          </div>
        </Row>
        <br/>

        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-search"></i> <strong>ค้นหารายการ</strong>
                <label className="switch switch-sm switch-pill switch-primary float-right">
                  <input type="checkbox" className="switch-input" checked={this.state.showSerach} onChange={this.formToggleShowSearch("showSerach")} />
                  <span className="switch-slider"></span>
                </label>
              </CardHeader>
              <Collapse isOpen={this.state.showSerach} id="collapseSearchForm">
                <CardBody>
                  <Form action="" method="post" className="form-horizontal">
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        เลขที่งาน
                      </Col>
                      <Col md="3">
                        <Input type="text" className="form-control-sm" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        บัตรประชาชนผู้กู้
                      </Col>
                      <Col md="3">
                        <Input type="text" className="form-control-sm" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        ชื่อผู้กู้
                      </Col>
                      <Col md="5">
                        <Input type="text" className="form-control-sm" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        ชื่อผู้ถือกรรมสิทธิ์
                      </Col>
                      <Col md="5">
                        <Input type="text" className="form-control-sm" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        ประเภทหลักประกัน
                      </Col>
                      <Col md="5">
                        <Select
                          name="form-field-name2"
                          value={this.state.guaranteeType}
                          options={dataSelect2.typeGuarantee}
                          onChange={this.chooseGuaranteeType("guaranteeType")}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        รหัสหลักประกัน
                      </Col>
                      <Col md="3">
                        <Input type="text" className="form-control-sm" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        เลขที่บัญชี
                      </Col>
                      <Col md="3">
                        <Input type="text" className="form-control-sm" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        ประเภทเอกสารสิทธิ์
                      </Col>
                      <Col md="5">
                        <Select
                          name="form-field-name2"
                          value={this.state.docType}
                          options={dataSelect2.typeDoc}
                          onChange={this.chooseGuaranteeType("docType")}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        เลขที่โฉนด/เอกสารสิทธิ์
                      </Col>
                      <Col md="3">
                        <Input type="text" className="form-control-sm" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        สถานะ
                      </Col>
                      <Col md="5">
                        <Select
                          name="form-field-name2"
                          value={this.state.statusType}
                          options={dataSelect2.typeStatus}
                          onChange={this.chooseGuaranteeType("statusType")}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        ประเภทนิติกรรม
                      </Col>
                      <Col md="5">
                        <Select
                          name="form-field-name2"
                          value={this.state.actType}
                          options={dataSelect2.typeAct}
                          onChange={this.chooseGuaranteeType("actType")}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="2" className="labelSearch">
                        ผู้บันทึกรายการ
                      </Col>
                      <Col md="5">
                        <Input type="text" className="form-control-sm" />
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Collapse>
            </Card>
          </Col>
        </Row>

        {/*<Row>*/}
          {/*<Col xs="12" sm="12" lg="12">*/}
            {/*<Card>*/}
              {/*<CardHeader>*/}
                {/*<i className="fa fa-search"></i> <strong>ค้นหา ลูกค้า</strong>*/}
                {/*<label className="switch switch-sm switch-pill switch-primary float-right">*/}
                  {/*<input type="checkbox" className="switch-input" checked={this.state.showCustomer} onChange={this.formToggleShowSearch("showCustomer")} />*/}
                    {/*<span className="switch-slider"></span>*/}
                {/*</label>*/}
              {/*</CardHeader>*/}
              {/*<Collapse isOpen={this.state.showCustomer} id="collapseFormCustomer">*/}
              {/*<CardBody>*/}
                {/*<Row>*/}
                  {/*<Col xs="12" md="6">*/}
                    {/*<FormGroup>*/}
                      {/*<Label htmlFor="name">บัตรประชาชน</Label>*/}
                      {/*<Input className="form-control-sm" type="text" id="name" required />*/}
                    {/*</FormGroup>*/}
                  {/*</Col>*/}
                  {/*<Col xs="12" md="3">*/}
                    {/*<FormGroup>*/}
                      {/*<Label htmlFor="name">ชื่อ</Label>*/}
                      {/*<Input className="form-control-sm" type="text" id="name" required />*/}
                    {/*</FormGroup>*/}
                  {/*</Col>*/}
                  {/*<Col xs="12" md="3">*/}
                    {/*<FormGroup>*/}
                      {/*<Label htmlFor="name">นามสกุล</Label>*/}
                      {/*<Input className="form-control-sm" type="text" id="name" required />*/}
                    {/*</FormGroup>*/}
                  {/*</Col>*/}
                {/*</Row>*/}
              {/*</CardBody>*/}
              {/*</Collapse>*/}
            {/*</Card>*/}
          {/*</Col>*/}
        {/*</Row>*/}

        {/*<Row>*/}
          {/*<Col xs="12" sm="12" lg="12">*/}
            {/*<Card>*/}
              {/*<CardHeader>*/}
                {/*<i className="fa fa-search"></i> <strong>ค้นหา หลักประกัน</strong>*/}
                {/*<label className="switch switch-sm switch-pill switch-primary float-right">*/}
                  {/*<input type="checkbox" className="switch-input" checked={this.state.showGuarantee} onChange={this.formToggleShowSearch("showGuarantee")} />*/}
                  {/*<span className="switch-slider"></span>*/}
                {/*</label>*/}
              {/*</CardHeader>*/}
              {/*<Collapse isOpen={this.state.showGuarantee} id="collapseGuarantee">*/}
                {/*<CardBody>*/}
                {/*<Row>*/}
                  {/*<Col xs="12" md="4">*/}
                    {/*<FormGroup>*/}
                      {/*<Label htmlFor="name">รหัสหลักประกัน</Label>*/}
                      {/*<Input className="form-control-sm" type="text" id="name" required />*/}
                    {/*</FormGroup>*/}
                  {/*</Col>*/}
                  {/*<Col xs="12" md="4">*/}
                    {/*<FormGroup>*/}
                      {/*<Label htmlFor="name">วันครบกำหนดประเมิณ</Label>*/}
                      {/*<Input className="form-control-sm" type="date" id="name" required />*/}
                    {/*</FormGroup>*/}
                  {/*</Col>*/}
                  {/*<Col xs="12" md="4">*/}
                    {/*<FormGroup>*/}
                      {/*<Label htmlFor="name">ประเภทหลักประกัน</Label>*/}
                      {/*<select className="form-control form-control-sm">*/}
                        {/*<option>เลือกประเภทหลักประกัน</option>*/}
                      {/*</select>*/}
                    {/*</FormGroup>*/}
                  {/*</Col>*/}
                {/*</Row>*/}
              {/*</CardBody>*/}
              {/*</Collapse>*/}
            {/*</Card>*/}
          {/*</Col>*/}
        {/*</Row>*/}

        {/*<Row>*/}
          {/*<Col xs="12" sm="12" lg="12">*/}
            {/*<Card>*/}
              {/*<CardHeader>*/}
                {/*<i className="fa fa-search"></i> <strong>ค้นหา นิติกรรมสัญญา</strong>*/}
                {/*<label className="switch switch-sm switch-pill switch-primary float-right">*/}
                  {/*<input type="checkbox" className="switch-input" checked={this.state.showContact} onChange={this.formToggleShowSearch("showContact")} />*/}
                  {/*<span className="switch-slider"></span>*/}
                {/*</label>*/}
              {/*</CardHeader>*/}
              {/*<Collapse isOpen={this.state.showContact} id="collapseContact">*/}
                {/*<CardBody>*/}
                  {/*<Row>*/}
                    {/*<Col xs="12" md="4">*/}
                      {/*<FormGroup>*/}
                        {/*<Label htmlFor="name">เลขที่งาน</Label>*/}
                        {/*<Input className="form-control-sm" type="text" id="name" required onChange={this.formUpdateFactory("numContact")} />*/}
                      {/*</FormGroup>*/}
                    {/*</Col>*/}
                    {/*<Col xs="12" md="4">*/}
                      {/*<FormGroup>*/}
                        {/*<Label htmlFor="name">วันที่ทำสัญญา</Label>*/}
                        {/*<Input className="form-control-sm" type="date" id="name" required />*/}
                      {/*</FormGroup>*/}
                    {/*</Col>*/}
                    {/*<Col xs="12" md="4">*/}
                      {/*<FormGroup>*/}
                        {/*<Label htmlFor="name">วันที่อนุมัติ</Label>*/}
                        {/*<Input className="form-control-sm" type="date" id="name" required />*/}
                      {/*</FormGroup>*/}
                    {/*</Col>*/}
                  {/*</Row>*/}
                {/*</CardBody>*/}
              {/*</Collapse>*/}
            {/*</Card>*/}
          {/*</Col>*/}
        {/*</Row>*/}

        {searchResult}

      </div>
    );
  }
}

export default SearchDashboard;