import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-__ih6vqj-0"
})(["width:100%;"]);
const Test2 = true ? styled.div.withConfig({
  displayName: "code__Test2",
  componentId: "sc-__ih6vqj-1"
})([""]) : styled.div.withConfig({
  displayName: "code__Test2",
  componentId: "sc-__ih6vqj-2"
})([""]);
const styles = {
  One: styled.div.withConfig({
    displayName: "code__One",
    componentId: "sc-__ih6vqj-3"
  })([""])
};
let Component;
Component = styled.div.withConfig({
  displayName: "code__Component",
  componentId: "sc-__ih6vqj-4"
})([""]);
const WrappedComponent = styled(Inner).withConfig({
  displayName: "code__WrappedComponent",
  componentId: "sc-__ih6vqj-5"
})([""]);
