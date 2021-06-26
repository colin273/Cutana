const Action = require("../types/actions/action.js");

function roundFloat(x) {
	const float = parseFloat(x)
	return (float > 0) ? Math.floor(float) : Math.ceil(float)
}

class RandomAction extends Action {
	run() {
		const min = roundFloat(this.parameters.randomNumberMinimum);
		const max = roundFloat(this.parameters.randomNumberMaximum);

		if (min > max) {
			return null;
		}

		return Math.floor(Math.random() * (max + 1 - min)) + min;
	}
}

RandomAction.identifier = "is.workflow.actions.number.random";

module.exports = RandomAction;