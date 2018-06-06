import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

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

class Blank extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Blank;
