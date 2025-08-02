const path = require("path");
module.exports = (config, env) => {
  config.resolve.alias = {
    "@": path.resolve(__dirname, "./src/components/tiptap"),
  };
  config.resolve.extensions = [".js", ".jsx"];
  return config;
};
