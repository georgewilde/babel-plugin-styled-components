import syntax from 'babel-plugin-syntax-jsx'
import pureAnnotation from './visitors/pure'
import minify from './visitors/minify'
import displayNameAndId from './visitors/displayNameAndId'
import templateLiterals from './visitors/templateLiterals'
import assignStyledRequired from './visitors/assignStyledRequired'
import transpileCssProp from './visitors/transpileCssProp'

export default function({ types: t }) {
  return {
    inherits: syntax,
    visitor: {
      Program(path, state) {
        /*
           * There is a bug with jest-babel or babel-plugin-styled-components that results in these options only being correctly set for some nodes.
           * Ensure that the correct options are on the state object.
           * @see https://github.com/styled-components/babel-plugin-styled-components/issues/312
           */
        state.opts = {ssr: true, namespace: "sc-"};

        path.traverse(
          {
            JSXAttribute(path, state) {
              transpileCssProp(t)(path, state)
            },
            VariableDeclarator(path, state) {
              assignStyledRequired(t)(path, state)
            },
          },
          state
        )
      },
      CallExpression(path, state) {
        displayNameAndId(t)(path, state)
        pureAnnotation(t)(path, state)
      },
      TaggedTemplateExpression(path, state) {
        minify(t)(path, state)
        displayNameAndId(t)(path, state)
        templateLiterals(t)(path, state)
        pureAnnotation(t)(path, state)
      },
    },
  }
}
