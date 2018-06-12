/**
 * Created by olewithmore on 6/12/2018.
 */

import React, { Component } from 'react';

import SearchForm from './SearchForm/SearchForm';
import SearchResult from '../../components/SearchResult/SearchResult';
import ContentTable from '../../components/Table/Table';
import ContentDetail from '../../components/DataDetail/DataDetail';

import classnames from 'classnames';

import {
  Col,
  Row,
  Card,
  CardBody,
  Nav, NavItem, NavLink, TabPane, TabContent
} from 'reactstrap';

class Appraise extends Component {

  constructor(props){
    super(props);

    const classNameTextRight = "text-right";
    const classNameTextCenter = "text-center";

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
                classNameTd: classNameTextCenter
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
                classNameTd: classNameTextCenter
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
                classNameTd: classNameTextCenter
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
                content: 'ไฟล์ word'
              },
              {
                content: 'ดาวน์โหลด',
                classNameTd: classNameTextCenter
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
                content: 'ไฟล์ excel.pdf'
              },
              {
                content: 'ดาวน์โหลด',
                classNameTd: classNameTextCenter
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
    let tempObject = {...this.state};
    tempObject.viewDetail = true;
    this.setState(tempObject);
  }

  backFromDetail() {
    let tempObject = {...this.state};
    tempObject.viewDetail = false;
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
                        <ContentTable headers={this.state.detailTableTab_1.header} body={this.state.detailTableTab_1.body} irregular={true}/>
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


    if(this.state.viewDetail){
      render = (
        <React.Fragment>
          {dataDetailGuarantee}
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