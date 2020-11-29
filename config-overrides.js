const {
  override,
  addBabelPlugins,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");

module.exports = override(
  ...addBabelPlugins(
    "babel-plugin-react-remove-properties",
    ...(process.env.NODE_ENV !== "production"
      ? ["babel-plugin-typescript-to-proptypes"]
      : [])
  ),
  fixBabelImports("antd-mobile", {
    libraryDirectory: "es",
    libraryName: "antd-mobile",
    style: true,
  }),
  fixBabelImports("antd", {
    libraryDirectory: "es",
    libraryName: "antd",
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#35D073",
        "@text-color": "fade(@black, 85%)",
      },
    },
  })
);
