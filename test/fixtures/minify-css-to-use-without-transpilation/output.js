import styled from 'styled-components';
const Simple = styled.div.withConfig({
  displayName: "code__Simple",
  componentId: "sc-__rom8t9-0"
})(["width:100%;"]);
const Interpolation = styled.div.withConfig({
  displayName: "code__Interpolation",
  componentId: "sc-__rom8t9-1"
})(["content:\"https://test.com/", "\";"], props => props.endpoint);
const SpecialCharacters = styled.div.withConfig({
  displayName: "code__SpecialCharacters",
  componentId: "sc-__rom8t9-2"
})(["content:\"  ", "  \";color:red;"], props => props.text);
const Comment = styled.div.withConfig({
  displayName: "code__Comment",
  componentId: "sc-__rom8t9-3"
})(["width:100%;color:red;"]);
const Parens = styled.div.withConfig({
  displayName: "code__Parens",
  componentId: "sc-__rom8t9-4"
})(["&:hover{color:blue;}color:red;"]);
const UrlComments = styled.div.withConfig({
  displayName: "code__UrlComments",
  componentId: "sc-__rom8t9-5"
})(["color:red;background:red;border:1px solid green;"]);
