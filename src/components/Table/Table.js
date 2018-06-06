/**
 * Created by olewithmore on 6/6/2018.
 */
import React, { Component } from 'react';

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

    let headers = this.props.headers.map((e, i) => {
      return (
        <th key={i}>
          {e}
        </th>
      );

    });

    let body = this.props.body.map((e, i) => {
      let dataTip = (e.dataTip);
      let listTd = e.td.map((content, l) => {
        return (
          <td key={l}>
            {content}
          </td>
        );
      });
      return (
        <tr data-tip={dataTip} data-for={e.dataTipFor} key={i} onClick={() => { this.props.viewDetail(true) }}>
          {listTd}
        </tr>
      );
    });


    return (
      <React.Fragment>
        <Row>
          <Col xs="1" style={ { textAlign: 'right', paddingTop: '4px', paddingRight: '0px' } }>
            Show
          </Col>
          <Col xs="1" style={ {paddingLeft: '5px', paddingRight: '5px'}}>
              <select className="form-control form-control-sm">
                <option value="10">10</option><option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
          </Col>
          <Col xs="1" style={ { textAlign: 'left', paddingTop: '4px', paddingLeft: '0px' } }>
            entries
          </Col>
          <Col xs="5">
            &nbsp;
          </Col>
          <Col xs="4">
            <div className="form-group form-group-sm react-bs-table-search-form input-group input-group-sm">
              <input className="form-control " type="text" placeholder="Search" value="" style={ {zIndex: 0} }/>
              <span className="input-group-btn"><button className="btn btn-default btn-secondary  react-bs-table-search-clear-btn" type="button">
                <span>Clear</span>
              </button>
              </span>
            </div>
          </Col>
        </Row>
        <Table responsive size="sm">
          <thead>
            <tr>
              {headers}
            </tr>
          </thead>
          <tbody>
            {body}
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
      </React.Fragment>
    );
  }
}

export default ContentTable;