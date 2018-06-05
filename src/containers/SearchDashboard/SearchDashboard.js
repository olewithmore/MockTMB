import React, { Component } from 'react';
import './SearchDashboard.css';
import dataSelect2 from './data';

import Select from 'react-select';
import 'react-select/dist/react-select.min.css';
import classnames from 'classnames';

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
  Tooltip,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
  Nav, NavItem, NavLink, TabPane, TabContent
} from 'reactstrap';

import { AppSwitch } from '@coreui/react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB1jGkJEp4wHaMXoAw09ANQ8R_Hcnhb844&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `250px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 17.1546831, lng: 102.2765978 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 17.1546831, lng: 102.2765978 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

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
        actType: "",
        tooltipGuaranteeOpen:  false,
        tooltipContactOpen: false,
        viewData: true,
        activeTab: "2"
    };

    this.formUpdateFactory = this.formUpdateFactory.bind(this);
    this.formToggleShowSearch = this.formToggleShowSearch.bind(this);
    this.chooseGuaranteeType = this.chooseGuaranteeType.bind(this);
    this.setTooltips = this.setTooltips.bind(this);
    this.viewDetail = this.viewDetail.bind(this);
    this.toggle = this.toggle.bind(this);
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

  setTooltips(key){
    return () => {
      let tempObject = {...this.state};
      tempObject[key] = !tempObject[key];
      this.setState(tempObject);
    }
  }

  viewDetail(v) {
    let tempObject = {...this.state};
    tempObject.viewData = v;
    tempObject.activeTab = "1";
    this.setState(tempObject);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }


  render() {

    let searchResult = null;
    let map = null;
    let navButton = null;
    let content = null;

    if(this.state.tooltipGuaranteeOpen){
      map = <MyMapComponent isMarkerShown={true}></MyMapComponent>;
    }

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
                    <tr onClick={ () => { this.viewDetail(true) }}>
                      <td>1</td>
                      <td>PR0001</td>
                      <td>1 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170</td>
                      <td>10,000,000</td>
                      <td>01/01/2561</td>
                      <td>
                        <span id="testTooltips">000001 ที่ดิน</span>
                        <Tooltip placement="left" isOpen={this.state.tooltipGuaranteeOpen} target={'testTooltips'} toggle={this.setTooltips("tooltipGuaranteeOpen")}>
                          <div className="tooltipDetail">
                            <ul>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    ประเภทเอกสารสิทธิ์ :
                                  </Col>
                                  <Col xs="8">
                                    01-โฉนดที่ดิน
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    เลขที่เอกสารสิทธิ์ :
                                  </Col>
                                  <Col xs="8">
                                    0000001
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    ชื่อผู้ที่ถือกรรมสิทธิ์ :
                                  </Col>
                                  <Col xs="8">
                                    นายกรรมสิทธิ์ ที่ดิน
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    ประเภทหลักประกัน :
                                  </Col>
                                  <Col xs="8">
                                    000001 ที่ดิน
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    ได้มาโดย :
                                  </Col>
                                  <Col xs="8">
                                    การซื้อ-ขาย
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    ที่ตั้ง :
                                  </Col>
                                  <Col xs="8">
                                    1 ถ.หนองน้ำ ต.ในเมือง อ.เมือง จ.เชียงราย 10170
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    เนื้อที่ :
                                  </Col>
                                  <Col xs="8">
                                    1 ไร่ 1 งาน 36 ตารางวา
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    ราคาประเมินล่าสุด :
                                  </Col>
                                  <Col xs="8">
                                    10,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    ราคาประเมินก่อนหน้า :
                                  </Col>
                                  <Col xs="8">
                                    8,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4">
                                    ละติจูด,ลองติจูด :
                                  </Col>
                                  <Col xs="8">
                                    13°33'14.2"N, 99°49'13.1"E
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                            {map}
                          </div>
                        </Tooltip>
                      </td>
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
                  <hr/>
                  <Pagination size="sm" className="paginationDataQuarantee justify-content-end">
                    <PaginationItem>
                      <PaginationLink previous tag="button" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next tag="button" />
                    </PaginationItem>
                  </Pagination>
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
                      <td>
                        <span id="testTooltips2">AR-000001</span>
                        <Tooltip placement="left" isOpen={this.state.tooltipContactOpen} target={'testTooltips2'} toggle={this.setTooltips("tooltipContactOpen")}>
                          <div className="tooltipDetail">
                            <ul>
                              <li>
                                <Row>
                                  <Col xs="6">
                                    ผู้กู้ :
                                  </Col>
                                  <Col xs="6">
                                    นายกู้ ธนาคาร
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6">
                                    ผู้กู้ร่วม(ถ้ามี) :
                                  </Col>
                                  <Col xs="6">
                                    นางกู้ร่วม ธนาคาร
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6">
                                    ที่อยู่ตามทะเบียน :
                                  </Col>
                                  <Col xs="6">
                                    59/306 ถ.สวย ต.ในเมือง อ.เมือง จ.นนทบุรี 1100
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6">
                                    ประเภทสัญญา :
                                  </Col>
                                  <Col xs="6">
                                    PREMIER HOUSING LOAN
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6">
                                    วันที่ทำสัญญา :
                                  </Col>
                                  <Col xs="6">
                                    01/01/2561
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6">
                                    วงเงินกู้ :
                                  </Col>
                                  <Col xs="6">
                                    5,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6">
                                    เลขที่บัญชี :
                                  </Col>
                                  <Col xs="6">
                                    0000000001
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6">
                                    รหัสหลักประกัน :
                                  </Col>
                                  <Col xs="6">
                                    PR0001,PR0002
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6">
                                    ราคาประเมินทั้งหมดของหลักประกัน :
                                  </Col>
                                  <Col xs="6">
                                    10,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </div>
                        </Tooltip>
                      </td>
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

    let dataDetail = (
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
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  1. ข้อมูลที่ดิน
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  2. รายละเอียดที่ดิน
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  3. รายละเอียดราคาประเมิน
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>1.1 ที่ดิน</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ประเภทเอกสารสิทธิ์ :
                                  </Col>
                                  <Col xs="8">
                                    01-โฉนดที่ดิน
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ชื่อผู้ถือกรรมสิทธิ์ :
                                  </Col>
                                  <Col xs="8">
                                    นายกรรมสิทธิ์ ที่ดิน
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ประเภทหลักประกัน :
                                  </Col>
                                  <Col xs="8">
                                    286003-ที่ดินเปล่า
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ได้มาโดย :
                                  </Col>
                                  <Col xs="8">
                                    การซื้อ-ขาย
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    เนื้อที่ :
                                  </Col>
                                  <Col xs="8">
                                    1 ไร่ 1 งาน 37.9 วา
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    เลขที่เอกสารสิทธิ์ :
                                  </Col>
                                  <Col xs="8">
                                    000001
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    วันที่ประเมิน :
                                  </Col>
                                  <Col xs="8">
                                    01/01/2561
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    วันที่จดทะเบียนกรมที่ดิน :
                                  </Col>
                                  <Col xs="8">
                                    01/01/2525
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
                <Row>
                  <Col xs="12">
                    <Card>
                    <CardHeader>
                      <strong>1.2 รายละเอียดโฉนด</strong>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col xs="12" md="6">
                          <ul className="data-detail-first">
                            <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  เลขที่โฉนด :
                                </Col>
                                <Col xs="8">
                                  236542
                                </Col>
                              </Row>
                            </li>
                            <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  เลขที่ดิน :
                                </Col>
                                <Col xs="8">
                                  1234
                                </Col>
                              </Row>
                            </li>
                            <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  เล่ม :
                                </Col>
                                <Col xs="8">
                                  1
                                </Col>
                              </Row>
                            </li>
                            <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  ตำบล :
                                </Col>
                                <Col xs="8">
                                  ในเมือง
                                </Col>
                              </Row>
                            </li>
                            <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  จังหวัด :
                                </Col>
                                <Col xs="8">
                                  นนทบุรี
                                </Col>
                              </Row>
                            </li>
                          </ul>
                        </Col>
                        <Col xs="12" md="6">
                          <ul className="data-detail">
                            <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  ระวาง :
                                </Col>
                                <Col xs="8">
                                  5136 IV 6645-10
                                </Col>
                              </Row>
                            </li>
                            <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  หน้าสำรวจ :
                                </Col>
                                <Col xs="8">
                                  11000
                                </Col>
                              </Row>
                            </li>
                            <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  หน้า :
                                </Col>
                                <Col xs="8">
                                  54
                                </Col>
                              </Row>
                            </li>
                            <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  อำเภอ :
                                </Col>
                                <Col xs="8">
                                  ในเมือง
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
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>1.3 เขตปกครอง</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    รหัสตามเขตปกครอง :
                                  </Col>
                                  <Col xs="8">
                                    120105
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    อำเภอ :
                                  </Col>
                                  <Col xs="8">
                                    ในเมือง
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    รหัสไปรษณีย์ :
                                  </Col>
                                  <Col xs="8">
                                    11000
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ตำบล :
                                  </Col>
                                  <Col xs="8">
                                    ในเมือง
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    จังหวัด :
                                  </Col>
                                  <Col xs="8">
                                    นนทบุรี
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
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>1.4 ที่ตั้ง</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    เลขที่ :
                                  </Col>
                                  <Col xs="8">
                                    1
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    หมู่บ้าน :
                                  </Col>
                                  <Col xs="8">
                                    -
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ถนนสะอาด :
                                  </Col>
                                  <Col xs="8">
                                    1
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    อำเภอ/เขต :
                                  </Col>
                                  <Col xs="8">
                                    ในเมือง
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    หมู่ :
                                  </Col>
                                  <Col xs="8">
                                    -
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ตรอก/ซอย :
                                  </Col>
                                  <Col xs="8">
                                    1
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ตำบล/แขวง :
                                  </Col>
                                  <Col xs="8">
                                    ในเมือง
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    จังหวัด :
                                  </Col>
                                  <Col xs="8">
                                    นนทบุรี
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
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>2.1 ระยะกว้างยาวโดยประมาณและเขตติดต่อ</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ทิศตะวันออก :
                                  </Col>
                                  <Col xs="8">
                                    5.90 เมตร
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ทิศตะวันตก :
                                  </Col>
                                  <Col xs="8">
                                    11.80 เมตร
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ทิศเหนือ :
                                  </Col>
                                  <Col xs="8">
                                    16.50 เมตร
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ทิศใต้ :
                                  </Col>
                                  <Col xs="8">
                                    17.80 เมตร
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ติดต่อกับเลขที่ :
                                  </Col>
                                  <Col xs="8">
                                    000001
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ติดต่อกับเลขที่ :
                                  </Col>
                                  <Col xs="8">
                                    000002
                                  </Col>
                                </Row>
                              </li>
                              <li>
                              <Row>
                                <Col xs="4" className="labelSearch">
                                  ติดต่อกับเลขที่ :
                                </Col>
                                <Col xs="8">
                                  000003
                                </Col>
                              </Row>
                            </li>
                              <li>
                                <Row>
                                  <Col xs="4" className="labelSearch">
                                    ติดต่อกับเลขที่ :
                                  </Col>
                                  <Col xs="8">
                                    ทางหลวงเทศบาล
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
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>2.2 สภาพที่ดิน</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ระดับ</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ลุ่ม</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ถมแล้ว</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="2" className="checkbox-other">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="4" className="">
                                    <Input type="text" className="form-control-sm" value="เนินเขา" />
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ที่สวน</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ที่ไร่</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ที่นา</Label>
                                    </FormGroup>
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
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>2.3 ทำเล</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ย่านการค้า</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ที่อยู่อาศัย</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ย่านการค้าและที่อยู่อาศัย</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="2" className="checkbox-other">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="4" className="">
                                    <Input type="text" className="form-control-sm" value="ตลาดสด" />
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">เกษตรกรรม</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ย่านอุตสาหกรรม</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ย่านห่างไกลชุมชน</Label>
                                    </FormGroup>
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
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>2.4 ความสะดวกในการอยู่อาศัยและใช้ประโยชน์</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="1" md="2" className="labelSearch">
                            <strong>2.4.1 สภาพที่</strong>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ไม่มีทางเข้าออก</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ติดแม่นน้ำ/คลอง/ลำธาร</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ทางเดิน</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">มีภาระจำยอม</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">รถยนตร์เข้าถึง</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs="1" md="2" className="labelSearch">
                            <strong>2.4.2 ติดถนนหรือซอย</strong>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="4" >
                                    <strong>ชื่อ</strong> ถนนโครงการ
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">สาธารณประโยชน์</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ส่วนบุคคล</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="2" className="checkbox-other">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="4" className="">
                                    <Input type="text" className="form-control-sm" value="ตลาดสด" />
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="4" >
                                    <strong>สภาพ</strong> ค.ส.ล. ค. ม.
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">จัดสรร</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs="1" md="2" className="labelSearch">
                            <strong>2.4.3 ไฟฟ้า, ประปา</strong>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">มี</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">มีเฉพาะไฟฟ้า</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ใช้น้ำบาดาล</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ไม่มี</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">มีเฉพาะประปา</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs="1" md="2" className="labelSearch">
                            <strong>2.4.4 ท่อระบายน้ำ</strong>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">มี</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ไม่มี</Label>
                                    </FormGroup>
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
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>2.5 การใช้ประโยชน์</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ที่อยู่อาศัย</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">อุตสาหกรรม</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ถมแล้ว</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="2" className="checkbox-other">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="4" className="">
                                    <Input type="text" className="form-control-sm" value="เนินเขา" />
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">พานิชยกรรม</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">เกษตรกรรม</Label>
                                    </FormGroup>
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
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>2.6 ภาระผูกพัน</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail-first">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ไม่มี</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ให้เช่า</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" >
                                    <strong>คู่สัญญา</strong> บมจ.ธนาคารทหารไทย
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ติดจำนอง</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5" className="">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ติดจำนอง</Label>
                                    </FormGroup>
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
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>2.7 ราคาซื้อขายที่ดิน ไร่/ตรว.</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="7" >
                                    <strong>ราคาซื้อขายที่ดิน ไร่/ตรว.</strong> 10,000
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
                <Row>
                  <Col xs="12">
                    <Card>
                      <CardHeader>
                        <strong>2.9 ภาระและสิทธิอื่นๆเหนือที่ดิน</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="6">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="5">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" checked />
                                      <Label check className="form-check-label" htmlFor="checkbox1">ไม่มี</Label>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="3" className="labelSearch">
                                  </Col>
                                  <Col xs="2" className="checkbox-other">
                                    <FormGroup check className="checkbox">
                                      <Input className="form-check-input" type="checkbox" name="checkbox1" value="option1" />
                                      <Label check className="form-check-label" htmlFor="checkbox1">มี</Label>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="7" className="">
                                    <Input type="textarea" name="textarea-input" id="textarea-input" rows="5"
                                           placeholder="Content..." value="หนี้ร้อยล้าน" />
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
              </TabPane>
              <TabPane tabId="3">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </React.Fragment>
    );

    if(this.state.viewData){
      navButton = (<Row>
        <div className="col-md-10">
          {/*<button type="button" className="btn btn-primary btn-block">Search</button>*/}
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-primary btn-block" onClick={()=> { this.viewDetail(false) }}>Back</button>
        </div>
      </Row>);
      content = (dataDetail);
    }else{
      navButton = (<Row>
        <div className="col-md-8">
          {/*<button type="button" className="btn btn-primary btn-block">Search</button>*/}
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-danger btn-block" onClick={()=> {}}>Clear</button>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-primary btn-block" onClick={()=> { this.searchForm() }}>Search</button>
        </div>
      </Row>);
      content = (
        <React.Fragment>
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
                          วันที่ทำสัญญา
                        </Col>
                        <Col md="5">
                          <Input type="date" className="form-control-sm" />
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
          {searchResult}
        </React.Fragment>
      );
    }

    return (
      <div className="animated fadeIn">
        {navButton}
        <br/>
        {content}
      </div>
    );
  }
}

export default SearchDashboard;
