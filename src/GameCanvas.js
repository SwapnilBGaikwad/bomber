import React from 'react'

class GameCanvas extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        let {x, y} = this.props;
        this.drawCircle(x, y);
    }

    drawCircle(x, y) {
        let {height, width} = this.props;
        let canvas = this.refs.canvasId;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(30 + 60 * x, this.props.height - 30 - 60 * y, 30, 0, 2 * Math.PI);
        ctx.stroke();
    }

    render() {
        let {height, width} = this.props;
        return (
            <canvas id={"canvas-id"} ref={"canvasId"} height={height} width={width}
                    style={{border: "5px solid"}}>
            </canvas>
        );
    }
}

export default GameCanvas;