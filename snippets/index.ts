import dedent from 'dedent'

export default [
  {
    group: 'Button',
    name: 'Default',
    code: dedent`
      <Button>Hello</Button>
    `,
  },
  {
    group: 'Button',
    name: 'Mini',
    code: dedent`
      <Button size="mini">Hello</Button>
    `,
  },
  {
    group: 'Button',
    name: 'Loading',
    code: dedent`
      <Button loading>Hello</Button>
    `,
  },
  {
    group: 'Button',
    name: 'Disabled',
    code: dedent`
      <Button disabled>Hello</Button>
    `,
  },
  {
    group: 'Button',
    name: 'Shadow',
    code: dedent`
      <Button shadow type="secondary">Hello</Button>
    `,
  },
  {
    group: 'Spacer',
    name: 'Y',
    code: dedent`  <Spacer y={.5} />`,
  },
  {
    group: 'Card',
    name: 'Basic',
    code: dedent`<Card></Card>`,
  },
  {
    group: 'Card',
    name: 'Hoverable',
    code: dedent`<Card hoverable></Card>`,
  },
  {
    group: 'Card',
    name: 'Shadow',
    code: dedent`<Card shadow></Card>`,
  },
]
