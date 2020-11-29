const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
  ...addBabelPlugins(
    "babel-plugin-react-remove-properties",
    ...(process.env.NODE_ENV !== "production"
      ? ["babel-plugin-typescript-to-proptypes"]
      : [])
  )
);
