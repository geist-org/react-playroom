module.exports = {
  title: 'React - ZEIT UI',
  components: './components/index.ts',
  snippets: './snippets/index.ts',
  themes: './themes/index.ts',
  outputPath: './dist',
  openBrowser: false,
  widths: [375, 740, 1024],
  frameComponent: './components/frame-component.tsx',
  typeScriptFiles: ['src/components/**/*.{ts,tsx}', '!**/node_modules'],
  exampleCode: `
    <Page>
      <Card>
        <Text>Hello, <Code>@zeit-ui/react</Code> app.</Text>
      </Card>
    </Page>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }),
}
