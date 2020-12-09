import s from "styled-components";
const Test = s.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-__y04hmb-0"
})(["width:100%;"]);
const Test2 = true ? s.div.withConfig({
  displayName: "code__Test2",
  componentId: "sc-__y04hmb-1"
})([""]) : s.div.withConfig({
  displayName: "code__Test2",
  componentId: "sc-__y04hmb-2"
})([""]);
const styles = {
  One: s.div.withConfig({
    displayName: "code__One",
    componentId: "sc-__y04hmb-3"
  })([""])
};
let Component;
Component = s.div.withConfig({
  displayName: "code__Component",
  componentId: "sc-__y04hmb-4"
})([""]);
const WrappedComponent = s(Inner).withConfig({
  displayName: "code__WrappedComponent",
  componentId: "sc-__y04hmb-5"
})([""]);
