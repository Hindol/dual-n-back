import * as React from 'react';
import Board from './Board';
import Flash from './Flash';
import Grid from './Grid';

export interface IProps {
    columns: number;
    rows: number;
    running: boolean;
}

export interface IState {
    board: Board;
    currentFlash?: Flash;
    running: boolean;
}

class Game extends React.Component<IProps, IState> {

    public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
        prevState.board.stop();
        const nextState: any = {};
        if (prevState.board.rows !== nextProps.rows || prevState.board.columns !== nextProps.columns) {
            nextState.board = new Board(nextProps.rows, nextProps.columns);
            nextState.running = false;
        }
        if (nextProps.running) {
            nextState.running = true;
        }
        return nextState;
    }

    constructor(props: any) {
        super(props);

        this.state = {
            board: new Board(this.props.rows, this.props.columns),
            currentFlash: undefined,
            running: this.props.running,
        }

        this.onFlash = this.onFlash.bind(this);
    }

    public componentDidMount() {
        if (this.props.running) {
            this.state.board.start(this.onFlash);
        }
    }

    public componentWillUnmount() {
        this.state.board.stop();
    }

    public componentDidUpdate(prevProps: IProps, prevState: IState, snapshot?: any) {
        if (this.props.running) {
            this.state.board.start(this.onFlash);
        }
    }

    public render() {
        console.log('Game.render() called!');
        const props: any = {};
        let optionalAudio;
        if (this.state.currentFlash) {
            props.highlight = this.state.currentFlash.position;
            optionalAudio = (
                <audio src={"http://streaming.tdiradio.com/" + (this.state.currentFlash.sound % 2 === 0 ? "house" : "classics") + ".mp3"}
                       autoPlay={this.state.running} />
            );
        }
        return (
            <div>
                <Grid rows={this.state.board.rows} columns={this.state.board.columns} {...props} />
                {optionalAudio}
            </div>
        );
    }

    private onFlash(newFlash: Flash) {
        console.log('New flash generated!');
        this.setState({ currentFlash: newFlash });
    }
}

export default Game;