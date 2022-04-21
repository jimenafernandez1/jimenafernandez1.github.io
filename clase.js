function main() {
	// const promesa = fetch("https://api.github.com/users/jimenafernandez1");

	// promesa.then(function (res) {
	// 	const promesaDos = res.json();

	// 	promesaDos.then(function (json) {
	// 		console.log(json);
	// 		const divEl = document.createElement("div");
	// 		divEl.textContent = json.name;
	// 		document.body.appendChild(divEl);
	// 	});
	// });

	fetch("https://api.github.com/users/jimenafernandez1")
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			const divEl = document.createElement("div");
			divEl.textContent = json.name;
			document.body.appendChild(divEl);
		});
}

main();
