const styled_default = require('styled-components/native');

const TestNormal = styled.div.withConfig({
  displayName: "code__TestNormal",
  componentId: "sc-__sc-1ie7zu4-0"
})(["width:100%;"]);
const Test = styled_default.default.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-__sc-1ie7zu4-1"
})(["width:100%;"]);
const TestCallExpression = styled_default.default(Test).withConfig({
  displayName: "code__TestCallExpression",
  componentId: "sc-__sc-1ie7zu4-2"
})(["height:20px;"]);
