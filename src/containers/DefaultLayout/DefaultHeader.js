import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import DefaultHeaderDropdown  from './DefaultHeaderDropdown'
import logo from '../../assets/logo/logo_tmb.png';
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 65, alt: 'TMB' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        {/*<Nav className="d-md-down-none" navbar>*/}
          {/*<NavItem className="px-3">*/}
            {/*<NavLink href="/">Dashboard</NavLink>*/}
          {/*</NavItem>*/}
          {/*<NavItem className="px-3">*/}
            {/*<NavLink href="#">Users</NavLink>*/}
          {/*</NavItem>*/}
          {/*<NavItem className="px-3">*/}
            {/*<NavLink href="#">Settings</NavLink>*/}
          {/*</NavItem>*/}
        {/*</Nav>*/}
        <Nav className="ml-auto" navbar>
          <DefaultHeaderDropdown accnt/>
          <span>10001- นิติกรรมสัญญา ธนาคารทหารไทย &nbsp;&nbsp;&nbsp;</span>
          {/*<DefaultHeaderDropdown notif/>*/}
          {/*<DefaultHeaderDropdown tasks/>*/}
          {/*<DefaultHeaderDropdown mssgs/>*/}
          {/*<NavItem className="d-md-down-none">*/}
            {/*<NavLink href="#"><i className="icon-location-pin"></i></NavLink>*/}
          {/*</NavItem>*/}
        </Nav>
        {/*<AppAsideToggler className="d-md-down-none" />*/}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
