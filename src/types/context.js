class Context {
	constructor(input) {
		this.input = input;
		this.variables = {};
		this.magicVariables = {};
		this.controlFlow = {};
		this.currentIndex = 0;
	}
}
module.exports = Context;