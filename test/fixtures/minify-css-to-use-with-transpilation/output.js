"use strict";

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Simple = _styledComponents["default"].div.withConfig({
  displayName: "code__Simple",
  componentId: "sc-__sc-1tswzq-0"
})(["width:100%;"]);

var Interpolation = _styledComponents["default"].div.withConfig({
  displayName: "code__Interpolation",
  componentId: "sc-__sc-1tswzq-1"
})(["content:\"  ", "  \";"], function (props) {
  return props.text;
});

var SpecialCharacters = _styledComponents["default"].div.withConfig({
  displayName: "code__SpecialCharacters",
  componentId: "sc-__sc-1tswzq-2"
})(["content:\"  ", "  \";color:red;"], function (props) {
  return props.text;
});

var Comment = _styledComponents["default"].div.withConfig({
  displayName: "code__Comment",
  componentId: "sc-__sc-1tswzq-3"
})(["color:red;"]);

var Parens = _styledComponents["default"].div.withConfig({
  displayName: "code__Parens",
  componentId: "sc-__sc-1tswzq-4"
})(["&:hover{color:blue;}"]);
