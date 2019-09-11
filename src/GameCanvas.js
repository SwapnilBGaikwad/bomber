import React from 'react'

class GameCanvas extends React.Component {

    componentDidUpdate() {
        let {x, y} = this.props;
        this.drawCircle(x, y);
    }

    drawCircle(x, y) {
        let {height, width, radius} = this.props;
        let canvas = this.refs.canvasId;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        let diameter = 2 * radius;
        ctx.arc(radius + diameter * x, this.props.height - radius - diameter * y, radius, 0, 2 * Math.PI);
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