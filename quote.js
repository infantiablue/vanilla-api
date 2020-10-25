const axios = require("axios");

async function get_quote() {
	console.log("loading quote");
	quote = await axios
		.get("https://api.quotable.io/random")
		.then((response) => {
			console.log(response.data.content);
			console.log(response.data.author);
		})
		.catch((error) => {
			console.log(error);
		});
	console.log("finished !");
}

class Animal {
	#name = "Cat";
	#age = 0;
	get value() {
		return this.#name;
	}
	set value(newName) {
		this.#name = newName;
	}
	get age() {
		return this.#age;
	}
	inrement() {
		this.#age++;
	}
}

let c = new Animal();
console.log(c.age);
c.value = "tiger";
console.log(c.value);
