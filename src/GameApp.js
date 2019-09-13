import React from 'react'
import GameCanvas from "./GameCanvas";
import ScoreBoard from "./ScoreBoard";

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
        this.state = {x: 20, y: 20, bar: 0, score: 0};
        this.oldTimeStamp = 0;
        this.gameOver = false;
    }

    componentDidMount() {
        document.onkeydown = this.keyPressed.bind(this);
        window.requestAnimationFrame(this.loop.bind(this));
    }

    loop(timeStamp) {
        if (this.gameOver) {
            return;
        }
        window.requestAnimationFrame(this.loop.bind(this));
        let secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        if (secondsPassed >= 0.01) {
            this.renderCircleState();
            this.oldTimeStamp = timeStamp;
        }
    }

    keyPressed(event) {
        event = event || window.event;
        event.preventDefault();
        if (event.keyCode === 37) {
            this.setState({
                bar: this.state.bar - 8
            });
            return;
        }
        if (event.keyCode === 39) {
            this.setState({
                bar: this.state.bar + 8
            });
        }
    }

    renderCircleState() {
        if (this.state.y === 0) {
            this.gameOver = true;
            alert("Game over :(");
            return
        }
        let {x, y, bar} = this.state;
        if (this.isScore(x, y, bar)) {
            console.log('Increase score');
            this.setState({
                score: this.state.score + 1
            });
            this.yFactor = -1 * this.yFactor;
        }
        this.setState({
            x: this.getNextX(this.state.x),
            y: this.getNextY(this.state.y)
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

    isScore(x, y, bar) {
        x = this.radius + 2 * (x - this.radius / 2);
        y = this.height - this.radius - 2 * (y - this.radius / 2);
        return x >= bar && x <= (bar + 100) && y === (this.height - 20);
    }

    render() {
        let {x, y, bar} = this.state;
        return (
            <div>
                <GameCanvas height={this.height} width={this.width} x={x} y={y} radius={this.radius} barPosition={bar}/>
                <ScoreBoard score={this.state.score} width={500} height={this.height}/>
            </div>
        );
    }
}

export default GameApp;