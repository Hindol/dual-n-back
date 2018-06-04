import * as React from 'react';
import Board from './Board';
import Flash from './Flash';
import Grid from './Grid';

export interface IProps {
    columns: number;
    rows: number;
}

export interface IState {
    board: Board,
    currentFlash?: Flash
}

class Game extends React.Component<IProps, IState> {

    public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
        prevState.board.stop();
        return {
            board: new Board(nextProps.rows, nextProps.columns)
        };
    }

    constructor(props: any) {
        super(props);

        this.state = {
            board: new Board(this.props.rows, this.props.columns)
        }

        this.onFlash = this.onFlash.bind(this);
    }

    public componentDidMount() {
        this.state.board.start(this.onFlash);
    }

    public componentWillUnmount() {
        this.state.board.stop();
    }

    public componentDidUpdate() {
        this.state.board.start(this.onFlash);
    }

    public render() {
        if (this.state.currentFlash) {
            return (
                <Grid rows={this.props.rows} columns={this.props.columns} highlight={this.state.currentFlash.position} />
            );
        } else {
            return (
                <Grid rows={this.props.rows} columns={this.props.columns} />
            );
        }
    }

    private onFlash(newFlash: Flash) {
        console.log('Flash!!!');
        this.setState({ currentFlash: newFlash });
    }
}

export default Game;