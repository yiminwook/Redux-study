/* eslint-disable react-hooks/rules-of-hooks */
const { alias, configPaths } = require("react-app-rewire-alias");
const { override } = require("customize-cra");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = override(alias(configPaths("./tsconfig.paths.json")));
