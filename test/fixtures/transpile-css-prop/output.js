"use strict";

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: blue;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _StyledP = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP",
  componentId: "sc-__fut3pu-0"
})(["flex:1;"]);

/*
 * Basic fixtures
 */
var StaticString = function StaticString(p) {
  return <_StyledP>A</_StyledP>;
};

var _StyledP2 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP2",
  componentId: "sc-__fut3pu-1"
})(["flex:1;"]);

var StaticTemplate = function StaticTemplate(p) {
  return <_StyledP2>
    A
  </_StyledP2>;
};

var _StyledP3 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP3",
  componentId: "sc-__fut3pu-2"
})({
  color: 'blue'
});

var ObjectProp = function ObjectProp(p) {
  return <_StyledP3>A</_StyledP3>;
};

var _StyledP4 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP4",
  componentId: "sc-__fut3pu-3"
})(["flex:1;"]);

var NoChildren = function NoChildren(p) {
  return <_StyledP4 />;
};

var _StyledP5 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP5",
  componentId: "sc-__fut3pu-4"
})(["color:blue;"]);

var CssHelperProp = function CssHelperProp(p) {
  return <_StyledP5>
    A
  </_StyledP5>;
};
/*
 * Dynamic prop
 */


var _StyledParagraph = (0, _styledComponents["default"])(Paragraph).withConfig({
  displayName: "code___StyledParagraph",
  componentId: "sc-__fut3pu-5"
})(["flex:1"]);

var CustomComp = function CustomComp(p) {
  return <_StyledParagraph>H</_StyledParagraph>;
};

var _StyledP6 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP6",
  componentId: "sc-__fut3pu-6"
})(["", ""], function (p) {
  return p._css;
});

var DynamicProp = function DynamicProp(p) {
  return <_StyledP6 _css={props.cssText}>H</_StyledP6>;
};

var _StyledP7 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP7",
  componentId: "sc-__fut3pu-7"
})(["background:", ";"], function (p) {
  return p._css2;
});

var LocalInterpolation = function LocalInterpolation(p) {
  return <_StyledP7 _css2={props.bg}>
    H
  </_StyledP7>;
};

var _StyledP8 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP8",
  componentId: "sc-__fut3pu-8"
})(["color:", ";"], function (props) {
  return props.theme.a;
});

var FuncInterpolation = function FuncInterpolation(p) {
  return <_StyledP8>
    H
  </_StyledP8>;
};

var radius = 10;

var _StyledP9 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP9",
  componentId: "sc-__fut3pu-9"
})(["border-radius:", "px;"], radius);

var GlobalInterpolation = function GlobalInterpolation(p) {
  return <_StyledP9>
    H
  </_StyledP9>;
};

var _StyledP10 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP10",
  componentId: "sc-__fut3pu-10"
})(["color:", ";"], function (p) {
  return p._css3;
});

var LocalCssHelperProp = function LocalCssHelperProp(p) {
  return <_StyledP10 _css3={p.color}>
    A
  </_StyledP10>;
};

var _StyledP11 = (0, _styledComponents["default"])("p").withConfig({
  displayName: "code___StyledP11",
  componentId: "sc-__fut3pu-11"
})(["color:", ";"], function (props) {
  return props.theme.color;
});

var DynamicCssHelperProp = function DynamicCssHelperProp(p) {
  return <_StyledP11>
    A
  </_StyledP11>;
};

var _StyledButtonGhost = (0, _styledComponents["default"])(Button.Ghost).withConfig({
  displayName: "code___StyledButtonGhost",
  componentId: "sc-__fut3pu-12"
})(["flex:1"]);

var CustomCompWithDot = function CustomCompWithDot(p) {
  return <_StyledButtonGhost>H</_StyledButtonGhost>;
};

var _StyledButtonGhostNew = (0, _styledComponents["default"])(Button.Ghost.New).withConfig({
  displayName: "code___StyledButtonGhostNew",
  componentId: "sc-__fut3pu-13"
})(["flex:1"]);

var NestedCompWithDot = function NestedCompWithDot(p) {
  return <_StyledButtonGhostNew>H</_StyledButtonGhostNew>;
};

var _StyledButtonGhost2 = (0, _styledComponents["default"])(button.ghost).withConfig({
  displayName: "code___StyledButtonGhost2",
  componentId: "sc-__fut3pu-14"
})(["flex:1"]);

var CustomCompWithDotLowerCase = function CustomCompWithDotLowerCase(p) {
  return <_StyledButtonGhost2>H</_StyledButtonGhost2>;
};

var _StyledButtonGhost3 = (0, _styledComponents["default"])("button-ghost").withConfig({
  displayName: "code___StyledButtonGhost3",
  componentId: "sc-__fut3pu-15"
})(["flex:1"]);

var CustomElement = function CustomElement(p) {
  return <_StyledButtonGhost3>H</_StyledButtonGhost3>;
};
/* styled component defined after function it's used in */


var EarlyUsageComponent = function EarlyUsageComponent(p) {
  return <_StyledThing />;
};

var Thing3 = styled.div(_templateObject());

var _StyledThing = (0, _styledComponents["default"])(Thing3).withConfig({
  displayName: "code___StyledThing",
  componentId: "sc-__fut3pu-16"
})(["color:red;"]);
