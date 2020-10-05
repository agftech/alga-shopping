import React, { useState } from "react";
import Checkbox from "../../shared/Checkbox";
import { Wrapper, Title, Array } from "./ShoppingList.styles";

function ShoppingList() {
	const [selectProduct, setSelectProduct] = useState(true);
	return (
		<Wrapper>
			<Title>Produtos Disponíveis</Title>
			<Array>
				<Checkbox
					value={selectProduct}
					title='products'
					onClick={() => setSelectProduct(!selectProduct)}
				/>
			</Array>
		</Wrapper>
	);
}

export default ShoppingList;
