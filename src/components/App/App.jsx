import React from "react";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";

import { Wrapper, Container } from "./App.styles";

function App() {
	return (
		<Wrapper>
			<Container>
				<AppHeader />
				<AppContainer
					left={<div>produtos disponiveis:</div>}
					middle={<div>sua lista de compras</div>}
					right={<div>estatisticas</div>}
				/>
			</Container>
		</Wrapper>
	);
}

export default App;
