import React, { useState } from "react";

export default function Calculator() {
	const [result, setResult] = useState(0);
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");

	const clear = () => {
		setResult(0), setNum1(""), setNum2("");
	};

	const add = () => {
		setResult(num1 + num2);
	};

	const subtract = () => {
		setResult(num1 - num2);
	};

	const multiply = () => {
		setResult(num1 * num2);
	};

	const divide = () => {
		setResult(num1 / num2);
	};

	return (
		<div>
			<h1>{result}</h1>
			<input
				onChange={(e) =>
					setNum1(e.target.value ? parseInt(e.target.value) : "")
				}
				value={num1}
			/>
			<input
				onChange={(e) =>
					setNum2(e.target.value ? parseInt(e.target.value) : "")
				}
				value={num2}
			/>
			<button onClick={clear}>Clear</button>
			<br />
			<button onClick={add}>+</button>
			<button onClick={subtract}>-</button>
			<button onClick={multiply}>x</button>
			<button onClick={divide}>/</button>
		</div>
	);
}
