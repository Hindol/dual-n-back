import * as React from 'react';
import './Grid.css';

export interface IProps {
    columns: number;
    rows: number;
}

class Grid extends React.Component<IProps, object> {

    public render() {
        const rows = [];
        for (let i = 0; i < this.props.rows; ++i) {
            const columns = [];
            for (let j = 0; j < this.props.columns; ++j) {
                columns.push(
                    <div className={"grid-cell grid-" + Math.floor(100 / this.props.columns)} key={j + 1}>
                        <div className="square one square-100">{i * this.props.columns + j + 1}</div>
                    </div>
                );
            }
            rows.push(
                <div className="grid" key={i + 1}>
                    {columns}
                </div>
            );
        }

        return (
            <div className="grid-container">
                {rows}
            </div>
        );
    }
}

export default Grid;
