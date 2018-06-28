/**
 * Created by olewithmore on 6/6/2018.
 */
import React, { Component } from 'react';
import './Table.css';

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

class ContentTable extends Component {
  constructor(props) {
    super(props);


  }

  render() {

    let clickTr = this.props.viewDetail || function() {};
    let headers;
    let itemHeader;

    if(this.props.irregular){
      let row1 = this.props.headers[0].map((e, i) => {

        let rs = (e.ill)? 1 : 2;
        let col = (e.ill)? e.n : 1;

        return (
          <th rowSpan={rs} colSpan={col} key={i}>
            {e.text}
          </th>
        );
      });

      let row2 = this.props.headers[1].map((e, i) => {

        let rs = (e.ill)? 1 : 2;
        let col = (e.ill)? e.n : 1;

        return (
          <th rowSpan={rs} colSpan={col} key={i}>
            {e}
          </th>
        );
      });

      headers = (
        <React.Fragment>
          <tr>
            {row1}
          </tr>

          <tr>
            {row2}
          </tr>
        </React.Fragment>
      );
    }
    else{
      itemHeader = this.props.headers.map((e, i) => {
        return (
          <th key={i}>
            {e}
          </th>
        );
      });
      headers = (
        <tr>
          {itemHeader}
        </tr>
      );
    }


    let body = this.props.body.map((e, i) => {
      // let dataTip = (e.dataTip);
      let td;

      let listTd = e.td.map(({content, classNameTd, colspan, otherEvent}, l) => {
        if(content === 'searchIcon'){
          let eveClick = this.props.otherEvent || function(){};
          td = (
            <React.Fragment key={l}>
              <td className={classNameTd} key={l} onClick={() => { eveClick() }}>
                <span><i className="fa fa-search"/></span>
              </td>
            </React.Fragment>
          );
        }else {
          if(content === 'ดาวน์โหลด') { console.log("otherEvent :", otherEvent); }
          let eveClick = otherEvent || this.props.viewDetail || function(boo) {};
          td = (
            <React.Fragment key={l}>
              <td className={classNameTd} key={l} colspan={colspan} onClick={() => { eveClick(true);}}>
                <span>{content}</span>
              </td>
            </React.Fragment>
          );
        }

        return td;
      });

      // attr for data tip
      // data-tip={dataTip} data-for={e.dataTipFor}
      return (
        <tr key={i} className={e.headerClass}>
          {listTd}
        </tr>
      );
    });

    let hide = null;
    if(this.props.hideFilter) hide = "hide";

    return (
      <React.Fragment>
        <Row className={hide}>
          <Col xs="6" md="1" style={ { textAlign: 'left', paddingTop: '5px', paddingRight: '0px', fontSize: '11px' } }>
            แสดงข้อมูล
          </Col>
          <Col xs="6" md="1" style={ {paddingLeft: '5px', paddingRight: '5px'}}>
              <select className="form-control form-control-sm">
                <option value="10">10</option><option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
          </Col>
          <Col xs="0" md="6">
            &nbsp;
          </Col>
          <Col xs="12" md="4">
            <div className="form-group form-group-sm react-bs-table-search-form input-group input-group-sm">
              <input className="form-control " type="text" placeholder="Search" value="" style={ {zIndex: 0} }/>
              <span className="input-group-btn"><button className="btn btn-default btn-secondary  react-bs-table-search-clear-btn" type="button">
                <span>ล้าง</span>
              </button>
              </span>
            </div>
          </Col>
        </Row>
        <Table responsive size="sm" className="table-bordered table-hover">
          <thead className="thead-light white-space text-center">
              {headers}
          </thead>
          <tbody className="white-space">
            {body}
          </tbody>
        </Table>
        <hr/>
        <div className={hide}>
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
        </div>
      </React.Fragment>
    );
  }
}

export default ContentTable;