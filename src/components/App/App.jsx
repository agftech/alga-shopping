import React, { useState } from "react";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import ShoppingList from "../ShoppingList";
import productsMock from "../../mocks/products.json";

import { Wrapper, Container } from "./App.styles";

function App() {
	const [products, setProducts] = useState(productsMock.products);
	const colors = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

	function handleToggle(id) {
		const newProducts = products.map((product) =>
			product.id === id ? { ...product, checked: !product.checked } : product
		);
		setProducts(newProducts);
	}

	return (
		<Wrapper>
			<Container>
				<AppHeader />
				<AppContainer
					left={
						<ShoppingList
							title='Produtos Disponíveis'
							products={products}
							onToggle={handleToggle}
						/>
					}
					middle={
						<ShoppingList
							title='Sua lista de compras'
							products={products}
							onToggle={handleToggle}
						/>
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
