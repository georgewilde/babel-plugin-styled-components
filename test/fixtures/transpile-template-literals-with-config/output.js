"use strict";

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Named = _styledComponents["default"].div.withConfig({
  displayName: "code__Named",
  componentId: "sc-__sc-1a3jqhg-0"
})(["width:100%;"]);

var NamedWithInterpolation = _styledComponents["default"].div.withConfig({
  displayName: "code__NamedWithInterpolation",
  componentId: "sc-__sc-1a3jqhg-1"
})(["color:", ";"], function (color) {
  return props.color;
});

var Wrapped = (0, _styledComponents["default"])(Inner).withConfig({
  displayName: "code__Wrapped",
  componentId: "sc-__sc-1a3jqhg-2"
})(["color:red;"]);

var Foo = _styledComponents["default"].div.withConfig({
  displayName: "code__Foo",
  componentId: "sc-__sc-1a3jqhg-3"
})({
  color: 'green'
});
