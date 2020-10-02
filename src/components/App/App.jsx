import React from "react";
import Checkbox from "../../shared/Checkbox";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";

import { Wrapper, Container } from "./App.styles";

function App() {
	return (
		<Wrapper>
			<Container>
				<AppHeader />
				<AppContainer
					left={
						<div>
							produtos disponiveis:
							<Checkbox value='product' title='product' onClick={() => {}} />
						</div>
					}
					middle={
						<div>
							sua lista de compras
							<Checkbox value='list' title='list' onClick={() => {}} />
						</div>
					}
					right={
						<div>
							estatisticas
							<Checkbox value='stats' title='stats' onClick={() => {}} />
						</div>
					}
				/>
			</Container>
		</Wrapper>
	);
}

export default App;
