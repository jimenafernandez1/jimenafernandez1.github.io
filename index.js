function mostrarResultados(results) {
	const contenedor = document.querySelector(".results");
	const template = document.querySelector("#result-item-template");

	for (const r of results) {
		console.log(r);

		const imgEl = template.content.querySelector(".result-item-img");
		imgEl.src = r.thumbnail;

		const titleEl = template.content.querySelector(".result-item-title");
		titleEl.textContent = r.title;

		const conditionEl = template.content.querySelector(
			".result-item-condition"
		);
		conditionEl.textContent = r.condition;

		const sellCountEl = template.content.querySelector(
			".result-item-sell-count-num"
		);
		sellCountEl.textContent = r["sold_quantity"];

		const priceEl = template.content.querySelector(".result-item-price");
		priceEl.textContent = "$" + r.price;

		const clone = document.importNode(template.content, true);
		contenedor.appendChild(clone);
	}
}

function main() {
	const formEl = document.querySelector(".search-form");
	formEl.addEventListener("submit", function (e) {
		// podría estar en otra función
		e.preventDefault(); //evita que se recargue la página
		const palabraABuscar = e.target.buscar.value;
		fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar)
			.then((response) => response.json())
			.then((data) => mostrarResultados(data.results));
	});

	//auto-test
	//mostrarResultados([1, 2, 3]);
}

main();
