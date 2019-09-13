import React from 'react'

class ScoreBoard extends React.Component {

    componentDidUpdate() {
        let {height, width} = this.props;
        let canvas = this.refs.scoreId;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, width, height);
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("Score : " + this.props.score, canvas.width / 2, canvas.height / 2);
    }

    render() {
        let {height, width} = this.props;
        return (
            <canvas id={'scoreId'} ref={"scoreId"} width={width} height={height}/>
        );
    }
}

export default ScoreBoard;