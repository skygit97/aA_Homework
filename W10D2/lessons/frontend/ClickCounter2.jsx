import React, { useState } from "react";
import Counts from "./Counts2"

export default function ClickCounter() {
	const [count, setCount] = useState(0);
	const [prevCounts, setPrevCounts] = useState([]);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
			{count}
			<br />
			<button onClick={() => {
        setPrevCounts(prevCounts => [...prevCounts, count]); setCount(0)}
      }>
				Reset
			</button>
      <Counts prevCounts={prevCounts} />
		</div>
	);
}
