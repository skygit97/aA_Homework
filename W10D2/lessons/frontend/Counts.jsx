import React from "react";

const Counts = ({ prevCounts }) => (
	<ul>
		{prevCounts.map((count, i) => (
			<li key={i}>{count}</li>
		))}
	</ul>
);

export default Counts;

// import React from "react";

// class Counts extends React.Component {
// 	render() {
// 		return (
// 			<ul>
// 				{this.props.prevCounts.map((count, i) => (
// 					<li key={i}>{count}</li>
// 				))}
// 			</ul>
// 		);
// 	}
// }

// export default Counts;
