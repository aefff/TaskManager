"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function App() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Welcome to the Task Manager"), /*#__PURE__*/_react["default"].createElement("p", null, "Start managing your tasks here!"));
}
_reactDom["default"].render(/*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('app'));
