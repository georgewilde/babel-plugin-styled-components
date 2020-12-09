import styled from 'styled-components';
const WithAttrs = styled.div.attrs({
  some: 'value'
}).withConfig({
  displayName: "code__WithAttrs",
  componentId: "sc-__sc-15g1t6m-0"
})([""]);
const WithAttrsWrapped = styled(Inner).attrs({
  some: 'value'
}).withConfig({
  displayName: "code__WithAttrsWrapped",
  componentId: "sc-__sc-15g1t6m-1"
})([""]);
