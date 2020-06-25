import dedent from "dedent";

export default [
  {
    group: "Button",
    name: "Default",
    code: dedent`
      <Button>Hello</Button>
    `,
  },
  {
    group: "Button",
    name: "Mini",
    code: dedent`
      <Button size="mini">Hello</Button>
    `,
  },
];
