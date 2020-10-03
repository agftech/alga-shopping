import React, { useState } from "react";
import Checkbox from "../../shared/Checkbox";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";

import { Wrapper, Container } from "./App.styles";

function App() {
	const [selectProduct, setSelectProduct] = useState(true);
	const [listProduct, setListProduct] = useState(false);

	return (
		<Wrapper>
			<Container>
				<AppHeader />
				<AppContainer
					left={
						<div>
							produtos disponiveis:
							<Checkbox
								value={selectProduct}
								title='product'
								onClick={() => setSelectProduct(!selectProduct)}
							/>
						</div>
					}
					middle={
						<div>
							sua lista de compras
							<Checkbox
								value={listProduct}
								title='list'
								onClick={() => setListProduct(!listProduct)}
							/>
						</div>
					}
					right={
						<div>
							estatisticas
							<LineChart />
						</div>
					}
				/>
			</Container>
		</Wrapper>
	);
}

export default App;
