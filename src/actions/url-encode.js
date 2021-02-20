const Action = require("../types/actions/action.js");

class URLEncodeAction extends Action {
	run() {
		if (this.parameters.encodeMode === "Decode") {
			return decodeURIComponent(this.parameters.input);
		} else {
			return encodeURIComponent(this.parameters.input);
		}
	}
}
URLEncodeAction.identifier = "is.workflow.actions.urlencode";

module.exports = URLEncodeAction;