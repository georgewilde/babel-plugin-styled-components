import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-__nvnkd8-0"
})(["width:100%;"]);
const Test2 = true ? styled.div.withConfig({
  displayName: "code__Test2",
  componentId: "sc-__nvnkd8-1"
})([""]) : styled.div.withConfig({
  displayName: "code__Test2",
  componentId: "sc-__nvnkd8-2"
})([""]);
const styles = {
  One: styled.div.withConfig({
    displayName: "code__One",
    componentId: "sc-__nvnkd8-3"
  })([""])
};
let Component;
Component = styled.div.withConfig({
  displayName: "code__Component",
  componentId: "sc-__nvnkd8-4"
})([""]);
const WrappedComponent = styled(Inner).withConfig({
  displayName: "code__WrappedComponent",
  componentId: "sc-__nvnkd8-5"
})([""]);
const WrappedComponent2 = styled.div.withConfig({
  displayName: "code__WrappedComponent2",
  componentId: "sc-__nvnkd8-6"
})({});
const WrappedComponent3 = styled(Inner).withConfig({
  displayName: "code__WrappedComponent3",
  componentId: "sc-__nvnkd8-7"
})({});
const WrappedComponent4 = styled(Inner).attrs(() => ({
  something: 'else'
})).withConfig({
  displayName: "code__WrappedComponent4",
  componentId: "sc-__nvnkd8-8"
})({});
const WrappedComponent5 = styled.div.attrs(() => ({
  something: 'else'
})).withConfig({
  displayName: "code__WrappedComponent5",
  componentId: "sc-__nvnkd8-9"
})({});
const WrappedComponent6 = styled.div.attrs(() => ({
  something: 'else'
})).withConfig({
  displayName: "code__WrappedComponent6",
  componentId: "sc-__nvnkd8-10"
})([""]);
