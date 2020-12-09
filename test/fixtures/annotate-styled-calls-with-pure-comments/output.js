import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-__sc-1joli1c-0"
})(["width:100%;"]);
const Test2 = styled('div').withConfig({
  displayName: "code__Test2",
  componentId: "sc-__sc-1joli1c-1"
})([""]);
const Test3 = true ? styled.div.withConfig({
  displayName: "code__Test3",
  componentId: "sc-__sc-1joli1c-2"
})([""]) : styled.div.withConfig({
  displayName: "code__Test3",
  componentId: "sc-__sc-1joli1c-3"
})([""]);
const styles = {
  One: styled.div.withConfig({
    displayName: "code__One",
    componentId: "sc-__sc-1joli1c-4"
  })([""])
};
let Component;
Component = styled.div.withConfig({
  displayName: "code__Component",
  componentId: "sc-__sc-1joli1c-5"
})([""]);
const WrappedComponent = styled(Inner).withConfig({
  displayName: "code__WrappedComponent",
  componentId: "sc-__sc-1joli1c-6"
})([""]);
const StyledObjectForm = styled.div.withConfig({
  displayName: "code__StyledObjectForm",
  componentId: "sc-__sc-1joli1c-7"
})({
  color: red
});
const StyledFunctionForm = styled.div.withConfig({
  displayName: "code__StyledFunctionForm",
  componentId: "sc-__sc-1joli1c-8"
})(p => ({
  color: p.color || 'red'
}));
const normalFunc = add(5, 3);
