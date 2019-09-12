import React from 'react'
import GameCanvas from "./GameCanvas";

class GameApp extends React.Component {
    constructor(props) {
        super(props);
        this.height = 600;
        this.width = 1080;
        this.radius = 10;
        this.h = this.height / 2 - this.radius;
        this.w = this.width / 2 - this.radius;
        this.xFactor = 1;
        this.yFactor = 1;
        this.state = {x: 1, y: 1};
        this.oldTimeStamp = 0;
    }

    componentDidMount() {
        window.requestAnimationFrame(this.loop.bind(this));
    }

    loop(timeStamp) {
        window.requestAnimationFrame(this.loop.bind(this));
        let secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        console.log("timeStamp " + timeStamp);
        console.log("oldTimeStamp " + this.oldTimeStamp);
        console.log("Diff " + secondsPassed);
        if(secondsPassed >= 0.01) {
            this.renderState();
            this.oldTimeStamp = timeStamp;
        }
    }

    renderState() {
        this.setState({
            x: this.getNextX(this.state.x), y: this.getNextY(this.state.y)
        });
    }

    getNextX(x) {
        if (x === this.w - 1 || x === 0) {
            this.xFactor = -1 * this.xFactor;
        }
        return x + this.xFactor;
    }

    getNextY(y) {
        if (y === this.h - 1 || y === 0) {
            this.yFactor = -1 * this.yFactor;
        }
        return y + this.yFactor;
    }

    render() {
        let {x, y} = this.state;
        return (
            <GameCanvas height={this.height} width={this.width} x={x} y={y} radius={this.radius}/>
        );
    }
}

export default GameApp;