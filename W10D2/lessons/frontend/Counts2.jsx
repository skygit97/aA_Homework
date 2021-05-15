import React from "react";

export default function Counts({ prevCounts }) {

  return (
		<ul>
			{prevCounts.map((count, i) => (
				<li key={i}>{count}</li>
			))}
		</ul>
	);
}
