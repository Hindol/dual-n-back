import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import Grid from './Grid';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container>
          <Row>
            <Col xs={{size: 6, offset: 3}}>
              <Grid rows={3} columns={4}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
