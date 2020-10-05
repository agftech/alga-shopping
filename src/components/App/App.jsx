import React, { useState } from "react";
import Checkbox from "../../shared/Checkbox";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import ShoppingList from "../ShoppingList";

import { Wrapper, Container } from "./App.styles";

function App() {
	const [listProduct, setListProduct] = useState(false);
	const colors = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

	return (
		<Wrapper>
			<Container>
				<AppHeader />
				<AppContainer
					left={<ShoppingList />}
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
							<LineChart color={colors[0]} title='saudável' percentage={80} />
							<LineChart
								color={colors[1]}
								title='não saudável'
								percentage={20}
							/>
							<LineChart color={colors[2]} title='limpeza' percentage={35} />
							<LineChart color={colors[3]} title='condimentos' percentage={5} />
							<LineChart color={colors[4]} title='outros' percentage={15} />
						</div>
					}
				/>
			</Container>
		</Wrapper>
	);
}

export default App;
