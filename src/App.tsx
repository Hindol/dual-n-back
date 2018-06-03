import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import Grid from './Grid';

import logo from './logo.svg';

export interface IState {
  gridSize: number,
}

class App extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);

    this.state = {
      gridSize: 3,
    };

    this.setGridSize = this.setGridSize.bind(this);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container>
          <Row>
            <Col xs="3">
              <input type="range" min="3" max="5" className="slider" value={this.state.gridSize} onInput={this.setGridSize} onChange={this.setGridSize} />
            </Col>
            <Col xs="6">
              <Grid rows={this.state.gridSize} columns={this.state.gridSize} />
            </Col>
            <Col xs="3">Right sidebar</Col>
          </Row>
        </Container>
      </div>
    );
  }

  private setGridSize(e: any) {
    this.setState({ gridSize: e.target.value });
  }
}

export default App;
