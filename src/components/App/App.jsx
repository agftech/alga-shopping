import React, { useState, useEffect } from "react";
import LineChart from "../../shared/LineChart";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import ShoppingList from "../ShoppingList";
import productsMock from "../../mocks/products.json";

import { Wrapper, Container } from "./App.styles";

import extractPercentage from "../../utils/extractPercentage";
import { formatCurrency } from "../../utils/formatterCurrency";

function App() {
	const colors = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];

	const [products, setProducts] = useState(productsMock.products);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const newSelectedProducts = products.filter((product) => product.checked);

		setSelectedProducts(newSelectedProducts);
	}, [products]);

	useEffect(() => {
		const total = selectedProducts
			.map((product) => product.price)
			.reduce((a, b) => a + b, 0);

		setTotalPrice(total);
	}, [selectedProducts]);

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
							products={selectedProducts}
							onToggle={handleToggle}
						/>
					}
					right={
						<div>
							estatísticas:
							<LineChart
								color={colors[0]}
								title='saudável'
								percentage={extractPercentage(
									selectedProducts.length,
									selectedProducts.filter((product) =>
										product.tags.includes("healthy")
									).length
								)}
							/>
							<LineChart
								color={colors[1]}
								title='não saudável'
								percentage={extractPercentage(
									selectedProducts.length,
									selectedProducts.filter((product) =>
										product.tags.includes("junk")
									).length
								)}
							/>
							<LineChart
								color={colors[2]}
								title='limpeza'
								percentage={extractPercentage(
									selectedProducts.length,
									selectedProducts.filter((product) =>
										product.tags.includes("cleaning")
									).length
								)}
							/>
							<LineChart
								color={colors[3]}
								title='condimentos'
								percentage={extractPercentage(
									selectedProducts.length,
									selectedProducts.filter((product) =>
										product.tags.includes("condiment")
									).length
								)}
							/>
							<LineChart
								color={colors[4]}
								title='outros'
								percentage={extractPercentage(
									selectedProducts.length,
									selectedProducts.filter((product) =>
										product.tags.includes("others")
									).length
								)}
							/>
							<div>
								<div>previsão de gastos:</div>
								<div>{formatCurrency(totalPrice)}</div>
							</div>
						</div>
					}
				/>
			</Container>
		</Wrapper>
	);
}

export default App;
