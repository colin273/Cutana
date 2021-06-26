const Action = require("../types/actions/action.js");

class RandomAction extends Action {
	run() {
		const min = Math.floor(parseFloat(this.parameters.randomNumberMinimum));
		const max = Math.floor(parseFloat(this.parameters.randomNumberMaximum));

		if (min > max) {
			return null;
		}

		return Math.floor(Math.random() * (max + 1 - min)) + min
	}
}
RandomAction.identifier = "is.workflow.actions.number.random";

module.exports = RandomAction;