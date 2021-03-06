import React from 'react'

import md from 'components/md'
import Code from 'components/Code'
import Table, { Row, Column } from 'components/Table'

const CSS = () => md`
  ### \`css\` | web | native

  A helper function to generate CSS from a template literal with interpolations. You need to use this if you return a
  template literal with interpolations inside an interpolation. (This is due to how tagged template literals work)

  If you're just returning a normal string you do not need to use this.

  ${
    <Table head={[ 'Arguments', 'Description' ]}>
      <Row>
        <Column>
          1. <Code>TaggedTemplateLiteral</Code>
        </Column>
        <Column>
          A tagged template literal with your CSS and interpolations.
        </Column>
      </Row>
    </Table>
  }

  Returns an array of interpolations, which is a flattened data structure that you can pass as an interpolation
  itself.

  \`\`\`jsx
  import styled, { css } from 'styled-components';

  const complexMixin = css\`
    color: \${props => props.whiteColor ? 'white': 'black'}
  \`;

  const StyledComp = styled.div\`
    /* This is an example of a nested interpolation */
    \${props => props.complex ? complexMixin : 'color: blue;'}
  \`;
  \`\`\`

  If you leave off the css your function will be \`toString()\`ed and you'll not get the results
  you expected.
`

export default CSS
