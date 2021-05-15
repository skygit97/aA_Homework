import React from "react";
import Counts from "./Counts"

class ClickCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
      prevCounts: []
		};

		this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({ count: this.state.count + 1 });
	}

  handleReset(e) {
    e.preventDefault();
    const { prevCounts, count } = this.state;
    prevCounts.push(count);
    this.setState({ count: 0, prevCounts })
  }

	render() {
    const { prevCounts, count } = this.state;

		return (
			<div>
				<button onClick={this.handleClick}>Click Me</button>
				<span>{count}</span>
        <br />
				<button onClick={this.handleReset}>Reset</button>
        <Counts prevCounts={prevCounts} />
			</div>
		);
	}
}

export default ClickCounter;


