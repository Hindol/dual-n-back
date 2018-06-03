import * as React from 'react';
import { Col, Row } from 'reactstrap';

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
                    <Col key={j + 1}>{i * this.props.columns + j + 1}</Col>
                );
            }
            rows.push(
                <Row key={i + 1}>
                    {columns}
                </Row>
            );
        }

        return (
            <div id="grid">
                {rows}
            </div>
        );
    }
}

export default Grid;
