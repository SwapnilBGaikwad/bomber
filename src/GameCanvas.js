import React from 'react'

class GameCanvas extends React.Component {

    componentDidMount() {
        this.barPosition = {
            x: this.props.barPosition, y: this.props.height - 20
        };
        this.renderBar(true,false);
    }

    componentDidUpdate() {
        let {x, y} = this.props;
        this.drawCircle(x, y);
        this.barPosition = {
            x: this.props.barPosition, y: this.props.height - 20
        };
    }

    drawCircle(x, y) {
        let {height, width, radius} = this.props;
        let canvas = this.refs.canvasId;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        let diameter = 2;
        ctx.arc(radius + diameter * x, this.props.height - radius - diameter * y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        this.renderBar(true, false)
    }

    renderBar(left, move) {
        const width = 100, height = 20;
        let canvas = this.refs.canvasId;
        let ctx = canvas.getContext("2d");
        if (move) {
            if (left) {
                this.barPosition.x -= 8;
            } else {
                this.barPosition.x += 8;
            }
        }
        let {x,y} = this.barPosition;
        ctx.fillRect(x, y, width, height);
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