/**
 * Created by olewithmore on 6/12/2018.
 */

import React, { Component } from 'react';
import $ from 'jquery';

import SearchForm from './SearchForm/SearchForm';
import SearchResult from '../../components/SearchResult/SearchResult';
import ContentTable from '../../components/Table/Table';
import ContentDetail from '../../components/DataDetail/DataDetail';

import classnames from 'classnames';

import data from '../SearchDashboard/data';

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
  Nav, NavItem, NavLink, TabPane, TabContent,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

class Appraise extends Component {

  constructor(props){
    super(props);

    const classNameTextRight = "text-right";
    const classNameTextCenter = "text-center";
    const pointer = " pointer";

    this.state = {
      searchForm: {
        borrower: {
          label: "ผู้กู้",
          elementTypes: "input"
        },
        dateOfCurrentAssessment: {
          label: "วันที่ประเมินตามสภาพปัจจุบัน",
          elementTypes: "date",
          rangeDate : {
            label: "ถึง",
            elementTypes: "date",
            labelSize: "1"
          }
        },
        workNumber : {
          label: "หมายเลขงาน",
          elementTypes: "input"
        },
        deedNumberOrLicenseDocument : {
          label: "เลขที่โฉนด/ เอกสารสิทธิ์",
          elementTypes: "input"
        },
        requestNumber: {
          label: "เลขที่คำขอ",
          elementTypes: "input"
        } ,
        collateralCode: {
          label: "รหัสหลักประกัน",
          elementTypes: "select",
          options: [
            {value: 'all', label: 'รายการทั้งหมด'},
            {value: '1', label: '000001'},
            {value: '2', label: '000002'},
            {value: '3', label: '000003'},
            {value: '4', label: '000004'},
            {value: '5', label: '000005'}
          ],
          name: "codeGuarantee",
          value: "all",
          changed: this.factoryChangeValue.bind(this)
        },
        theLimitBetween: {
          label: "วงเงินระหว่าง",
          elementTypes: "date",
          rangeDate : {
            label: "ถึง",
            elementTypes: "date",
            labelSize: "1"
          }
        },
        costEstimate: {
          label: "ราคาประเมิน",
          elementTypes: "date",
          rangeDate : {
            label: "ถึง",
            elementTypes: "date",
            labelSize: "1"
          }
        },
        evaluationTeam: {
          label: "กลุ่มงานประเมิน",
          elementTypes: "select",
          options: [
            {value: 'all', label: 'รายการทั้งหมด'},
            {value: '1', label: 'กลุ่ม 1'},
            {value: '2', label: 'กลุ่ม 2'}
          ],
          name: "evaluationTeam",
          value: "all",
          changed: this.factoryChangeValue.bind(this)
        },
        assessor: {
          label: "ผู้ประเมิน",
          elementTypes: "input"
        },
        dateProjectClosed: {
          label: "วันที่ปิดงาน",
          elementTypes: "date"
        },
      },
      showSearch: true,
      searchEnable: false,
      viewDetail: false,
      viewDetailGuarantee: false,
      resultSearch: {
        header: [
          'ลำดับ', 'เลขคำขอ', 'หมายเลขงาน', 'เลขที่โฉลด/ เอกสารสิทธิ์', 'ชื่อผู้กู้', 'ผู้ประเมิน', 'มีกรรมสิทธิ์ปลูกสร้าง'
        ],
        body: [
          {
            td: [
              {
                content: "1"
              },
              {
                content: "A00000001",
                classNameTd: classNameTextCenter
              },
              {
                content: "J00000001",
                classNameTd: classNameTextCenter
              },
              {
                content: "0000001"
              },
              {
                content: "นายกู้ ธนาคาร"
              },
              {
                content: "นางสาวประเมิน ผู้กู้"
              },
              {
                content: "N",
                classNameTd: classNameTextCenter
              }
            ]
          },
          {
            td: [
              {
                content: "2"
              },
              {
                content: "A00000002",
                classNameTd: classNameTextCenter
              },
              {
                content: "J00000002",
                classNameTd: classNameTextCenter
              },
              {
                content: "0000002"
              },
              {
                content: "นายกู้ ธนาคาร"
              },
              {
                content: "นางสาวประเมิน ผู้กู้"
              },
              {
                content: "Y",
                classNameTd: classNameTextCenter
              }
            ]
          }
        ]
      },
      detailCustomer: [
        { f: "ชื่อ-นามสกุล", s: "นายขอกู้ ธนาคาร"},
        { f: "บัตรประชาชน", s: "3 2456 77890 98 9"},
        { f: "ที่อยู่ตามทะเบียน", s: "59/306 ถ.สวย ต.ในเมือง อ.เมือง จ.นนทบุรี 11000"},
        { f: "สถานะ", s: "โสด"},
        { f: "วัน/เดือน/ปี เกิด", s: "20 มิถุนายน 2520"},
        { f: "อายุ", s: "41 ปี"},
        { f: "อาชีพ", s: "พนักงานบริษัทเอกชน"},
        { f: "คู่สมรส", s: "นางขอกู้ร่วม ธนาคาร"},
        { f: "เบอร์ติดต่อ", s: "096-234-5632"}
      ],
      detailTableTab_1: {
        header: [
          [
            {
              text: "ลำดับ",
              ill: false
            },
            {
              text: "เลขที่เอกสารสิธทิ์",
              ill: false
            },
            {
              text: "ประเภทหลักประกัน",
              ill: true,
              n: 2
            },
            {
              text: "ที่ดิน",
              ill: true,
              n: 3
            }
          ],
          [
            "หลัก",
            "ย่อย",
            "ไร่",
            "งาน",
            "ตารางวา"
          ]
        ],
        body: [
          {
            td: [
              {
                content: '1',
                classNameTd: classNameTextCenter
              },
              {
                content: '0000001',
                classNameTd: classNameTextCenter
              },
              {
                content: 'ที่ดินพร้อมสิ่งปลูกสร้าง'
              },
              {
                content: 'ที่ดินพร้อมทาวน์เฮาส์'
              },
              {
                content: '0',
                classNameTd: classNameTextRight
              },
              {
                content: '0',
                classNameTd: classNameTextRight
              },
              {
                content: '79',
                classNameTd: classNameTextRight
              }
            ]
          }
        ]
      },
      detailTableTab_2: {
        header: [
          [
            {
              text: "รายการประเมินราคา",
              ill: true,
              n: 3
            },
            {
              text: "เอกสาร Scan/ ถ่าย",
              ill: true,
              n: 2
            }
          ],
          [
            "ลำดับ",
            "ประเภทเอกสาร",
            "รายละเอียดเอกสาร",
            "ชื่อไฟล์",
            "action"
          ]
        ],
        body: [
          {
            td: [
              {
                content: '1',
                classNameTd: classNameTextCenter
              },
              {
                content: 'รายงานการประเมิน',
              },
              {
                content: 'รายงานการประเมินหลักทรัพย์ประกัน'
              },
              {
                content: 'รายงานการประเมินหลักทรัพย์ประกัน.pdf'
              },
              {
                content: 'ดาวน์โหลด',
                classNameTd: classNameTextCenter + pointer,
                otherEvent: this.downloadFile.bind(this, "https://test-it.io/wp-content/uploads/2017/07/demo.pdf")()
              }
            ]
          },
          {
            td: [
              {
                content: '2',
                classNameTd: classNameTextCenter
              },
              {
                content: 'เอกสารขอกู้',
              },
              {
                content: 'เอกสารขอกู้'
              },
              {
                content: 'เอกสารขอกู้.pdf'
              },
              {
                content: 'ดาวน์โหลด',
                classNameTd: classNameTextCenter + pointer,
                otherEvent: this.downloadFile.bind(this, "https://test-it.io/wp-content/uploads/2017/07/demo.pdf")()
              }
            ]
          },
          {
            td: [
              {
                content: '3',
                classNameTd: classNameTextCenter
              },
              {
                content: 'แผนที่',
              },
              {
                content: 'แผนที่'
              },
              {
                content: 'แผนที่.pdf'
              },
              {
                content: 'ดาวน์โหลด',
                classNameTd: classNameTextCenter + pointer,
                otherEvent: this.downloadFile.bind(this, "https://test-it.io/wp-content/uploads/2017/07/demo.pdf")()
              }
            ]
          },
          {
            td: [
              {
                content: '4',
                classNameTd: classNameTextCenter
              },
              {
                content: 'ไฟล์ word',
              },
              {
                content: 'ไฟล์ word'
              },
              {
                content: 'ไฟล์ word.doc'
              },
              {
                content: 'ดาวน์โหลด',
                classNameTd: classNameTextCenter + pointer,
                otherEvent: this.downloadFile.bind(this, "https://d9db56472fd41226d193-1e5e0d4b7948acaf6080b0dce0b35ed5.ssl.cf1.rackcdn.com/spectools/docs/wd-spectools-word-sample-04.doc")()
              }
            ]
          },
          {
            td: [
              {
                content: '5',
                classNameTd: classNameTextCenter
              },
              {
                content: 'ไฟล์ excel',
              },
              {
                content: 'ไฟล์ excel'
              },
              {
                content: 'ไฟล์ excel.xlsx'
              },
              {
                content: 'ดาวน์โหลด',
                classNameTd: classNameTextCenter + pointer,
                otherEvent: this.downloadFile.bind(this, "https://athens.blackboard.com/webapps/dur-browserCheck-bb_bb60/samples/sample.xlsx")()
              }
            ]
          }
        ]
      },
      activeTabDetail: "1"
    };

    this.formToggleShowSearch = this.formToggleShowSearch.bind(this);
    this.factoryChangeValue = this.factoryChangeValue.bind(this);
    this.search = this.search.bind(this);
    this.backFromDetail = this.backFromDetail.bind(this);
    this.viewDetail = this.viewDetail.bind(this);
    this.viewDetailGuarantee = this.viewDetailGuarantee.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
  }

  downloadFile(file) {
    return () => {
      console.log("file :", file);
      setTimeout(() => {
        const response = {
          file
        };
        window.open(response.file);
      }, 100);
    }
  }

  factoryChangeValue(key) {
    return (e) => {

      let value = (!e.target)? e.value : e.target.value;

      let tempState = {...this.state};
      tempState.searchForm[key].value = value;
      this.setState(tempState);
    };
  }

  formToggleShowSearch(key) {
    return (e) => {
      let tempObject = {...this.state};
      tempObject[key] = e.target.checked;
      tempObject["searchEnable"] = false;
      this.setState(tempObject);
    };
  }

  search() {
    let tempObject = {...this.state};
    tempObject.showSearch = false;
    tempObject.searchEnable = true;
    this.setState(tempObject);
  }

  viewDetail() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    let tempObject = {...this.state};
    tempObject.viewDetail = true;
    tempObject.activeTabDetail = "1";
    this.setState(tempObject);
  }

  viewDetailGuarantee() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    let tempObject = {...this.state};
    tempObject.viewDetailGuarantee = true;
    tempObject.activeTabDetail = "3";
    this.setState(tempObject);
  }

  backFromDetail() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    let tempObject = {...this.state};

    if(tempObject.viewDetailGuarantee){
      tempObject.viewDetailGuarantee = false;
      tempObject.activeTabDetail = "1";
    }else{
      tempObject.viewDetail = false;
    }
    this.setState(tempObject);
  }

  toggle(n){
    let tempObject = {...this.state};
    tempObject.activeTabDetail = n;
    this.setState(tempObject);
  }

  render(){
    let searchResult = null;
    let render = null;

    let dataDetailAppraise = (
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
                    <ContentDetail dataList={this.state.detailCustomer}/>
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
                  className={classnames({ active: this.state.activeTabDetail === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  1. รายละเอียดการประเมิน
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTabDetail === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  2. เอกสาร Scan ถ่าย
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTabDetail}>
              <TabPane tabId="1">
                <Row>
                  <Col xs="12">
                    <SearchResult textHeader={'รายการ การประเมินราคา'}>
                        <ContentTable headers={this.state.detailTableTab_1.header} body={this.state.detailTableTab_1.body} irregular={true} viewDetail={this.viewDetailGuarantee}/>
                    </SearchResult>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col xs="12">
                    <SearchResult textHeader={'รายการ การประเมินราคา'}>
                      <ContentTable headers={this.state.detailTableTab_2.header} body={this.state.detailTableTab_2.body} irregular={true}/>
                    </SearchResult>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </React.Fragment>
    );

    let navButtonViewDetail = (<Row>
      <div className="col-md-10">
        {/*<button type="button" className="btn btn-primary btn-block">Search</button>*/}
      </div>
      <div className="col-md-2">
        <button type="button" className="btn btn-primary btn-block" onClick={()=> { this.backFromDetail() }}>กลับ</button>
      </div>
    </Row>);

    let dataDetailGuarantee = (
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
                    <ContentDetail dataList={data.detailCustomer}/>
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
                  className={classnames({ active: this.state.activeTabDetail === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  1. ข้อมูลที่ดิน
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTabDetail === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  2. รายละเอียดที่ดิน
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTabDetail === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  3. รายละเอียดราคาประเมิน
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTabDetail}>
              <TabPane tabId="1">
                <Row>
                  <Col xs="12" md="6">
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>1.1 ที่ดิน</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ContentDetail dataList={data.detailDataGuarantee.dataLand.landLeft} classNameF="labelSearch" classNameUl="data-detail"></ContentDetail>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>1.3 เขตปกครอง</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ContentDetail dataList={data.detailDataGuarantee.dataLand.adminRegion} classNameF="labelSearch" classNameUl="data-detail"></ContentDetail>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" md="6">
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>1.2 รายละเอียดโฉนด</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ContentDetail dataList={data.detailDataGuarantee.dataLand.detailOfDeed} classNameF="labelSearch" classNameUl="data-detail"></ContentDetail>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>1.4 ที่ตั้ง</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ContentDetail dataList={data.detailDataGuarantee.dataLand.position} classNameF="labelSearch" classNameUl="data-detail"></ContentDetail>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col xs="12" md="6">
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>2.1 ระยะกว้างยาวโดยประมาณและเขตติดต่อ</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                        ทิศตะวันออก :
                                      </Col>
                                      <Col xs="9">
                                        5.90 เมตร ติดต่อกับเลขที่ 000001
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                        ทิศตะวันตก :
                                      </Col>
                                      <Col xs="9">
                                        11.80 เมตร ติดต่อกับเลขที่ 000001
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                        ทิศเหนือ :
                                      </Col>
                                      <Col xs="9">
                                        16.50 เมตร ติดต่อกับเลขที่ 000001
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                        ทิศใต้ :
                                      </Col>
                                      <Col xs="9">
                                        17.80 เมตร ติดต่อกับเลขที่ ทางหลวงเทศบาล
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
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>2.3 ทำเล</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked/>
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
                                          <Label check className="form-check-label" htmlFor="checkbox1">ย่านการค้าและที่อยู่อาศัย</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">ย่านห่างไกลชุมชน</Label>
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                </ul>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>2.4 ความสะดวกในการอยู่อาศัยและใช้ประโยชน์</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="6" className="labelSearch">
                                <strong>2.4.1 สภาพที่</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
                                          <Label check className="form-check-label" htmlFor="checkbox1">ทางเดิน</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">รถยนตร์เข้าถึง</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                </ul>
                              </Col>
                            </Row>

                            <Row>
                              <Col xs="12" md="6" className="labelSearch">
                                <strong>2.4.2 ติดถนนหรือซอย</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
                                          <Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>
                                        </FormGroup>
                                      </Col>
                                      <Col xs="4" className="">
                                        <Input type="text" className="form-control-sm" value="ตลาดสด" />
                                      </Col>
                                    </Row>
                                  </li>
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">จัดสรร</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                </ul>
                              </Col>
                            </Row>

                            <Row>
                              <Col xs="12" md="6" className="labelSearch">
                                <strong>2.4.3 ไฟฟ้า, ประปา</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
                                          <Label check className="form-check-label" htmlFor="checkbox1">ใช้น้ำบาดาล</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
                                          <Label check className="form-check-label" htmlFor="checkbox1">มีเฉพาะประปา</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                </ul>
                              </Col>
                            </Row>

                            <Row>
                              <Col xs="12" md="6" className="labelSearch">
                                <strong>2.4.4 ท่อระบายน้ำ</strong>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
                                          <Label check className="form-check-label" htmlFor="checkbox1">มี</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                  </Col>
                  <Col xs="12" md="6">
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>2.2 สภาพที่ดิน</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
                                          <Label check className="form-check-label" htmlFor="checkbox1">ถมแล้ว</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">ที่นา</Label>
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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

                                </ul>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>2.5 การใช้ประโยชน์</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">อุตสาหกรรม</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">เกษตรกรรม</Label>
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                </ul>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>2.6 ภาระผูกพัน</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">ให้เช่า</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">ติดจำนอง</Label>
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
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>2.7 ราคาซื้อขายที่ดิน ไร่/ตรว.</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
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
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>2.8 ศักยภาพ</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
                                          <Label check className="form-check-label" htmlFor="checkbox1">สูง</Label>
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">ต่ำ</Label>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </li>
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
                                          <Label check className="form-check-label" htmlFor="checkbox1">กลาง</Label>
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
                                          <Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>
                                        </FormGroup>
                                      </Col>
                                      <Col xs="4" className="">
                                        <Input type="text" className="form-control-sm" value="ดีมาก" />
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
                      <Col xs="12" md="12">
                        <Card>
                          <CardHeader>
                            <strong>2.9 ภาระและสิทธิอื่นๆเหนือที่ดิน</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              <Col xs="12" md="12">
                                <ul className="data-detail">
                                  <li>
                                    <Row>
                                      <Col xs="3" className="labelSearch">
                                      </Col>
                                      <Col xs="5">
                                        <FormGroup check className="checkbox">
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />
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
                                          <Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />
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
                  </Col>
                </Row>
                {/*<hr/>*/}

                {/*<Row>*/}
                {/*<Col xs="12" md="6">*/}
                {/*<Card>*/}
                {/*<CardHeader>*/}
                {/*<strong>2.3 ทำเล</strong>*/}
                {/*</CardHeader>*/}
                {/*<CardBody>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ย่านการค้า</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ที่อยู่อาศัย</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ย่านการค้าและที่อยู่อาศัย</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">เกษตรกรรม</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ย่านอุตสาหกรรม</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ย่านห่างไกลชุมชน</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="2" className="checkbox-other">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*<Col xs="4" className="">*/}
                {/*<Input type="text" className="form-control-sm" value="ตลาดสด" />*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*<Col xs="12" md="6">*/}
                {/*<ul className="data-detail">*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</CardBody>*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*<Col xs="12" md="6">*/}
                {/*<Card>*/}
                {/*<CardHeader>*/}
                {/*<strong>2.4 ความสะดวกในการอยู่อาศัยและใช้ประโยชน์</strong>*/}
                {/*</CardHeader>*/}
                {/*<CardBody>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="6" className="labelSearch">*/}
                {/*<strong>2.4.1 สภาพที่</strong>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ไม่มีทางเข้าออก</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ติดแม่นน้ำ/คลอง/ลำธาร</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ทางเดิน</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">มีภาระจำยอม</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">รถยนตร์เข้าถึง</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}

                {/*<Row>*/}
                {/*<Col xs="12" md="6" className="labelSearch">*/}
                {/*<strong>2.4.2 ติดถนนหรือซอย</strong>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="4" >*/}
                {/*<strong>ชื่อ</strong> ถนนโครงการ*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">สาธารณประโยชน์</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ส่วนบุคคล</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="2" className="checkbox-other">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*<Col xs="4" className="">*/}
                {/*<Input type="text" className="form-control-sm" value="ตลาดสด" />*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="4" >*/}
                {/*<strong>สภาพ</strong> ค.ส.ล. ค. ม.*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">จัดสรร</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}

                {/*<Row>*/}
                {/*<Col xs="12" md="6" className="labelSearch">*/}
                {/*<strong>2.4.3 ไฟฟ้า, ประปา</strong>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">มี</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">มีเฉพาะไฟฟ้า</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ใช้น้ำบาดาล</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ไม่มี</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">มีเฉพาะประปา</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}

                {/*<Row>*/}
                {/*<Col xs="12" md="6" className="labelSearch">*/}
                {/*<strong>2.4.4 ท่อระบายน้ำ</strong>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail-first">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">มี</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ไม่มี</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}

                {/*</CardBody>*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*<hr/>*/}

                {/*<Row>*/}
                {/*<Col xs="12" md="6">*/}
                {/*<Card>*/}
                {/*<CardHeader>*/}
                {/*<strong>2.5 การใช้ประโยชน์</strong>*/}
                {/*</CardHeader>*/}
                {/*<CardBody>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ที่อยู่อาศัย</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">อุตสาหกรรม</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">พานิชยกรรม</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">เกษตรกรรม</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="2" className="checkbox-other">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*<Col xs="4" className="">*/}
                {/*<Input type="text" className="form-control-sm" value="ตลาดสด" />*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*<Col xs="12" md="6">*/}
                {/*<ul className="data-detail">*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</CardBody>*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*<Col xs="12" md="6">*/}
                {/*<Card>*/}
                {/*<CardHeader>*/}
                {/*<strong>2.6 ภาระผูกพัน</strong>*/}
                {/*</CardHeader>*/}
                {/*<CardBody>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ไม่มี</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ให้เช่า</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ติดจำนอง</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ติดจำนอง</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" >*/}
                {/*<strong>คู่สัญญา</strong> บมจ.ธนาคารทหารไทย*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</CardBody>*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*<hr/>*/}

                {/*<Row>*/}
                {/*<Col xs="12" md="6">*/}
                {/*<Card>*/}
                {/*<CardHeader>*/}
                {/*<strong>2.7 ราคาซื้อขายที่ดิน ไร่/ตรว.</strong>*/}
                {/*</CardHeader>*/}
                {/*<CardBody>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="7" >*/}
                {/*<strong>ราคาซื้อขายที่ดิน ไร่/ตรว.</strong> 10,000*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</CardBody>*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*<Col xs="12" md="6">*/}
                {/*<Card>*/}
                {/*<CardHeader>*/}
                {/*<strong>2.8 ศักยภาพ</strong>*/}
                {/*</CardHeader>*/}
                {/*<CardBody>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">สูง</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5" className="">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ต่ำ</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">กลาง</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="2" className="checkbox-other">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">อื่นๆ</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*<Col xs="4" className="">*/}
                {/*<Input type="text" className="form-control-sm" value="ดีมาก" />*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</CardBody>*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*<hr/>*/}

                {/*<Row>*/}
                {/*<Col xs="12" md="6">*/}
                {/*<Card>*/}
                {/*<CardHeader>*/}
                {/*<strong>2.9 ภาระและสิทธิอื่นๆเหนือที่ดิน</strong>*/}
                {/*</CardHeader>*/}
                {/*<CardBody>*/}
                {/*<Row>*/}
                {/*<Col xs="12" md="12">*/}
                {/*<ul className="data-detail">*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="5">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" checked />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">ไม่มี</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Row>*/}
                {/*<Col xs="3" className="labelSearch">*/}
                {/*</Col>*/}
                {/*<Col xs="2" className="checkbox-other">*/}
                {/*<FormGroup check className="checkbox">*/}
                {/*<Input className="form-check-input" type="checkbox" disabled name="checkbox1" value="option1" />*/}
                {/*<Label check className="form-check-label" htmlFor="checkbox1">มี</Label>*/}
                {/*</FormGroup>*/}
                {/*</Col>*/}
                {/*<Col xs="7" className="">*/}
                {/*<Input type="textarea" name="textarea-input" id="textarea-input" rows="5"*/}
                {/*placeholder="Content..." value="หนี้ร้อยล้าน" />*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</CardBody>*/}
                {/*</Card>*/}
                {/*</Col>*/}
                {/*</Row>*/}
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col xs="12">
                    <SearchResult textHeader={'3.1 รายละเอียดการประเมินราคา'}>
                      <Row>
                        <Col xs="12">
                          <strong>ราคาประเมินราชการ</strong>
                        </Col>
                      </Row>
                      <br/>
                      <Row>
                        <Col xs="12">
                          <ContentTable headers={data.detailDataGuarantee.detailEstimate.valuationDetails[0].header} body={data.detailDataGuarantee.detailEstimate.valuationDetails[0].body} hideFilter={true} />
                        </Col>
                      </Row>
                    </SearchResult>
                  </Col>
                </Row>
                <Row>
                  <Col xs="6">
                    <Card>
                      <CardHeader>
                        <strong>3.2 รายละเอียดราคาประเมิน</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="12">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    วันที่ประเมิน :
                                  </Col>
                                  <Col xs="6">
                                    01/04/2561
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    เลขที่ซอง :
                                  </Col>
                                  <Col xs="6">
                                    000001
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    สถานที่เก็บรักษา :
                                  </Col>
                                  <Col xs="6">
                                    -
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    ราคาที่ประเมิน :
                                  </Col>
                                  <Col xs="6">
                                    10,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    ราคาประเมิน (Original) :
                                  </Col>
                                  <Col xs="6">
                                    10,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    ประเภทการประเมิน :
                                  </Col>
                                  <Col xs="6">
                                    ประเมินภายใน
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    Marget Price :
                                  </Col>
                                  <Col xs="6">
                                    10,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    Marget Price Original :
                                  </Col>
                                  <Col xs="6">
                                    10,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    มูลค่าสปส.ทำประกัน :
                                  </Col>
                                  <Col xs="6">
                                    10,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    มูลค่าสปส.ทำประกัน Original :
                                  </Col>
                                  <Col xs="6">
                                    10,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    วันที่ประเมินครั้งก่อน :
                                  </Col>
                                  <Col xs="6">
                                    01/04/2560
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    ราคาประเมินครั้งก่อน :
                                  </Col>
                                  <Col xs="6">
                                    9,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    ราคาประเมินครั้งก่อน Original :
                                  </Col>
                                  <Col xs="6">
                                    9,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    ประเภทการประเมินครั้งก่อน :
                                  </Col>
                                  <Col xs="6">
                                    ประเมินภายใน
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    ความถี่ในการประเมิน :
                                  </Col>
                                  <Col xs="6">
                                    6 เดือน
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    หมายเลขงานประเมิน :
                                  </Col>
                                  <Col xs="6">
                                    000001
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    Key By :
                                  </Col>
                                  <Col xs="6">
                                    AUTO
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    Key Date :
                                  </Col>
                                  <Col xs="6">
                                    01/01/2559
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    Update By :
                                  </Col>
                                  <Col xs="6">
                                    10001 - นายธนาคาร ซื่อสัตย์
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    Update Date :
                                  </Col>
                                  <Col xs="6">
                                    01/01/2559
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    สาขา/ฝ่ายงาน :
                                  </Col>
                                  <Col xs="6">
                                    0001
                                  </Col>
                                </Row>
                              </li>

                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    เป็นหลักประกันร่วม :
                                  </Col>
                                  <Col xs="6">
                                    ไม่ใช่
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    จำนวนลูก :
                                  </Col>
                                  <Col xs="6">
                                    2 คน
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" md="6">
                    <Card>
                      <CardHeader>
                        <strong>3.3 ราคาซื้อ/ขายทรัพย์ตามตลาด</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12" md="12">
                            <ul className="data-detail">
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    ราคาซื้อ/ขายทรัพย์ :
                                  </Col>
                                  <Col xs="6">
                                    10,000,000.00 บาท
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    วันที่ซื้อ/ขาย :
                                  </Col>
                                  <Col xs="6">
                                    01/04/2560
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    LTV :
                                  </Col>
                                  <Col xs="6">
                                    -
                                  </Col>
                                </Row>
                              </li>
                              <li>
                                <Row>
                                  <Col xs="6" className="labelSearch">
                                    วันที่บันทึก LTV :
                                  </Col>
                                  <Col xs="6">
                                    -
                                  </Col>
                                </Row>
                              </li>
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*<Row>*/}
                              {/*<Col xs="6" className="labelSearch">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*<Col xs="6">*/}
                              {/*&nbsp;*/}
                              {/*</Col>*/}
                              {/*</Row>*/}
                              {/*</li>*/}
                            </ul>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </React.Fragment>
    );

    if(this.state.viewDetailGuarantee){
      render = (
        <React.Fragment>
          {dataDetailGuarantee}
          {navButtonViewDetail}
          <br/>
        </React.Fragment>
      );
    }else if(this.state.viewDetail){
      render = (
        <React.Fragment>
          {dataDetailAppraise}
          {navButtonViewDetail}
          <br/>
        </React.Fragment>
      );
    }else{
      if(this.state.searchEnable){
        searchResult = (
          <Row>
            <Col xs="12">
              <SearchResult textHeader={'ข้อมูลรายการประเมิน'}>
                <ContentTable headers={this.state.resultSearch.header} body={this.state.resultSearch.body} viewDetail={this.viewDetail}  />
              </SearchResult>
            </Col>
          </Row>
        );
      }

      render = (
        <React.Fragment>
          <div>
            <SearchForm clickSearch={this.search} showSearch={this.state.showSearch} toggleSearch={this.formToggleShowSearch("showSearch")} searchForm={this.state.searchForm}/>
          </div>
          {searchResult}
        </React.Fragment>
      );
    }

    return (
    <React.Fragment>
      {render}
    </React.Fragment>
    );
  }

};

export default Appraise;