import React, { Component } from "react";

class Game extends Component {

    state = {
        array: [
            {
                id: "1",
                img: require("./1.png"),
            },
            {
                id: "2",
                img: require("./2.png"),
            },
            {
                id: "3",
                img: require("./3.png"),
            },
            {
                id: "4",
                img: require("./4.png"),
            },
            {
                id: "5",
                img: require("./5.png"),
            },
            {
                id: "6",
                img: require("./6.png"),
            },
            {
                id: "7",
                img: require("./7.png"),
            },
            {
                id: "8",
                img: require("./8.png"),
            },
            {
                id: "9",
                img: require("./9.png"),
            }
        ],
        score: 0,
        clicked: []
    };

    handleClick = (event) => {
        const clickedArray = this.state.clicked;
        this.shuffle(this.state.array);

        if (clickedArray.indexOf(event.target.id) == -1) {
            this.state.score++;
            clickedArray.push(event.target.id);
            console.log(clickedArray);
            this.setState({ clicked: clickedArray })
        }

        else {
            this.setState({ clicked: [] });
            alert("Your final score was: " + this.state.score)
            this.setState({ score: 0 });
        }
    }

    shuffle(arr) {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        this.setState({ array: arr });
    };

    render() {
        return (
            <div>

                <div className="container">

                    <div className="row">
                        <h3>
                            Score: {this.state.score}
                        </h3>
                    </div>

                    {/* Column 1 */}
                    <div className="row">
                        <img className="col-sm item" style={{ maxHeight: "200px" }} src={this.state.array[0].img} onClick={this.handleClick} id={this.state.array[0].id} />
                        <img className="col-sm item" style={{ maxHeight: "200px" }} src={this.state.array[1].img} onClick={this.handleClick} id={this.state.array[1].id} />
                        <img className="col-sm item" style={{ maxHeight: "200px" }} src={this.state.array[2].img} onClick={this.handleClick} id={this.state.array[2].id} />
                    </div>

                    {/* Column 2 */}
                    <div className="row">
                        <img className="col-sm item" style={{ maxHeight: "200px" }} src={this.state.array[3].img} onClick={this.handleClick} id={this.state.array[3].id} />
                        <img className="col-sm item" style={{ maxHeight: "200px" }} src={this.state.array[4].img} onClick={this.handleClick} id={this.state.array[4].id} />
                        <img className="col-sm item" style={{ maxHeight: "200px" }} src={this.state.array[5].img} onClick={this.handleClick} id={this.state.array[5].id} />
                    </div>

                    {/* Column 3 */}
                    <div className="row">
                        <img className="col-sm item" style={{ maxHeight: "200px" }} src={this.state.array[6].img} onClick={this.handleClick} id={this.state.array[6].id} />
                        <img className="col-sm item" style={{ maxHeight: "200px" }} src={this.state.array[7].img} onClick={this.handleClick} id={this.state.array[7].id} />
                        <img className="col-sm item" style={{ maxHeight: "200px" }} src={this.state.array[8].img} onClick={this.handleClick} id={this.state.array[8].id} />
                    </div>

                </div>
            </div>
        )
    }
}

export default Game;