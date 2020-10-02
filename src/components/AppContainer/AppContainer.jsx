import React from "react";

function AppContainer({ left, middle, right }) {
	return (
		<div>
			<div>{left}</div>
			<div>{middle}</div>
			<div>{right}</div>
		</div>
	);
}

export default AppContainer;
