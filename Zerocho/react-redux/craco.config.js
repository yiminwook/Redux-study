const { CracoAliasPlugin } = require("react-app-alias");

const config = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
    },
  ],
  webpack: {
    plugins: {
      add: [],
    },
  },
  babel: {
    plugins: [],
  },
};

module.exports = config;
