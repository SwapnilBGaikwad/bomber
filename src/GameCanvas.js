import React from 'react'

class GameCanvas extends React.Component {

    componentDidMount() {
        document.onkeydown = this.keyPressed.bind(this);
        this.barPosition = 0;
        this.renderBar(true,false);
    }

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
                this.barPosition -= 8;
            } else {
                this.barPosition += 8;
            }
        }
        ctx.fillRect(this.barPosition, this.props.height - 20, width, height);
    }

    keyPressed(event) {
        event = event || window.event;
        event.preventDefault();
        if (event.keyCode === 37) {
            console.log('left');
            this.renderBar(true, true);
            return;
        }
        if (event.keyCode === 39) {
            console.log('right');
            this.renderBar(false, true);
        }
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