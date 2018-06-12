/**
 * Created by olewithmore on 6/12/2018.
 */

import React from 'react';
import classes from './Input.css';

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

const input = ( props ) => {
  let inputElement = null;
  let inpElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch ( props.elementType ) {
    case ( 'input' ):
      inpElement = <Input
        type="text"
        className={props.classes}
        placeholder={props.placeholder}
        onChange={props.changed} />;
      break;

    case ( 'date' ):
      inpElement = <Input
        type="date"
        className={props.classes}
        onChange={props.changed} />;
      break;
    case ( 'textarea' ):
      inputElement = <textarea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
      break;
    case ( 'select' ):
      // inputElement = (
      //   <select
      //     className={inputClasses.join(' ')}
      //     value={props.value}
      //     onChange={props.changed}>
      //     {props.elementConfig.options.map(option => (
      //       <option key={option.value} value={option.value}>
      //         {option.displayValue}
      //       </option>
      //     ))}
      //   </select>
      // );

      inpElement = (
        <Select
          name={props.name}
          value={props.value}
          options={props.options}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;
  }

  return (
    <React.Fragment>
        {inpElement}
    </React.Fragment>
  );

};

export default input;