import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-__sc-1x2wvvp-0"
})(["width:100%;"]);
const Test2 = styled('div').withConfig({
  displayName: "code__Test2",
  componentId: "sc-__sc-1x2wvvp-1"
})([""]);
const Test3 = true ? styled.div.withConfig({
  displayName: "code__Test3",
  componentId: "sc-__sc-1x2wvvp-2"
})([""]) : styled.div.withConfig({
  displayName: "code__Test3",
  componentId: "sc-__sc-1x2wvvp-3"
})([""]);
const styles = {
  One: styled.div.withConfig({
    displayName: "code__One",
    componentId: "sc-__sc-1x2wvvp-4"
  })([""])
};
let Component;
Component = styled.div.withConfig({
  displayName: "code__Component",
  componentId: "sc-__sc-1x2wvvp-5"
})([""]);
const WrappedComponent = styled(Inner).withConfig({
  displayName: "code__WrappedComponent",
  componentId: "sc-__sc-1x2wvvp-6"
})([""]);

class ClassComponent {}

ClassComponent.Child = styled.div.withConfig({
  displayName: "code__Child",
  componentId: "sc-__sc-1x2wvvp-7"
})([""]);
