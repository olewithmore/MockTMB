/**
 * Created by olewithmore on 6/6/2018.
 */
import React, { Component } from 'react';
import './DataDetail.css';

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

class DataDetail extends Component {

  constructor(props){
    super(props);

    this.state = {
      defaultColFirst: "5",
      defaultColSecond: "7",
    };
  }

  render() {
    let ulClassName = this.props.classNameUl || "";
    let colClassNameF = this.props.classNameF || "";
    let colClassNameS = this.props.classNameS || "";
    let contentProp;

    contentProp = this.props.dataList.map((e, i) => {

      let colF = e.colF || this.state.defaultColFirst;
      let colS = e.colS || this.state.defaultColSecond;
      let contentF = e.f;
      let contentS = e.s;
      if(contentF) {
        contentF += " :";
      }else {
        contentF = <span>&nbsp;</span>
      }

      if(contentS) {
        contentS += " :";
      }else {
        contentS = <span>&nbsp;</span>
      }

      return (<li key={i}>
        <Row>
          <Col xs={colF} className={colClassNameF}>
            {contentF}
          </Col>
          <Col xs={colS} className={colClassNameS}>
            {contentS}
          </Col>
        </Row>
      </li>);
    });

    return (
            <ul className={ulClassName}>
              {contentProp}
            </ul>
    );
  }

}

export default DataDetail;