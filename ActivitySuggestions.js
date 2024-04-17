import {ActivitySuggestionsModel} from "./ActivitySuggestionsModel.js";
import {ActivitySuggestionsView} from "./ActivitySuggestionsView.js";
import {ActivitySuggestionsController} from "./ActivitySuggestionsController.js";


let as_model = new ActivitySuggestionsModel();
let as_controller = new ActivitySuggestionsController(as_model);
let as_view = new ActivitySuggestionsView(as_model, as_controller);
as_controller.connectView(as_view);
