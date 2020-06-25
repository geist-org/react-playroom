module.exports = {
  components: "./components/index.ts",
  snippets: "./snippets/index.ts",
  themes: "./themes/index.ts",
  outputPath: "./dist",
  openBrowser: false,
  frameComponent: "./components/FrameComponent.tsx",
  typeScriptFiles: ["src/components/**/*.{ts,tsx}", "!**/node_modules"],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                "@babel/preset-react",
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
    },
  }),
};
