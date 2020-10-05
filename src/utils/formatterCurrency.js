const currencyFormatter = Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});

const formatCurrency = (value) => {
	return currencyFormatter.format(value);
};

export { formatCurrency };
