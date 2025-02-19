import postcssPresetEnv from "postcss-preset-env";

const config = {
  plugins: [
    postcssPresetEnv({
      autoprefixer: {}
    })
  ]
};

export default config;
