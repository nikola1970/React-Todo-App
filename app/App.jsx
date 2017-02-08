var React = require("react");
var ReactDOM = require("react-dom");

var TodoApp = require("TodoApp");


require("bootstrap/dist/css/bootstrap.min.css");
require("./styles/styles.scss");


ReactDOM.render(<TodoApp />, document.getElementById("app"));

