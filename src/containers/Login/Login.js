import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import logo from '../../assets/logo/logo_tmb.png';
import './Login.css';

class Login extends Component {

  onLogin () {
    this.props.history.push('/dashboard');
  }

  render() {

    let style = {
      label : {
        'fontWeight': 'bold'
      },
      blockLogo: {
        margin: '20px'
      },
      discriptions: {
        'fontSize': '20px'
      },
      container: {
        'marginTop': '25px'
      }
    };

    return (
      <div className="app flex-row" style={style.container}>
        <Container>
          <Row className="justify-content-center" style={style.blockLogo}>
            <Row>
              <img src={logo} width="120px" height="60px" alt=""/>
            </Row>
          </Row>
          <Row className="justify-content-center">
            <p style={style.discriptions}>Sign in to TMB System</p>
          </Row>
          <Row className="justify-content-center">
            <Col md="4">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <p style={style.label}>Username</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" />
                    </InputGroup>
                    <p style={style.label}>Password</p>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" />
                    </InputGroup>
                    <Row>
                      <Col xs="12" md="12" lg="12">
                        <Button color="primary" className="btn-block" onClick={() => {  this.onLogin() }}>Login</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                {/*<Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>*/}
                  {/*<CardBody className="text-center">*/}
                    {/*<div>*/}
                      {/*<h2>Sign up</h2>*/}
                      {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut*/}
                        {/*labore et dolore magna aliqua.</p>*/}
                      {/*<Button color="primary" className="mt-3" active>Register Now!</Button>*/}
                    {/*</div>*/}
                  {/*</CardBody>*/}
                {/*</Card>*/}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
