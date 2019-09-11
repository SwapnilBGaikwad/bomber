import React from 'react'
import GameCanvas from "./GameCanvas";

class GameApp extends React.Component {
    constructor(props) {
        super(props);
        this.height = 10;
        this.width = 18;
        this.xFactor = 1;
        this.yFactor = 1;
        this.state = {x: 1, y: 1}
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                x: this.getNextX(this.state.x), y: this.getNextY(this.state.y)
            });
        }, 100);
    }

    getNextX(x) {
        if (x === this.width - 1 || x === 0) {
            this.xFactor = -1 * this.xFactor;
        }
        return x + this.xFactor;
    }

    getNextY(y) {
        if (y === this.height - 1 || y === 0) {
            this.yFactor = -1 * this.yFactor;
        }
        return y + this.yFactor;
    }

    render() {
        let {x, y} = this.state;
        return (
            <GameCanvas height={600} width={1080} x={x} y={y}/>
        );
    }
}

export default GameApp;